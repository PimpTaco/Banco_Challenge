var cuenta = JSON.parse(localStorage.getItem("cuenta"));
var saldo = cuenta.Saldo
// Saldo que se mostrará
var saldox = document.getElementById("saldox")
// Input de añadir dinero
var deposito = document.getElementById("deposito")
//Boton deposito
var depositar = document.getElementById("depositar")
saldox.innerHTML = parseFloat(saldo)

function depositarx() {
    dinero = parseInt(saldox.innerHTML)
    agregar = parseInt(deposito.value)
    if(dinero+agregar<=990){
        saldox.innerHTML = dinero + agregar
        alert("Tu deposito se ha realizado correctamente")
        deposito.value =""
        cuenta.Saldo= dinero + agregar;
        localStorage.setItem ("cuenta", JSON.stringify(cuenta))
    } else {
        alert("Lo siento, no es posible depositar esta cantidad.")
        deposito.value =""
    }
}

depositar.addEventListener("click",depositarx)