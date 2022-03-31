var cuenta = JSON.parse(localStorage.getItem("cuenta"));
var saldo = cuenta.Saldo
// Saldo que se mostrará
var saldox = document.getElementById("saldox")
// Input de añadir dinero
var deposito = document.getElementById("recarga")
//Boton deposito
var depositar = document.getElementById("recargar")
saldox.innerHTML = parseFloat(saldo)

function depositarx() {
    alert('hola')
    dinero = parseInt(saldox.innerHTML)
    disminuir = parseInt(deposito.value)
    if(dinero-disminuir>=10){
        if(disminuir==10||disminuir==20||disminuir==30||disminuir==50||disminuir==100){
        saldox.innerHTML = dinero - disminuir
        alert("Tu recarga se ha realizado correctamente")
        deposito.value =""
        cuenta.Saldo= dinero - disminuir;
        localStorage.setItem ("cuenta", JSON.stringify(cuenta))
        } else {
            alert("Lo siento, no es posible recargar esta cantidad.\nPor favor escribe alguna de nuestras posibles recargas:\n10\n20\n30\n50\n100")
        }
    } else {
        alert("Lo siento, no es posible recargar esta cantidad.")
        deposito.value =""
    }
    
}

depositar.addEventListener("click",depositarx)