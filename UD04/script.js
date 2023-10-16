/*
    ARRAYS
*/

// Definir Arrays
let vacio = []; // No tiene elementos
let primos = [2, 3, 5, 7, 11]; // Con 5 elementos numericos
let miscelanea = [1.1, true, "a",]; // Varios tipos y coma by the face
// Los valores no tienen porque ser constantes
// let n = 1024;
// let tabla = [n, n + 1, n + 2, n + 3];
// let contador = [,,,,];
// console.log(contador.length);

// Operador SPREAD
// let a = [1, 2, 3];
// let b = [0, ...a, 4];
// let original = [1, 2, 3];
// let copia = [...original];
// original[0] = 9;
// let digitos = [..."0123456789ABCDEFG"];

// Constructor de Array
// let aa = new Array(10);
// let bb = Array.of(10);
// aa[2] = 19;
// let i = 1;
// console.log(aa[2]);
// aa[2] = 'hola';
// console.log(aa[2]);

// PUSH
// aa.push('hola', 'adios', 99);
// console.log(aa);
// console.log(aa[aa.length - 2]);

// Push añade elementos al final
// let a = [1, 2, 3, 4];
// console.log(a);
// delete a[2];
// console.log(a);
// let i = 0;
// if(a[i]) {
//     console.log(a[i]);
// } else {
//     console.log("Slot vacio");
// }

// Interando Arrays
// let letras = [..."Hola amiguitos"];
// let aux = "";
// for(let letra of letras) {
//     aux += letra;
// }
// console.log(aux);
// aux = "";
// let suma = 0;
// for(let [index, letra] of letras.entries()) {
     // suma += index;
     // aux += letra;
//     if(index % 2 === 0) aux += letra;
// }
// console.log(aux);
// console.log("Suma: " + suma);
// let mayusculas = "";
// console.log(letras);
// letras.forEach(letra => {
//     if(index % 2 === 0) {
//         mayusculas += letra.toUpperCase();
//     } else {
//         mayusculas += letra;
//     }
//     index++;
// });
// console.log(mayusculas);
// let letra = "";
// let vocales = "";
// for(let i = 0; i < letras.length; i++){
//     letra = letras[i];
//     if(/[haeiou]/.test(letra)) {
//         vocales += letra;
//     }
// }
// console.log(vocales);

// ARRAYS MULTIDIMENSIONALES
// let tabla = new Array(10);
// for (let i = 0; i < tabla.length; i++) {
//   tabla[i] = new Array(5);
// }
// let divs = document.getElementsByClassName("tabla");
// for (let fila = 0; fila < tabla.length; fila++) {
//   let impares = "";
//   for (let col = 0; col < tabla[fila].length; col++) {
//     tabla[fila][col] = (col+1)*(fila);
//     if (tabla[fila][col] % 2 !=0 ) impares += tabla[fila][col]+ ", ";
//   }
//   if(impares!=""){
//     divs[fila].innerHTML = "<h3> Tabla del " + fila+ "</h3>" + impares;
//   }
// }
// console.log(tabla);

// METODOS DE ARRAYS
// push()
// pop() Elimina el ultimo elemento del array y lo devuelve
// let paco = ['joan', 'amparo', 'esther'];
// console.log(paco);
// let elementoEliminado = paco.pop();
// console.log(elementoEliminado);

// shift() Elimina el PRIMER elemento Y LO DEVUELVE
// let elementoEliminado = paco.shift();
// console.log(elementoEliminado);

// unshift() Agrega un o mas elementos AL PRINCIPIO
// paco.unshift('valentin', 'pepe');
// console.log(paco);

// concat() Combina dos o mas arrays y devuelve un nuevo array
// let paco = ['joan', 'amparo', 'esther'];
// let otros = ['valentin', 'pepe'];
// let combinacion = paco.concat(otros)
// console.log(combinacion);
// console.log(otros.concat(paco));

// slice() Devuelve una copia (superficial)
//de una porcion del array
// let copiaPaco = paco.slice(0, 3);
// console.log(copiaPaco);

// splice() Cambia el contenido de una array
// eliminando, reemplazando o agregando elementos
// let paco = ['joan', 'amparo', 'esther'];
// let otros = ['valentin', 'pepe'];
// paco.splice(2, 0, ...otros.splice(0, 1), ...otros.splice(0, 1));
/// console.log(paco);

// indexOf() Devuelve el primer indice en el que
// se encuentra un elemento dado. Devuelve -1 si
// no lo encuentra
// let paco = ['joan', 'amparo', 'esther', 'amparo'];
// let otros = ['valentin', 'pepe'];
// let indice = paco.indexOf('Amparo');
// let cadena = "Hola cara de bola";
// indice = cadena.indexOf("a");
// indice = paco.lastIndexOf("amparo")
// console.log(indice);

