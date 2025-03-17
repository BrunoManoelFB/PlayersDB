<?php 
// Eliminar o limite de tempo de execução
set_time_limit(0);

// CONFIGURAÇÃO: Definir se está em modo de testes (true = só até página 5, false = todas as páginas)
$modoPrueba = false; // Mudar para false para executar o scraping completo

// Seta o timezone de acordo com o padrão do servidor (normalmente igual ao do dispositivo)
date_default_timezone_set(date_default_timezone_get());

// Variáveis globais para acumular os logs
$logNuevos = "";
$logActualizados = "";

// Função para carregar cookies a partir de um arquivo JSON exportado
function cargarCookiesDesdeJson($rutaArchivo) {
    if (!file_exists($rutaArchivo)) {
        die("El archivo de cookies JSON no fue encontrado: $rutaArchivo");
    }
    $json = file_get_contents($rutaArchivo);
    $cookiesArray = json_decode($json, true);
    $cadenaCookies = "";
    foreach ($cookiesArray as $cookie) {
        $cadenaCookies .= "{$cookie['name']}={$cookie['value']}; ";
    }
    return trim($cadenaCookies);
}

// Função para buscar o HTML de uma página com tratamento de erros e reintentos
function obtenerHtmlPagina($url, $cookies) {
    $maxIntentos = 3; // Número máximo de tentativas
    $intentos = 0;
    $espera = 3; // Segundos de espera inicial

    while ($intentos < $maxIntentos) {
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_COOKIE, $cookies);
        curl_setopt($ch, CURLOPT_USERAGENT, obtenerUserAgentAleatorio()); // Rotação de User-Agent
        curl_setopt($ch, CURLOPT_HTTPHEADER, [
            'Referer: https://pesdb.net/',
            'Accept-Language: es-ES,es;q=0.9',
        ]);
        $respuesta = curl_exec($ch);
        $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        curl_close($ch);

        if ($httpCode == 200 && !empty($respuesta)) {
            return $respuesta;
        } elseif ($httpCode == 429) { // "Too Many Requests"
            echo "<script>console.log('Error 429: Demasiadas solicitudes. Esperando...');</script>";
            sleep($espera);
            $espera *= 2;
        } else {
            echo "<script>console.log('Error HTTP $httpCode al intentar acceder a la URL: $url');</script>";
            sleep(5);
        }
        $intentos++;
    }
    die("Error: No se pudo obtener la página después de $maxIntentos intentos.");
}

// Função para gerar um User-Agent aleatório
function obtenerUserAgentAleatorio() {
    $userAgents = [
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36",
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36",
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/119.0",
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Safari/605.1.15",
    ];
    return $userAgents[array_rand($userAgents)];
}

function obtenerFechaUltimaActualizacion($xpath) {
    // Buscar o nó que contém "Last update:"
    $nodoFecha = $xpath->query("//div[@id='footer']//text()[contains(., 'Last update:')]");
    if ($nodoFecha->length > 0) {
        preg_match('/Last update:\s*(\d{4}\/\d{2}\/\d{2})/', $nodoFecha->item(0)->textContent, $matches);
        if (!empty($matches[1])) {
            return date('Y-m-d', strtotime($matches[1]));
        }
    }
    return null;
}

// Função para registrar os cambios nos logs (sem criar arquivo ainda)
// O campo "Rating" é ignorado
function registrarCambiosEnLog($jugadorNuevo, $jugadorAntiguo = null, $lastUpdate) {
    global $logNuevos, $logActualizados;
    
    if (!$jugadorAntiguo) {
        // Jogador novo
        $logNuevos .= "{$jugadorNuevo['ID']}: {$jugadorNuevo['Player Name']} ({$jugadorNuevo['Team Name']})\n";
    } else {
        $cambios = [];
        foreach ($jugadorNuevo as $campo => $valor) {
            if ($campo !== 'LastUpdate' && $campo !== 'Rating' && isset($jugadorAntiguo[$campo]) && $jugadorAntiguo[$campo] !== $valor) {
                $cambios[] = "- {$campo}: {$jugadorAntiguo[$campo]} → {$valor}";
            }
        }
        if (!empty($cambios)) {
            $logActualizados .= "{$jugadorNuevo['ID']}: {$jugadorNuevo['Player Name']}\n";
            $logActualizados .= implode("\n", $cambios) . "\n\n";
        }
    }
}

