<?php
include '../includes/header.php'; // Cabeçalho comum (contém abertura do HTML, etc.)
?>
<div class="container mt-5">
  <div class="row justify-content-center">
    <div class="col-md-8">
      <div class="form-group">
        <label for="inputID">Insert Player ID to be converted:</label>
        <input type="number" class="form-control" id="inputID" min="1" required onkeydown="if(event.key === 'Enter') { convertID(); }">
      </div>
      <button type="button" class="btn btn-primary" onclick="convertID()">Convert</button>
      <div id="result"></div> <!-- Div para mostrar o resultado da conversão -->
    </div>
  </div>
</div>

<script>
function convertID() {
  var id = document.getElementById('inputID').value;
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById('result').innerHTML = this.responseText;
    }
  };
  xhttp.open("POST", "idconv.php", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send("id=" + id);
}
</script>
<?php
include '../includes/footer.php'; // Rodapé comum (fecha o HTML)
?>
