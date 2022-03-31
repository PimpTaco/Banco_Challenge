var cuenta = JSON.parse(localStorage.getItem("cuenta"));
var saldo = cuenta.Saldo
// Saldo que se mostrará
var saldox = document.getElementById("saldox")
// Input de añadir dinero
var deposito = document.getElementById("retiro")
//Boton deposito
var depositar = document.getElementById("retirar")
saldox.innerHTML = parseFloat(saldo)


function depositarx() {
    dinero = parseInt(saldox.innerHTML)
    disminuir = parseInt(deposito.value)
    if(dinero-agregar>=10){
        saldox.innerHTML = dinero - disminuir
        alert("Tu retiro se ha realizado correctamente")
        deposito.value =""
        cuenta.Saldo= dinero - disminuir;
        localStorage.setItem ("cuenta", JSON.stringify(cuenta))
    } else {
        alert("Lo siento, no es posible retirar esta cantidad.")
        deposito.value =""
    }
}

depositar.addEventListener("click",depositarx)