// Exercici Kaprekar - Andreu Garcia
function numeroKaprekar(numero, intentos) {
    if (numero == 6174 || intentos === 0) {
      if (numero == 6174) {
      return { resultat: numero, intentos: 7 - intentos }; // Se ha encontrado el número de Kaprekar
    } else {
      return null; // No se ha encontrado el número de Kaprekar
    }
  }
  
    // Convierte el número en un arreglo de dígitos
    const digitos = numero.toString().split('').map(Number);
  
    // Asegura que el número tenga 4 dígitos rellenando con ceros si es necesario
    while (digitos.length < 4) {
      digitos.push(0);
    }
  
    // Ordena los dígitos en orden ascendente y descendente
    const ascender = digitos.slice().sort((a, b) => a - b).join('');
    const descender = digitos.slice().sort((a, b) => b - a).join('');
  
    // Calcula la diferencia
    const diferencia = descender - ascender;
  
    // Realiza la recursión con un intento menos
    return numeroKaprekar(diferencia, intentos - 1);
  }
  
  function encontrarKaprekar() {
    const entrada = prompt("Introduce un numero de 4 digitos:");
    const numero = Number(entrada);

    if (entrada.length !== 4 || isNaN(numero)) {
        console.log("Introduce un número válido de 4 dígitos.");
    } else {
        const maximoIntentos = 7;
        const resultat = numeroKaprekar(numero, maximoIntentos);

        if (resultat === null) {
          console.log("No se ha podido encontrar el numero de Kaprekar.");
        } else {
          console.log(`Se ha encontrado el numero de Kaprekar: ${resultat.resultat} en ${resultat.intentos} intentos.`);
        }
    }
}

