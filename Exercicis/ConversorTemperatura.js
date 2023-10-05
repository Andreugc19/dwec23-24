// Exercici Conversor i Analisi de Temperatures - Andreu Garcia

// Declarar les temperatures en graus Celsius per a cada any i mes
const any2010Juny = 25.8;
const any2010Juliol = 28.6;
const any2010Agost = 30.1;

const any2015Juny = 26.5;
const any2015Juliol = 29.3;
const any2015Agost = 30.8;

const any2020Juny = 27.2;
const any2020Juliol = 29.9;
const any2020Agost = 31.5;

// Calcular la temperatura mitjana per a cada any
const mitjanaAny2010 = (any2010Juny + any2010Juliol + any2010Agost) / 3;
const mitjanaAny2015 = (any2015Juny + any2015Juliol + any2015Agost) / 3;
const mitjanaAny2020 = (any2020Juny + any2020Juliol + any2020Agost) / 3;

// Comprova si la mitjana és major de 30 graus Celsius utilitzant l'operador ternari
const superatAny2010 = mitjanaAny2010 > 30 ? true : false;
const superatAny2015 = mitjanaAny2015 > 30 ? true : false;
const superatAny2020 = mitjanaAny2020 > 30 ? true : false;

// Conversió de les temperatures mitjanes a Fahrenheit i Kelvin
const mitjanaAny2010Fahrenheit = (mitjanaAny2010 * 9/5) + 32;
const mitjanaAny2010Kelvin = mitjanaAny2010 + 273.15;

const mitjanaAny2015Fahrenheit = (mitjanaAny2015 * 9/5) + 32;
const mitjanaAny2015Kelvin = mitjanaAny2015 + 273.15;

const mitjanaAny2020Fahrenheit = (mitjanaAny2020 * 9/5) + 32;
const mitjanaAny2020Kelvin = mitjanaAny2020 + 273.15;

// Mostrar per consola les temperatures mitjanes i si han superat els 30 graus Celsius o no
console.log("Mitjana 2010 (°C): " + mitjanaAny2010);
console.log("Mitjana 2010 (°F): " + mitjanaAny2010Fahrenheit);
console.log("Mitjana 2010 (K): " + mitjanaAny2010Kelvin);
console.log("Ha superat els 30 graus Celsius el 2010? " + superatAny2010);

console.log("Mitjana 2015 (°C): " + mitjanaAny2015);
console.log("Mitjana 2015 (°F): " + mitjanaAny2015Fahrenheit);
console.log("Mitjana 2015 (K): " + mitjanaAny2015Kelvin);
console.log("Ha superat els 30 graus Celsius el 2015? " + superatAny2015);

console.log("Mitjana 2020 (°C): " + mitjanaAny2020);
console.log("Mitjana 2020 (°F): " + mitjanaAny2020Fahrenheit);
console.log("Mitjana 2020 (K): " + mitjanaAny2020Kelvin);
console.log("Ha superat els 30 graus Celsius el 2020? " + superatAny2020);
