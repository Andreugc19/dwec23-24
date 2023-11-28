// Recuperar los elementos del DOM que nos interesen.
const boton = document.getElementsByTagName('button');
const envoltorio = document.getElementsByClassName('envoltorio-popup');
const cerrar = document.getElementsByClassName('cerrar-popup');

// EVENTOS
// Click sobre el boton para mostrar el pop-up
boton[0].addEventListener('click', () => {
    envoltorio[0].style.display = 'block';
});

// Click sobre el boton para cerrar el pop-up
cerrar[0].addEventListener('click', () => {
    envoltorio[0].style.display = 'none';
});

// Click sobre el envoltorio -> cerrar el pop-up
envoltorio[0].addEventListener('click', () => {
    envoltorio[0].style.display = 'none';
});