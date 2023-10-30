// Declaración de variables
let elCrono;
let miFecha = new Date();
let laHora = document.getElementById("lahora");

// Inicializar el tiempo para la cuenta atrás a las 23:00:02
miFecha.setHours(23);
miFecha.setMinutes(59);
miFecha.setSeconds(59);

// Inicializar el texto de "lahora" con la hora actual
actualizarTextoHora();

// Función para contar hacia atrás
function crono() {
    let horas = miFecha.getHours();
    let minutos = miFecha.getMinutes();
    let segundos = miFecha.getSeconds();

    if (horas === 0 && minutos === 0 && segundos === 0) {
        stop();
        return;
    }

    if (segundos === 0) {
        if (minutos === 0) {
            horas -= 1;
            minutos = 59;
        } else {
            minutos -= 1;
        }
        segundos = 59;
    } else {
        segundos -= 1;
    }

    miFecha.setHours(horas);
    miFecha.setMinutes(minutos);
    miFecha.setSeconds(segundos);

    actualizarTextoHora();
}

// Función para reiniciar el contador
function reiniciarCrono() {

    miFecha.setHours(23);
    miFecha.setMinutes(59);
    miFecha.setSeconds(59);

    actualizarTextoHora();
}

// Función para actualizar el texto que muestra la hora
function actualizarTextoHora() {
    let horas = miFecha.getHours();
    let minutos = miFecha.getMinutes();
    let segundos = miFecha.getSeconds();

    let horasStr = horas < 10 ? "0" + horas : horas;
    let minutosStr = minutos < 10 ? "0" + minutos : minutos;
    let segundosStr = segundos < 10 ? "0" + segundos : segundos;

    laHora.innerHTML = horasStr + ":" + minutosStr + ":" + segundosStr;
}

// Función para iniciar la cuenta atrás
function start() {
    elCrono = setInterval(crono, 1000); // Ejecutar la función "crono" cada segundo
}

// Función para detener la cuenta atrás
function stop() {
    clearInterval(elCrono); // Detener el intervalo de tiempo
}

// Función para detener y reiniciar la cuenta atrás
function reset() {
    stop();
    reiniciarCrono();
}
