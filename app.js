let numeroSecreto = 0;
let intentos = 0;
let listaSorteados = [];
let maximoIntentos = 10;


condicionesIniciales();

function asignarTextoElemento (elemento, texto) {
    let elementoHtml = document.querySelector(elemento) ;
    elementoHtml.innerHTML = texto;
    return;
}

function limpiarCaja () {
    let vaciarEspacio = document.getElementById("interaccionDeBoton")
    vaciarEspacio.value = "";
}

function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random()*maximoIntentos)+1;
   
    if (listaSorteados.length == maximoIntentos) {
        asignarTextoElemento ("p","ya se mostraron todos los numeros posibles")
    } else {
        //si el numero generado esta en la lista, realizar una accion, sino seguir el juego de forma normal
        if (listaSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales(){
    asignarTextoElemento ("h1", "Bienvenido al juego")
    asignarTextoElemento ("p",`elige un número del 1 al ${maximoIntentos}`)
    numeroSecreto = generarNumeroSecreto ();
    intentos = 1;
    console.log(numeroSecreto);
}


function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById ("interaccionDeBoton").value);
    console.log(numeroUsuario === numeroSecreto) //=== es igual valor igual tipo de valor, es decir, numero numero, etc

    if(numeroUsuario===numeroSecreto) {
        asignarTextoElemento("p",`Acertaste el número en ${intentos} ${(intentos === 1) ? "vez" : "veces"} `)
        document.getElementById("reiniciar").removeAttribute("disabled");
    }else {
        if(numeroSecreto > numeroUsuario) {
            asignarTextoElemento("p","El número es mayor")
        }else {
            asignarTextoElemento("p","El número es menor")
        }
        intentos++;
        limpiarCaja();
    }
}

function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
    document.getElementById("reiniciar").setAttribute("disabled","true");
}





