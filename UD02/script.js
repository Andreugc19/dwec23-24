
// Funcion saluda();
// Muestra un mensaje de saludo por consola
/*
    Funcion saluda();
    Muestra un mensaje de saludo por consola
*/
/*
saluda();
function saluda() {
    console.log("Hola cara de bola");
}
*/

// var, let, const
// var edad = 33;
// let nombre = "Andreu";
// let adelante = true;
// if(adelante) {
//     let nombre = "Joan";
//     console.log(nombre);
// }
// console.log(edad);
// console.log(nombre);
// let uno = 1; let dos = 2;
// console.log(uno + dos);

//String
// let nombre = "Andreu";
// let apellido = 'Garcia';
// let nombreCompleto = "Andreu Garcia, alumne de DWEC";
// let comillas = 'Texto \'entrecomillado\'';
// console.log(comillas);

//Numeros
// let edad = -26;
// let masEdad = 66;
// let precio = 21.99;
// let aprobados = Infinity;
// let suspendidos = -Infinity;
// let anyos = "26";
// console.log(typeof edad);
// console.log(typeof anyos);
// console.log(typeof precio);
// console.log(aprobados + aprobados);

//Null
// let valor = null;
// console.log(typeof valor);

//Undefined
// let algo;
// console.log(typeof algo);

//NaN
// let miEdad = "veintiseis";
// console.log(miEdad / 2);

//typeOf, delete
// let edad = 26;
// console.log(typeof edad);
// delete(edad);
// console.log(edad);
// let persona = {
//     nombre: "Andreu",
//     edad: 33
// }
// console.log(persona.edad);
// delete persona.edad;
// console.log(persona.edad);

//Booleanos
// let messi = true;
// let penaldo = false; //falsy
//null, "" (String vacio), undefined, 0, NaN
// let algo;
// if (!algo){
//     console.log("hola");
// } else {
//     console.log("Adiós");
// }

//Operadores Aritmeticos
// -> operaciones matematicas
// +    a + b
// -    a - b
// *    a * b
// /    a / b
// %    a % b (modulo)
// ++   incremento a++, ++a;
// --   decremento a--, --a;
// +=   suma y asigna a += b // a = a + b;
// -=   resta y asigna a -= b // a = a - b;
// *=   multiplica y asigna a *= b // a = a * b;
// /=   divide y asigna a /= b // a = a / b;
// %=   modula y asigna a %= b // a = a % b;
// -> cambio de signo   // a = 5, b = -a, b = -5
// let a = 4;
// let b = 2;
// let c = (a%=b);
// console.log(c);

//Conversion de tipos
// let a = "5";
// let b = "6";
// console.log(typeof a, typeof b);
// let A = +a;
// let B = +b;
// console.log(typeof a, typeof b);
// let c = "4.52";
// let C = c;
// console.log(a + b);
// console.log(typeof a, typeof b);

//Operadores de Comparacion
// -> Comparar dos valores y devolver un resultado booleano
// > mayor que
// console.log(5 > 4);
// < menor que
// console.log(3 < 4);
// >= mayor o igual que
// console.log(3 >= 3);
// <= menor o igual que
// console.log(5 <= 5);
// == igual que
// let a = 5;
// let b = 6;
// console.log(a == b);
// != distinto que
// === igual en valor y tipo que
// !== distinto en valor o en tipo que
// console.log(a !== b);

//Operadores Booleanos
// -> Permiten comprara expresiones booleanas con las que
// se construyen condiciones que se pueden aplicar en 
// funciones, bucles, etc.
// && AND Solo devuelve true cuando ambos operadores lo son
/*
    true && true -> true
    true && false -> false 
    false && true -> false 
    false && false -> false 
*/
// || OR Devuelve true si cualquiera de ambos operadores lo es
/*
    true || true -> true
    true || false -> true
    false || true -> true
    false || false -> false
*/
// console.log(a | b);
// let cadena;
// if (cadena != null && cadena.length > 0) {
//     console.log(cadena);
// } else {
//     console.log("La cadena esta vacia");
// }
// ! NOT Devuelve lo contrario al operando
// let a = false;
// let b = false;
// console.log(!a);

//Ejercicio
/*
    Se nos facilitan tres variables
    que contienen informacion sobre
    una ciudad.

    let esCapital; //booleana
    let numeroCiudadanos, //int
    let impuestoPorCiudadano; //float

    - esCapital: sera cierta si y solo
    si la ciudad es capital.
    - numeroCiudadanos: es el numero
    de ciudadanos de esa ciudad.
    - impuestoPorCiudadano: es el 
    impuesto medio mensual que paga
    un ciudadano de esa ciudad.

    Para nosotros, una Metropolis
    sera una ciudad si bien es una
    capital con mas de 100000 ciudadanos
    o bien es una ciudad con mas de 
    200000 ciudadanos y una renta
    media de 720000000 al año.

    Dad una expresion booleana con las 
    tres variables de tal manera que sea 
    cierta si y solo si la ciudad es una
    Metropolis.
*/
// let esCapital = false;
// let numeroCiudadanos = 200001;
// let impuestoPorCiudadano = 300.4;

// const primeraCondicion = esCapital ==true && numeroCiudadanos > 100000;
// const segundaCondicion1 = numeroCiudadanos > 200000; 
// const segundaCondicion2 = impuestoPorCiudadano * 12 > 720000000;
// const segundaCondicion = segundaCondicion1 && segundaCondicion2;
// const metropolis = primeraCondicion || segundaCondicion;

// const metropolis = (esCapital && numeroCiudadanos > 100000) || ((numeroCiudadanos > 200000) && (impuestoPorCiudadano * 12 > 720000000))

// console.log("Es Metropolis?", metropolis);

// const esCapital = true; // Si és una capital
// const nombreDeCiutadans = 200000; // El nombre de ciutadans de la ciutat
// const impostPerCiutada = 300.4; // L'impost mitjà mensual que paga un ciutadà

// const esMetropolis = (esCapital && nombreDeCiutadans > 100000) || (!esCapital && nombreDeCiutadans > 200000 && impostPerCiutada * 12 > 720000000);

// console.log(esMetropolis); // Aquesta variable serà certa si la ciutat és una metròpolis segons les condicions donades

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