// URL base
$urlBase = "https://pesdb.net/efootball/?mode=authentic&all=1&featured=0&sort=id&order=a";

// Caminho para os cookies exportados
$rutaCookies = 'pesdb_cookies.json';
$cookies = cargarCookiesDesdeJson($rutaCookies);

// Obter o HTML da primeira página
$htmlPrimeraPagina = obtenerHtmlPagina($urlBase, $cookies);

// Criar o objeto DOMDocument para a primeira página
$doc = new DOMDocument();
libxml_use_internal_errors(true);
$doc->loadHTML($htmlPrimeraPagina);
libxml_clear_errors();

// Carregar dados existentes, se o arquivo existir
$datosExistentes = [];
if (file_exists('pesdb_players.json')) {
    $jsonExistente = file_get_contents('pesdb_players.json');
    $datosExistentes = json_decode($jsonExistente, true);
    $datosExistentes = array_column($datosExistentes, null, 'ID');
}

// Registrar o tempo de início
$tiempoInicio = microtime(true);

// Criar objeto XPath para a primeira página
$xpath = new DOMXPath($doc);

// Buscar o total de jogadores
$totalJugadores = 0;
$nodoTotalJugadores = $xpath->query("//div[@class='pages']/span[contains(text(), 'players found')]");
if ($nodoTotalJugadores->length > 0) {
    preg_match('/(\d+) players found/', $nodoTotalJugadores->item(0)->textContent, $coincidencias);
    $totalJugadores = isset($coincidencias[1]) ? (int)$coincidencias[1] : 0;
}
if ($totalJugadores === 0) {
    die("Error: No se pudo encontrar el total de jugadores en la página. Verifique la estructura HTML o los cookies.");
}

// Buscar todas as páginas disponíveis
$numerosPaginas = [];
$paginas = $xpath->query("//div[@class='pages']/a");
foreach ($paginas as $pagina) {
    preg_match('/page=(\d+)/', $pagina->getAttribute('href'), $coincidencias);
    if (isset($coincidencias[1])) {
        $numerosPaginas[] = (int)$coincidencias[1];
    }
}
$totalPaginas = empty($numerosPaginas) ? 1 : max($numerosPaginas);
if ($modoPrueba) {
    $totalPaginas = min($totalPaginas, 5);
}

echo '<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Scraping PESDB</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="p-4">
    <h2>Recopilando jugadores de PESDB</h2>
    <p>Total de jugadores estimado: <strong>' . number_format($totalJugadores) . '</strong></p>
    <p><strong>Modo:</strong> ' . ($modoPrueba ? '<span class="text-warning">PRUEBA (hasta 5 páginas)</span>' : '<span class="text-success">COMPLETO</span>') . '</p>
    <div class="progress" style="height: 30px;">
        <div id="progressBar" class="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar" style="width: 0%;">0%</div>
    </div>
    <p id="status">Iniciando...</p>
    <script>
        function actualizarProgreso(porcentaje, encontrados, pagina) {
            document.getElementById("progressBar").style.width = porcentaje + "%";
            document.getElementById("progressBar").innerText = porcentaje.toFixed(1) + "%";
            document.getElementById("status").innerText = "Jugadores recopilados: " + encontrados + " | Página: " + pagina;
        }
    </script>';

flush();
ob_flush();

ini_set('memory_limit', '1024M');
$jugadoresRecopilados = 0;

