// querySelector
// parametro: un selector CSS
// const para = document.querySelector('p');
// console.log(para);

// querySelectorAll
// parametro: selector CSS
// const paras = document.querySelectorAll('p');
// console.log(paras);
// console.log(paras[0]);
// paras.forEach(para => {
//     console.log(para);
// })

// getElementbyId
// parametro: nombre del identificador
// const titulo = document.getElementById('titulo');
// console.log(titulo);

// getElementsByClassName
// parametro; nombre de la clase asociada a ese elemento
// const errors = document.getElementsByClassName('error');
// console.log(errors);
// console.log(errors[0]);

// getElementsByTagName
// parametro: nombre del tag del documento
// const paras = document.getElementsByTagName('p');
// console.log(paras);

// Modificar el contenido de la pagina
// innerHTML
// let paras = document.querySelectorAll('p');
// let p1 = paras[0];
// let contenidoP1 = p1.innerText;
// console.log(contenidoP1);
// p1.innerHTML = "Requete";
// contenidoP1 = p1.innerText;
// console.log(contenidoP1);

// Obtener y establecer atributos
// let enlace = document.querySelector('a');
// let url = enlace.getAttribute("href");
// console.log(url);
// enlace.setAttribute('href', 'http://www.seat.es');
// url = enlace.getAttribute("href");
// console.log(url);

// Añadir y eliminar estilos
// style
// let error = document.querySelector('body > div.error');
// error.style.backgroundColor = "lightblue";
// error.style.backgroundColor = "";

// Añadir y eliminar clases
// let error = document.querySelector('body > div.error');
// error.classList.add("paco");
// error.classList.remove("error");
// let paras = document.getElementsByTagName('p');
// let hijo = paras[2];
// console.log(hijo);
// let padre = hijo.parentNode;
// console.log(padre);
// let primerHermano = padre.firstElementChild;
// console.log(primerHermano);
// let siguienteHermano = hijo.nextElementSibling;
// console.log(siguienteHermano);

// EVENTOS
// Referenciamos el elemento del DOM
const par = document.querySelector('p');
// Creamos un evento para ese elemento
par.addEventListener('click', (e) => {
    // escribeLog();
    console.log(e.target.innerText);
    e.target.innerText = "Texto cambiado";
    console.log(e.target.innerText);
});
// Creamos otro evento para ese elemento
// par.addEventListener('mouseover', () => {
//     escribeLog();
// })

function escribeLog() {
    console.log('He hecho click sobre el parrafo');
}

function escribeOtroLog() {
    console.log('He pasado el puentero sobre el primer parrafo');
}

document.addEventListener("keydown", (e) => {
    console.log("Tecla presionada: " + e.key);
});