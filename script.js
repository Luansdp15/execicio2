function calcularimc() {
  var peso, altura

  peso = document.getElementById('peso').value
  altura = document.getElementById('altura').value

  imc = peso / altura

  document.querySelector("h1").innerHTML = "Seu imc é:" + imc.toFixed(2)
}