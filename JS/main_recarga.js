var cuenta = JSON.parse(localStorage.getItem("cuenta"));
var saldo = cuenta.Saldo
// Saldo que se mostrará
var saldox = document.getElementById("saldox")
// Input de recargar dinero
var recarga = document.getElementById("recarga")
var numero = document.getElementById("num")
//Boton recarga
var recargar = document.getElementById("recargar")
saldox.innerHTML = parseFloat(saldo)

function recargarx() {
    dinero = parseInt(saldox.innerHTML)
    disminuir = parseInt(recarga.value)
    num = numero.value
    if(num.length == "10"){
            if(dinero-disminuir>=10){
                if(disminuir==10||disminuir==20||disminuir==30||disminuir==50||disminuir==100){
                saldox.innerHTML = dinero - disminuir
                alert("Tu recarga se ha realizado correctamente")
                recarga.value =""
                numero.value =""
                cuenta.Saldo= dinero - disminuir;
                localStorage.setItem ("cuenta", JSON.stringify(cuenta))
                } else {
                    alert("Lo siento, no es posible recargar esta cantidad.\nPor favor escribe alguna de nuestras posibles recargas:\n10\n20\n30\n50\n100")
                }
            } else {
                alert("Lo siento, no es posible recargar esta cantidad.")
                recarga.value =""
                numero.value =""
            }  
        } else {
            alert("Por favor ingresa un numero de 10 digitos")
        }
    }
recargar.addEventListener("click",recargarx)