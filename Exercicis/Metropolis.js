// Exercici Metropolis - Andreu Garcia

const esCapital = true; // Si és una capital
const nombreDeCiutadans = 200000; // El nombre de ciutadans de la ciutat
const impostPerCiutada = 300.4; // L'impost mitjà mensual que paga un ciutadà

const esMetropolis = (esCapital && nombreDeCiutadans > 100000) || (!esCapital && nombreDeCiutadans > 200000 && impostPerCiutada * 12 > 720000000);

console.log(esMetropolis); // Aquesta variable serà certa si la ciutat és una metròpolis segons les condicions donades