// join() Une todos los elementos de una array
// en una cadena (utilizando un separador)
// let paco = ['joan', 'amparo', 'esther', 'amparo'];
// let otros = ['valentin', 'pepe'];
// let cadena = paco.join(' X ')
// console.log(cadena);

// sort() Ordena los elementos de una array
// alfabeticamente si son cadenas
// numericamente si son numeros
// let paco = ['joan', 'amparo', 'esther', 'amparo', 'Zoraida', 'Bàrbara', 'Barbara'];
// let otros = [3, 4, 2, 10, -1, 0];
// console.log(paco.sort());
// console.log(otros.sort());
// Ordenar correctamente con sort => uso de parametro
// Se trata de una funcion:
// - Debe recibir dos valores a comparar
// - Como resultado debe:
//   - Devolver un valor positivo (1) si el primer valor
//     es superior al segundo
//   - Devolver un valor negativo (-1) si el primer valor
//     es supinferior al segundo
//   - Devolver un valor cero (0) si los dos valores son
//     iguales o equivalentes para la ordenacion

// sort en numeros
// let numeros = [10, 5, 8, 3, 1];
// console.log(numeros.sort((a, b) =>  b - a));

// sort en cadenas
let paco = ['joan', 'Ángel', 'Amparo', 'esther', 'amparo', 'Zoraida', 'Bàrbara', 'Barbara'];
// console.log(paco.sort((a, b) => {
//   return (a.toLowerCase() > b.toLowerCase()) ? 1 :
//   (a.toLowerCase() < b.toLowerCase()) ? -1 : 0;
// }));
// console.log(paco.sort((a, b) => {
//   return a.localeCompare(b);
// }));

/* 
  FUNCIONES
*/
// diHola();
// function diHola() {
//     console.log("Hola");
// }
// let resultado = multiplica(3, 10)
// console.log(resultado);
// function multiplica(c, d) {
//     let a = 10;
//     let b = 20;
//     return (a * b * c * d);
//     // console.log(a * b * c * d);
// }

/*
  OBJETOS
*/
// let unCliente = {
//     nombre: "Peter",
//     apellido: "Jackson",
//     'direccion fiscal': "c/ Desconocida",
//     "-+-+-+": "boquepasa",
//     pago: {
//         tipo: "Visa", 
//         tarjeta: "123456789",
//         "fecha de caducidad": "nunca"
//     },
//     vencimineto: 30
// }
// unCliente["vencimineto"] = 60;
// unCliente["-+-+-+"];
// console.log(unCliente.apellido);
// console.log(unCliente.pago["fecha de caducidad"]);
// console.log(unCliente);
// console.log(unCliente["-+-+-+"]);

// Metodos con elementos
// let estudiante = {
//     id: 2,
//     nombre: "Andreu",
//     diHola : function() {
//         return "Hola";
//     },
//     notas: [10, 0, 4],
//     calcularMedia : function() {
//         let suma = 0;
//         for (let i = 0; i < this.notas.length; i++) {
//             suma += this.notas[i];
//         }
//         return suma / this.notas.length;
//     }
// }
// estudiante.apellido = "Garcia"
// estudiante.diAdios = function() {
//     return "Adios";
// }
// console.log(estudiante.diAdios());
// console.log("Media de las notas: " + estudiante.calcularMedia());

// this
// let factura = {
//     descripcion: "Factura de prueba",
//     precio: 100.0,
//     iva: 21.0,
//     subTotal: function() {
//         return this.precio
//     },
//     total: function() {
//         return this.precio + (this.precio * this.iva) / 100
//     }
// }
// console.log(factura);
// console.log(factura.subTotal());
// console.log(factura.total());

// CONSTRUCTORES
// function Web() {
//     this.url = "http://localhost";
//     this.nombre = "Localhost";
//     this.muestraInformacion = function() {
//         return "Url: " + this.url + "\n" + "Web: " + this.nombre 
//     }
// }
// Web.prototype.visitas = 2;
// Web.prototype.miFuncion = function() {
//     return "Hola";
// }
// let unaWeb = new Web();
// unaWeb.url = "https://www.fcbarcelona.cat";
// unaWeb.nombre = "Mes que un club";
// console.log(unaWeb.miFuncion());
// console.log(unaWeb.muestraInformacion());
// let otraWeb = new Web();
// unaWeb.url = "https://www.athletic-club.eus/";
// unaWeb.nombre = "Aupa Athletic";
// console.log(unaWeb);
// console.log(unaWeb.muestraInformacion());