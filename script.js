// Exercici Calculadora de Notes
// Declarar les variables

let nomEstudiant = "Andreu";
let notaExamen1 = 6.8;
let notaExamen2 = 8.2;
let notaProjecte = 7.4;

// Calcular la nota final
const notaFinal = (notaExamen1 * 0.2) + (notaExamen2 * 0.2) + (notaProjecte * 0.6);

// Mostrar les notes i la nota final per consola
console.log("Estudiant: " + nomEstudiant);
console.log("Nota de l'Examen 1: " + notaExamen1);
console.log("Nota de l'Examen 2: " + notaExamen2);
console.log("Nota del Projecte: " + notaProjecte);
console.log("Nota Final: " + notaFinal);

//  Determinar si l'estudiant ha aprovat
if (notaFinal >= 7) {
    console.log("Felicitats, " + nomEstudiant + "! Has aprovat el mòdul!");
} else {
    console.log("Ho sentim, " + nomEstudiant + ". Necessites millorar la teva nota per a aprovar el mòdul.");
}