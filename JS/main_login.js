
    var cuentas = [
        {Nombre: "Marcos Vleeschower", Saldo: 300, Password:"Spartan17", Usuario:"Vleeschowder"},
        {Nombre: "Manuel Ramos", Saldo: 666, Password:"yungtaco420", Usuario:"PimpTaco"},
        {Nombre: "Salvador Soto", Saldo: 420, Password:"bigsoto69", Usuario:"TheSotoKing"}
    ]

    // console.log (cuentas[1].Saldo)

// variables del Login

// inputs
var loginuserRequest = document.getElementById("loginuserRequest")
var loginpasswordRequest = document.getElementById("loginpasswordRequest")

// buttons
var loginButton = document.getElementById("loginButton")

    
// // Function del Login Manual

function redirectHome (){

    var userSelected = loginuserRequest.value
    var passwordSelected = loginpasswordRequest.value
    

    if (userSelected === "Vleeschowder" && passwordSelected === "Spartan17" ){
        location.href ="home.html"
        var cuenta = cuentas[0]
        localStorage.setItem ("cuenta", JSON.stringify(cuenta))

    } else if (userSelected === "PimpTaco" && passwordSelected === "yungtaco420"){
        location.href ="home.html"
        var cuenta = cuentas[1]    
        localStorage.setItem ("cuenta", JSON.stringify(cuenta))

    } else if (userSelected === "TheSotoKing" && passwordSelected === "bigsoto69"){
        location.href ="home.html"
        var cuenta = cuentas[2]
        localStorage.setItem ("cuenta", JSON.stringify(cuenta))

    } else if (userSelected === "" || passwordSelected === "" ){
        alert("Ingrese sus datos")
    } else{
        alert("Usuario o Contraseña no validos, revise sus datos")
    }
}

loginButton.addEventListener("click", redirectHome)

function getlocalStorage (){
    if (localStorage.getItem ("cuenta")){
        var clienteSeleccionado = JSON.parse (localStorage.getItem ("cuenta"));
        console.log(clienteSeleccionado)
    } else{
        console.log ("No hay entradas")
    }

}

getlocalStorage();



