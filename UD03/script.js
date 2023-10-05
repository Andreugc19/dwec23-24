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

// Declarar les variables
let nomEstudiant = "Andreu";
let notaExamen1 = 8.50;
let notaExamen2 = 9.20;
let notaProjecte = 7.80;

// Calcular la nota final
const notaFinal = (notaExamen1 * 0.2) + (notaExamen2 * 0.2) + (notaProjecte * 0.6);

// Mostrar les notes i la nota final per consola
console.log("Estudiant: " + nomEstudiant);
console.log("Nota de l'Examen 1: " + notaExamen1);
console.log("Nota de l'Examen 2: " + notaExamen2);
console.log("Nota del Projecte: " + notaProjecte);
console.log("Nota Final: " + notaFinal.toFixed(2)); // Fixem el nombre de decimals a 2

//  Determinar si l'estudiant ha aprovat
if (notaFinal >= 7) {
    console.log("Felicitats, " + nomEstudiant + "! Has aprovat el mòdul!");
} else {
    console.log("Ho sentim, " + nomEstudiant + ". Necessites millorar la teva nota per a aprovar el mòdul.");
}