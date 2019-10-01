//Declaración de variables
var nombreUsuario = "Piatti Andres";

var saldoCuenta = 6000;

var limiteExtraccion = 1500;

var agua = 350;

var telefono = 425;

var luz = 210;

var internet = 570;

var cuentaAmiga1 = 1234567;

var cuentaAmiga2 = 7654321;

var codigoDeSeguridad = 1989;

function sumarDinero(montoDinero){
    return saldoCuenta + montoDinero;
}

function restarDinero(montoDinero){
    return saldoCuenta - montoDinero;
}

function haySaldoDisponible(montoDinero){
    if(saldoCuenta >= montoDinero){
        return true;
    } else{
        alert("No hay saldo en tu cuenta para extraer esa cantidad de dinero.");
    }
}

function noSuperaLimiteDeExtraccion(montoDinero){
    if(limiteExtraccion >= montoDinero){
        return true;
    }else{
        alert("la cantidad de dinero que deseas extraer es mayor a tu limite de extraccion.");
    }
}

function extraccionBilletesCien(montoDinero){
    if(montoDinero % 100 == 0){
        return true;
    }else{
        alert("Solo puede entregar billetes de $100");
    }
}

//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function() {
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
}


//Funciones que tenes que completar
function cambiarLimiteDeExtraccion() {
    var nuevoLimiteExtraccion = parseInt(prompt("¿Cuanto desea que sea el limite?"));
    if(isNaN(nuevoLimiteExtraccion)){
        return false;     
    }else{
        limiteExtraccion = nuevoLimiteExtraccion;
        actualizarLimiteEnPantalla();
        alert("Nuevo limite de extraccion: $" + nuevoLimiteExtraccion); 
    }
}

function extraerDinero() {
    var montoExtraccion = parseInt(prompt("¿Cuanto desea extraer?"));
    if(isNaN(montoExtraccion)){
        return false;
    }else{
        var montoAnterior = saldoCuenta;
        if(haySaldoDisponible(montoExtraccion) && noSuperaLimiteDeExtraccion(montoExtraccion) && extraccionBilletesCien(montoExtraccion)){
            saldoCuenta = restarDinero(montoExtraccion);
            actualizarSaldoEnPantalla();
            alert("Has extraido: $" + montoExtraccion + "\n Saldo anterior: $" + montoAnterior + "\n Saldo Actual $" + saldoCuenta);
        }else{
            return false;
        }
    }
   
}

function depositarDinero() {
    var montoDeposito = parseInt(prompt("¿Cuanto desea depositar?"));
    if(isNaN(montoDeposito)){
        return false;
    }else{
        var montoAnterior = saldoCuenta;
        saldoCuenta = sumarDinero(montoDeposito);
        actualizarSaldoEnPantalla();
        alert("Has depositado: " + montoDeposito + "\n Saldo anterior: " + montoAnterior + "\n Saldo Actual " + saldoCuenta);
    }  
}

function pagarServicio() {
    var montoPagoServicio = prompt("Ingrese el numero que corresponda con el servicio que queres pagar: \n 1- Agua \n 2- Luz \n 3- Internet \n 4-Telefono");
    if(isNaN(montoPagoServicio)){
        return false;
    }else{
        var montoAnterior = saldoCuenta;
        switch(montoPagoServicio){
            case "1":
                if(saldoCuenta >= agua){
                    saldoCuenta = saldoCuenta - agua;
                    alert("Has pagado el servicio de Agua \n Saldo anterior: $" + montoAnterior + "\n Dinero descontado: $" + agua +  "\n Saldo Actual : $" + saldoCuenta);
                    actualizarSaldoEnPantalla();
                }else{
                    alert("No hay suficiente saldo en tu cuenta para pagar este servicio.");
                }
                break;
            case "2":
                if(saldoCuenta >= luz){
                    saldoCuenta = saldoCuenta - luz;
                    alert("Has pagado el servicio de Luz \n Saldo anterior: $" + montoAnterior + "\n Dinero descontado: $" + luz +  "\n Saldo Actual : $" + saldoCuenta);
                    actualizarSaldoEnPantalla();
                }else{
                    alert("No hay suficiente saldo en tu cuenta para pagar este servicio.");
                }
                break;
            case "3":
                if(saldoCuenta >= internet){
                    saldoCuenta = saldoCuenta - internet;
                    alert("Has pagado el servicio de Agua \n Saldo anterior: $" + montoAnterior + "\n Dinero descontado: $" + internet +  "\n Saldo Actual : $" + saldoCuenta);
                    actualizarSaldoEnPantalla();
                }else{
                    alert("No hay suficiente saldo en tu cuenta para pagar este servicio.");
                }
                break;
            case "4":
                if(saldoCuenta >= telefono){    
                    saldoCuenta = saldoCuenta - telefono;
                    alert("Has pagado el servicio de Agua \n Saldo anterior: $" + montoAnterior + "\n Dinero descontado: $" + telefono +  "\n Saldo Actual : $" + saldoCuenta);
                    actualizarSaldoEnPantalla();
                }else{
                    alert("No hay suficiente saldo en tu cuenta para pagar este servicio.");
                }
                break;
            default:
                alert("No existe el servicio que se ha seleccionado");      
        }
    }
}

function transferirDinero() {
    var montoTransferencia = parseInt(prompt("¿Cuanto desea transferir?"));
    if(isNaN(montoTransferencia)){
        return false;
    }else{
        if(saldoCuenta >= montoTransferencia){
            var numeroCuenta = prompt("Ingrese el numero de cuenta de destino");
            if(numeroCuenta == cuentaAmiga1 || numeroCuenta == cuentaAmiga2){
                saldoCuenta = saldoCuenta - montoTransferencia;
                alert("Se han transferido: $" + montoTransferencia + "\nCuenta destino: " + numeroCuenta);
                actualizarSaldoEnPantalla();
            }else{
                alert("Solo puede transferirse dinero a una cuenta amiga.");
            }
    
        }else{
            alert("No puede transferirse esa cantidad de dinero.");
        }
    } 
}

function iniciarSesion() {
    var codigoCuenta = parseInt(prompt("Ingrese su codigo de cuenta"));
    if(isNaN(codigoCuenta)){
        return iniciarSesion();
    }else{
        if(codigoCuenta == codigoDeSeguridad){
            alert("Bienvenido/a " + nombreUsuario + " " + "ya puedes comenzar a realizar operaciones.");
        }else{
            alert("Codigo incorrecto: Tu dinero ha sido retenido por cuestiones de seguridad");
            saldoCuenta = saldoCuenta - saldoCuenta;
            actualizarSaldoEnPantalla();
        }
    }
}

iniciarSesion();

//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}