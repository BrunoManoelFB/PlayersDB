<?php
require 'vendor/autoload.php';

$router = new AltoRouter();

// Se o seu projeto estiver em um subdiretório, ajuste o basePath, por exemplo:
// $router->setBasePath('/meu-projeto');

// Defina suas rotas:
$router->map('GET|POST', '/', function() {
    require 'pages/index.php';
}, 'home');

$router->map('GET|POST', '/players', function() {
    require 'pages/players.php';
}, 'players');

$router->map('GET|POST', '/convert_id', function() {
    require 'pages/convert_id.php';
}, 'convert_id');

$router->map('GET|POST', '/convert_stats', function() {
    require 'pages/convert_stats.php';
}, 'convert_stats');

$router->map('GET|POST', '/teditor', function() {
    require 'teditor/index.html';
}, 'teditor');

// Procura pela rota que combina com a URL atual:
$match = $router->match();

if ($match && is_callable($match['target'])) {
    // Chama a função anônima associada à rota
    call_user_func($match['target'], $match['params']);
} else {
    // Se nenhuma rota foi encontrada, retorna 404
    header("HTTP/1.0 404 Not Found");
    echo '404 Not Found';
}
