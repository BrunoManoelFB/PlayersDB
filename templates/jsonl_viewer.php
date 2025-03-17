<?php
// jsonl_viewer.php

// Configurações iniciais
$availableFiles = [
    "sofifa_players.jsonl"
];

// Parâmetros via GET
$selectedFile = isset($_GET['file']) && in_array($_GET['file'], $availableFiles) ? $_GET['file'] : $availableFiles[0];
$searchQuery = isset($_GET['search']) ? trim($_GET['search']) : "";
$rowsPerPageOptions = [20, 50, 100, 200];
$rowsPerPage = isset($_GET['rows']) && in_array((int)$_GET['rows'], $rowsPerPageOptions) ? (int)$_GET['rows'] : 20;
$page = isset($_GET['page']) && is_numeric($_GET['page']) && (int)$_GET['page'] > 0 ? (int)$_GET['page'] : 1;

// Função para carregar o arquivo JSONL e converter para registros
function load_jsonl($filePath) {
    if (!file_exists($filePath)) {
        return [[], []];
    }
    $lines = file($filePath, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    if (empty($lines)) {
        return [[], []];
    }
    $headers = json_decode($lines[0], true);
    $records = [];
    for ($i = 1; $i < count($lines); $i++) {
        $row = json_decode($lines[$i], true);
        if (is_array($row) && count($row) == count($headers)) {
            $records[] = array_combine($headers, $row);
        }
    }
    return [$headers, $records];
}

// Carrega os dados do arquivo selecionado
list($headers, $records) = load_jsonl($selectedFile);

// Filtra os registros se houver pesquisa
if (!empty($searchQuery)) {
    $records = array_filter($records, function($record) use ($headers, $searchQuery) {
        foreach ($headers as $header) {
            if (isset($record[$header]) && stripos($record[$header], $searchQuery) !== false) {
                return true;
            }
        }
        return false;
    });
}

// Paginação
$totalRecords = count($records);
$totalPages = $totalRecords > 0 ? ceil($totalRecords / $rowsPerPage) : 1;
if ($page > $totalPages) {
    $page = $totalPages;
}
$start = ($page - 1) * $rowsPerPage;
$displayedRecords = array_slice($records, $start, $rowsPerPage);

?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>JSONL Viewer</title>
    <!-- Você pode incluir um framework CSS, por exemplo, Bootstrap -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <style>
      body { padding: 20px; }
      .table-responsive { margin-top: 20px; }
      .pagination { margin-top: 20px; }
    </style>
  </head>
  <body>
    <h1>JSONL Viewer</h1>
    
    <!-- Formulário para selecionar arquivo, pesquisa e linhas por página -->
    <form method="GET" class="form-inline mb-3">
      <label class="mr-2" for="fileSelect">Arquivo:</label>
      <select name="file" id="fileSelect" class="form-control mr-3">
        <?php foreach ($availableFiles as $file): ?>
          <option value="<?php echo htmlspecialchars($file); ?>" <?php echo $file === $selectedFile ? "selected" : ""; ?>>
            <?php echo htmlspecialchars($file); ?>
          </option>
        <?php endforeach; ?>
      </select>

      <label class="mr-2" for="searchInput">Pesquisar:</label>
      <input type="text" name="search" id="searchInput" value="<?php echo htmlspecialchars($searchQuery); ?>" class="form-control mr-3" placeholder="Digite para filtrar">

      <label class="mr-2" for="rowsSelect">Linhas por página:</label>
      <select name="rows" id="rowsSelect" class="form-control mr-3">
        <?php foreach ($rowsPerPageOptions as $opt): ?>
          <option value="<?php echo $opt; ?>" <?php echo $rowsPerPage == $opt ? "selected" : ""; ?>>
            <?php echo $opt; ?>
          </option>
        <?php endforeach; ?>
      </select>

      <button type="submit" class="btn btn-primary">Atualizar</button>
    </form>

    <p>Total de registros encontrados: <?php echo $totalRecords; ?></p>

    <!-- Tabela -->
    <div class="table-responsive">
      <table class="table table-bordered table-striped table-sm">
        <thead class="thead-dark">
          <tr>
            <?php foreach ($headers as $header): ?>
              <th><?php echo htmlspecialchars($header); ?></th>
            <?php endforeach; ?>
          </tr>
        </thead>
        <tbody>
          <?php if (count($displayedRecords) > 0): ?>
            <?php foreach ($displayedRecords as $record): ?>
              <tr>
                <?php foreach ($headers as $header): ?>
                  <td><?php echo htmlspecialchars($record[$header] ?? ""); ?></td>
                <?php endforeach; ?>
              </tr>
            <?php endforeach; ?>
          <?php else: ?>
            <tr>
              <td colspan="<?php echo count($headers); ?>">Nenhum registro encontrado.</td>
            </tr>
          <?php endif; ?>
        </tbody>
      </table>
    </div>

    <!-- Paginação -->
    <nav aria-label="Page navigation">
      <ul class="pagination">
        <?php if ($page > 1): ?>
          <li class="page-item">
            <a class="page-link" href="?<?php echo http_build_query(array_merge($_GET, ['page' => $page - 1])); ?>">Anterior</a>
          </li>
        <?php endif; ?>
        
        <?php
          // Exibe até 7 páginas antes e depois da página atual
          $startPage = max(1, $page - 7);
          $endPage = min($totalPages, $page + 7);
          for ($i = $startPage; $i <= $endPage; $i++):
        ?>
          <li class="page-item <?php echo $i == $page ? 'active' : ''; ?>">
            <a class="page-link" href="?<?php echo http_build_query(array_merge($_GET, ['page' => $i])); ?>"><?php echo $i; ?></a>
          </li>
        <?php endfor; ?>
        
        <?php if ($page < $totalPages): ?>
          <li class="page-item">
            <a class="page-link" href="?<?php echo http_build_query(array_merge($_GET, ['page' => $page + 1])); ?>">Próxima</a>
          </li>
        <?php endif; ?>
      </ul>
    </nav>

    <!-- Optional: incluir o Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
  </body>
</html>
