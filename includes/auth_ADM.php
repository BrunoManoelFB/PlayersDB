<?php
if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

if (!isset($_SESSION['isAdmin']) || $_SESSION['isAdmin'] != 1) {
    echo '
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Access Denied</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
        <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    </head>
    <body>
        <div class="modal" tabindex="-1" role="dialog" id="accessDeniedModal">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Access Denied</h5>
                    </div>
                    <div class="modal-body">
                        <p>You do not have permission to access this page.</p>
                    </div>
                </div>
            </div>
        </div>
        <script>
            $(document).ready(function() {
                $("#accessDeniedModal").modal("show");
                setTimeout(function() {
                    window.location.href = "../pages/index.php";
                }, 3000);
            });
        </script>
    </body>
    </html>';
    exit();
}
?>