for ($pagina = 1; $pagina <= $totalPaginas; $pagina++) {
    $urlPagina = ($pagina == 1) 
        ? "https://pesdb.net/efootball/?mode=authentic&all=1&featured=0&sort=id&order=a"
        : "https://pesdb.net/efootball/?mode=authentic&all=1&featured=0&sort=id&order=a&page=$pagina";

    $htmlPagina = obtenerHtmlPagina($urlPagina, $cookies);
    if (empty($htmlPagina)) {
        die("Error: ¡La página retornó vacía! Verifique los cookies o la URL: $urlPagina");
    }
    sleep(rand(1, 3));

    $dom = new DOMDocument();
    libxml_use_internal_errors(true);
    $dom->loadHTML($htmlPagina);
    libxml_clear_errors();
    $xpath = new DOMXPath($dom);

    $tablas = $xpath->query("//table[contains(@class, 'players')]");
    $lastUpdate = obtenerFechaUltimaActualizacion($xpath);

    foreach ($tablas as $tabla) {
        $filas = $tabla->getElementsByTagName('tr');
        $encabezados = [];
        $filaEncabezado = $filas->item(0);
        if ($filaEncabezado) {
            foreach ($filaEncabezado->getElementsByTagName('th') as $th) {
                $encabezados[] = trim($th->textContent);
            }
        }
        for ($i = 1; $i < $filas->length; $i++) {
            $fila = $filas->item($i);
            $celdas = $fila->getElementsByTagName('td');
            if ($celdas->length < count($encabezados)) {
                continue;
            }
            $jugador = [];
            foreach ($encabezados as $indice => $encabezado) {
                $celda = $celdas->item($indice);
                $jugador[$encabezado] = $celda ? trim($celda->textContent) : null;
            }
            $jugador['LastUpdate'] = $lastUpdate;
            $idJugador = $jugador['ID'];
            if (isset($datosExistentes[$idJugador])) {
                $jugadorExistente = $datosExistentes[$idJugador];
                $jugadorSinFecha = $jugador;
                $existenteSinFecha = $jugadorExistente;
                unset($jugadorSinFecha['LastUpdate']);
                unset($existenteSinFecha['LastUpdate']);
                if ($jugadorSinFecha != $existenteSinFecha) {
                    registrarCambiosEnLog($jugador, $jugadorExistente, $lastUpdate);
                    $datosExistentes[$idJugador] = $jugador;
                } else {
                    $datosExistentes[$idJugador]['LastUpdate'] = $lastUpdate;
                }
            } else {
                registrarCambiosEnLog($jugador, null, $lastUpdate);
                $datosExistentes[$idJugador] = $jugador;
            }
            $jugadoresRecopilados++;
        }
    }
    unset($htmlPagina, $dom, $xpath, $tablas);

    $dbLastUpdate = date('Y-m-d');
    $jsonDatos = array_merge([
        [
            "dbLastUpdate" => $dbLastUpdate,
            "pesdbData" => $lastUpdate
        ]
    ], array_values($datosExistentes));
    file_put_contents('pesdb_players.json', json_encode($jsonDatos, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));
    
    $progreso = ($totalJugadores > 0) ? (($jugadoresRecopilados / $totalJugadores) * 100) : 0;
    echo "<script>actualizarProgreso($progreso, $jugadoresRecopilados, $pagina);</script>";
    flush();
    ob_flush();
}

$tiempoFin = microtime(true);
$tiempoTranscurrido = $tiempoFin - $tiempoInicio;
$tiempoFormateado = gmdate("H:i:s", intval($tiempoTranscurrido));

echo "<script>actualizarProgreso(100, $jugadoresRecopilados);</script>";
echo "<p><strong>¡Extracción finalizada!</strong></p>";
echo "<p>Total de jugadores guardados: " . number_format($jugadoresRecopilados) . "</p>";
echo "<p>Tiempo total decurrido: $tiempoFormateado</p>";

// Concatena os logs finais com cabeçalho
$logFinal = "######" . date('d/m/Y') . "######\n";
$logFinal .= "Última Actualización del sitio: {$lastUpdate}\n\n";
$logFinal .= "***Jugadores Actualizados:***\n" . $logActualizados . "\n";
$logFinal .= "***Nuevos Jugadores:***\n" . $logNuevos;

// Cria o arquivo de log
$logFilename = "logs/" . date('Ymd_His') . "_log.txt";
if (!file_exists('logs/')) {
    mkdir('logs/', 0777, true);
}
file_put_contents($logFilename, $logFinal);

// Exibe as TextAreas com os logs
echo '<h3>Jugadores Actualizados</h3>';
echo '<textarea style="width:100%; height:200px;">' . htmlspecialchars($logActualizados) . '</textarea>';
echo '<h3>Nuevos Jugadores</h3>';
echo '<textarea style="width:100%; height:200px;">' . htmlspecialchars($logNuevos) . '</textarea>';

echo '</body></html>';
?>
