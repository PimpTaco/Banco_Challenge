var cuenta = JSON.parse(localStorage.getItem("cuenta"));
var saldo = cuenta.Saldo
// Saldo que se mostrará
var saldox = document.getElementById("saldox")
// Input de retirar dinero
var retiro = document.getElementById("retiro")
//Boton retiro
var retirar = document.getElementById("retirar")
saldox.innerHTML = parseFloat(saldo)


function retirarx() {
    dinero = parseInt(saldox.innerHTML)
    disminuir = parseInt(retiro.value)
    if(dinero-disminuir>=10){
        saldox.innerHTML = dinero - disminuir
        alert("Tu retiro se ha realizado correctamente")
        retiro.value =""
        cuenta.Saldo= dinero - disminuir;
        localStorage.setItem ("cuenta", JSON.stringify(cuenta))
    } else {
        alert("Lo siento, no es posible retirar esta cantidad.")
        retiro.value =""
    }
}

retirar.addEventListener("click",retirarx)