// JS asincrono (una linea de codigo)

/*
L1
L2 --> atacar a una base de datos,hasta que no acabe n ejecuta la siguientes
L3
L4

no es agradable

vamos a utilizar unas funcioes asincronas que usan en situaciones que necesitamos mucho tiempo estas funciones haran la consulta sin entorpecer el codigo y al finalizar nos daran el resultado sin entorpecer al resto

usaremos callback para llamar al resultado
*/

// console.log("Uno");
// console.log("Dos");

// setTimeout(() => {
//     console.log("Funcion de callback lanzada");
// },10000);

// console.log("Tres");
// console.log("Cuatro");

const obtenerTODOS = (miCallback, source) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', ()=> {
        if(request.readyState === 4 && request.status === 200) {
        // console.log(request, request.readyState);
        // console.log(request.responseText);
        const respuesta = JSON.parse(request.responseText);
        miCallback(undefined, respuesta);
        } else if(request.readyState === 4) {
        // console.log("No se han podido obtener los datos");
        miCallback("No se han podido obtener los datos", undefined);
        }
    });
    
    // open
    // p1: tipo de solicitud
    // p2: a quien solicitamos (a que endpoint)
    
    request.open('GET', source);
    
    // send
    request.send();
};

console.log("Uno");
console.log("Dos");

// LLAMADA A LA FUNCION
obtenerTODOS((error, datos) => {
    console.log("callback 1 disparado");
    // console.log(error, datos);
    gestionRespuesta(error, datos);

    obtenerTODOS((error, datos) => {
        console.log("callback 2 disparado");
        // console.log(error, datos);
        gestionRespuesta(error, datos);

        obtenerTODOS((error, datos) => {
            console.log("callback 3 disparado");
            // console.log(error, datos);
            gestionRespuesta(error, datos);
            
        }, 'todos/tareas3.json');

    }, 'todos/tareas2.json');

}, 'todos/tareas1.json');

function gestionRespuesta(error, datos) {
    if(error) {
        console.log(error);
    } else {
        console.log(datos);
    }
}

console.log("Tres");
console.log("Cuatro");