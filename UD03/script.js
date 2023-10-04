/*
    ESTRUCTURAS DE CONTROL

    Se utilizan para controlar el flujo
    de un programa.
*/

/*
    if
    Se utiliza para ejecutar un bloque de codigo
    si se cumple una condicion.
*/
// let edad = 14;
// let esMayorDeEdad = (edad >= 18);
// ?:
// let a = 100;
// let b = 100;
// let resultado = (a > b) ? (a - b) : (b - a);

// console.log(resultado);
/*if (esMayorDeEdad) {
    console.log("Eres mayor de edad");
} else if (edad > 12) {
    console.log("Teenager");
} else if (edad > 5) {
    console.log("Estas en Primaria");
} else {
    console.log("Eres un renacuajo");
}*/

/* Switch - Case
  | Cuando se quiera hacer una estructura condicional segun el valor
  que tenga una variable o expresion.
*/

// let nombre = "Gandalf";
// let edad;

// switch (nombre) {
//     case "Gandalf":
//       edad = 1230;
//       break;
//     case "Aragorn":
//       edad = 532;
//       break;
//     case "Frodo":
//       edad = 50;
//       break;
//     default:
//       edad = -1;
// }

// console.log("Nombre: " + nombre, "Edad: " + edad);

// ITERACIONES
// Se utilizan para repetir una porcion de codigo varias veces.

/* while
    Repetir un bloque mientras se cumpla una condicion.
*/
// let contador = 5;
// while (contador < 5) {
//     console.log(contador);
//     contador++;
// }

/* 
    do-while
    Repetir un bloque al menos una vez
*/
// let contador = 20;
// do {
//     console.log(contador);
//     contador--;
// } while (contador > 10)

/*
    for
    Repetir un bloque un numero especifico de veces

    break / continue
    break: detener la ejecucion del bucle.
    continue: saltar a la siguiente interacion
*/
// for (let i = 0; i < 5; i++) {
//     if(i == 2) {
//         break; // Detener el bucle cuando y sea 2.
//         continue; // Salta a la siguiente interacion que es 2.
//     }
//     console.log(i);
// }

// Ejercicio
/*
    
*/

let nomEstudiant = "Andreu";
let notaExamen1 = 8.4;
let notaExamen2 = 7.6;
let notaProjecte = 7.2;

const notaFinal = notaExamen1 * 0.2 + notaExamen2 * 0.2 + notaProjecte * 0.6;
console.log(notaFinal);
