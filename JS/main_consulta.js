var cuenta = JSON.parse(localStorage.getItem('cuenta'));
var saldo = cuenta.Saldo
// Saldo que se mostrarĂ¡
var saldox = document.getElementById("saldox")
saldox.innerHTML = "$"+parseFloat(saldo)+" pesos"