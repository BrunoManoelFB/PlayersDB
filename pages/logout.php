<?php
session_start();
session_unset();
session_destroy();
header('Location: ' . $_SERVER['HTTP_REFERER']); // Redirecionar para a página de origem
exit();
?>
