/*
    ARRAYS
*/

// Definir Arrays
// let vacio = []; // No tiene elementos
// let primos = [2, 3, 5, 7, 11]; // Con 5 elementos numericos
// let miscelanea = [1.1, true, "a",]; // Varios tipos y coma by the face
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
// let paco = ['joan', 'Ángel', 'Amparo', 'esther', 'amparo', 'Zoraida', 'Bàrbara', 'Barbara'];
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
// const ciudades = [
//   {
//     "municipio": "Zaragoza",
//     "provincia": "Zaragoza"
//   },
//   {
//     "municipio": "Ávila",
//     "provincia": "Ávila"
//   },
//   {
//     "municipio": "madrid",
//     "provincia": "madrid"
//   },
//   {
//     "municipio": "Barcelona",
//     "provincia": "Barcelona"
//   }
// ];
// console.log(ciudades);
// function ordenaPorFavor() {
// ciudades.sort((a, b) => {
//   return a.municipio.localeCompare(b.municipio);
// });
// }
// ordenaPorFavor();
// console.log(ciudades);

// ES6
// const miArray = ["A", "b", "C"];
// miArray.push("D");
// const A = "a";
// // A = "b";
// miArray[1] = "B";
// console.log(miArray);

// DESESTRUCTURACION
// const numeros = [1, 2, 3];
// const [a, b, c] = numeros;
// console.log(b);
// const persona = {
//   nombre: "Andreu",
//   edad: 33
// }

// const {nombre, edad} = persona;
// console.log(nombre);
// const nombre = "Josep";
// const edad = 33;
// const persona = {
//   nombre,
//   edad
// }
// console.log(persona.nombre);

// Template Strings - Plantillas de Cadenas
// operador de interpolacion ${}
// const nombre = "Bob Esponja";
// const edad = 32;
// const mensaje = `Hola, mi nombre es ${nombre} y tengo ${edad} años.`;
// console.log(mensaje);

// Operador spread
// const numeros = [1, 2, 3];
// const nuevosNumeros = [...numeros, 4, 5];
// console.log(nuevosNumeros);

// Parametros por defecto
// function saludar(nombre = "Invitado") {
//   console.log(`Hola, ${nombre}`);
// }
// saludar();

// Parametros rest (rest parameter)
// function sumar(...numeros) {
//   let resultado = 0;
//   for(let numero of numeros) {
//     resultado += numero;
//   }
//   console.log(typeof resultado);
//   return resultado;
// }
// let a = 10;
// console.log(sumar(4, -1, 6, 3, 65, 1001, -666, a));

// Funciones Flecha () => {}
// function sumar(a, b) {
//   return a + b;
// }
// const sumar = (a, b) => {
//   return a + b
// };
// console.log(sumar(3, 5));

// METODOS DE ARRAYS
// forEach(): Ejecuta una funcion (nuestra) una vez
// por cada elemento del array.
// const numeros = [1, 2, 3, 4, 5];
// const multiplica = (n) => {
//   return n * 2
// }
// numeros.forEach((numero) => {
//   console.log(multiplica(numero));
// })
// console.log(numeros);

// map(): Crea un nuevo array con los resultados de
// aplicar una funcion a cada elemento de la array.
// const dobleNumero = numeros.map((numero) => {
//   return multiplica(numero);
// })
// console.log(dobleNumero);

// filter(): Crea un nuevo array con todos los elementos
// que cumplan una condicion determinada.
// const numerosPares = numeros.filter((numero) => {
//   return numero % 2 === 0;
// });
// console.log(numerosPares);
// const numerosMayor2 = numeros.filter((numero) => {
//   return numero > 2 ;
// });
// console.log(numerosMayor2);

// reduce(): Aplica una funcion a un acumulador y a cada
// elemento del array (de izquierda a derecha) para
// reducirlo a un unico valor.
// const suma = numeros.reduce((acumulador, numero) => {
//   return acumulador + numero;
// }, 0);
// console.log(suma);

// find(): Devuelve el primer elemento del array que
// cumpla una determinada condicion.
// const numeroEncontrado = numeros.find((numero) => {
//   return numero < 3;
// });
// console.log(numeroEncontrado);

// findIndex(): Devuelve el indice del primer elemento
// del array que cumple con una funcion de prueba
// 0 -1 si no encuentra ná.
// const indiceEncontrado = numeros.findIndex((numero) => {
//   return numero < 3;
// });
// console.log(indiceEncontrado);

// some(): Comprueba si al menos un elemento de la array
// cumple una condicion determinada.
// const tieneNumeroPar = numeros.some((numero) => {
//   return numero % 2 === 0;
// });
// console.log(tieneNumeroPar);
// if(numeros.some((numero) => {
//   return numero % 2 === 0;
// })) {
//   console.log("fungiciona");
// }

// every(): Comprueba si TODOS los elementos cumplen
// una condicion determinada.
// const todosNumerosPares = numeros.every((numero) => {
//   if(numero > 3) {
//   return numero % 2 === 0;
//   } else {
//     return numero % 6 === 0;
//   }
// });
// console.log(todosNumerosPares);

// CLASSES - class

// class Persona {
//   constructor(nombre) {
//     this.nombre = nombre;
//   }

//   saludar() {
//     console.log(`Hola, soy ${this.nombre}.`);
//   }
// }

// const andreu = new Persona("Andreu");
// console.log(andreu);
// andreu.saludar();

// // HERENCIA
// class Empleado extends Persona {
//   constructor(nombre, salario) {
//     super(nombre);
//     this.salario = salario;
//   }

//   trabajar() {
//     console.log(`${this.nombre} está trabajando.`);
//   }
// }

// const maria = new Empleado("María", 300000);
// console.log(maria);
// maria.saludar();
// maria.trabajar();

// Simbolos
/*
  Los simbolos son una nueva clase de datos introducida porES6.
  Son valores unicos e inmutables.
  Se pueden utilizar como identificadores de propiedades de objetos.
*/
// const id = Symbol("id");
// const persona = {
//   nombre: "Andreu",
//   [id]: 1
// };
// console.log(persona[id]);

// ITERADORES
// Son objetos que implementan el protocolo de interacion en JavaScript.
// Permiten recorrer y acceder a los elementos de una coleccion uno a uno.

// const numeros = [1, 2, 3];
// const iterador = numeros[Symbol.iterator]();

// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());

// SET
// Permite almacenar valores ÚNICOS de qualquier tipo.
// No permite duplicados y ofrece metodos para agregar,
// eliminar y verificar la existencia de elementos.

// const setNumeros = new Set();
// setNumeros.add(1);
// setNumeros.add(2);
// setNumeros.add(3);

// console.log(setNumeros.has(2));
// setNumeros.delete(2);
// console.log(setNumeros.has(2));

// console.log(setNumeros.size);
// console.log(setNumeros);

// const iteratorNumeros = setNumeros[Symbol.iterator]();
// console.log(iteratorNumeros.next());

// MAP
// Permite almacenar PARES clave-valor, donde cada calve es ÚNICA.
// Permite operaciones de busqueda, insercion y eliminacion.

// const mapaNombres = new Map();
// mapaNombres.set("nombre", "Ana")
// mapaNombres.set("edad", 33);
// mapaNombres.set("profesion", "Desarrollador");

// console.log(mapaNombres.get("nombre"));
// console.log(mapaNombres.get("edad"));
// mapaNombres.delete("edad");
// console.log(mapaNombres.has("edad"));
// console.log(mapaNombres.size);
// console.log(mapaNombres);

