// Exercici Planetas del Sistema Solar - Andreu Garcia

/* 
   Mercurio (57.900.000 km al sol) / Nº tamaño de la tierra (0,38 veces mas respecto a la tierra) / Descubrimiento (1610),
   Venus (108.200.000 km al sol) / Nº tamaño de la tierra (0.95 veces menos respecto a la tierra) / Descubrimiento (1610),
   Marte (227.900.000 km al sol) / Nº tamaño de la tierra (0.53 veces menos respecto a la tierra) / Descubrimiento (1610), 
   Jupiter (778.300.000 km al sol) / Nº tamaño de la tierra (11.2 veces mas respecto a la tierra) / Descubrimiento (1610),  
   Saturno (1.427.000.000 km del sol) / Nº tamaño de la tierra (9.45 veces mas respecto a la tierra) / Descubrimiento (1610)
*/

// Definicio de la clase planeta
class Planeta {
  constructor(nombre, distanciaAlSol, tamanoRelativo, fechaDescubrimiento) {
    this.nombre = nombre;
    this.distanciaAlSol = distanciaAlSol;
    this.tamanoRelativo = tamanoRelativo;
    this.fechaDescubrimiento = new Date(fechaDescubrimiento);
  }
  
  // Metodo para mostrar informacion del planeta
  mostrarInformacion() {
    console.log(`Planeta: ${this.nombre}`);
    console.log(`Distancia al Sol: ${this.distanciaAlSol} millones de kilómetros al sol.`);
    console.log(`Tamaño relativo a la Tierra: ${this.tamanoRelativo} veces la tierra.`);
    console.log(`Fecha de descubrimiento: ${this.fechaDescubrimiento.toDateString()}`);
    console.log('\n');
  }
}

// Arrays con la informacion de los planetas
const arrayPlanetas = [
  ['Mercurio', 57.9, 0.38, '-265, 1, 1'],
  ['Venus', 108.2, 0.95, 'year, 1610'],
  ['Marte', 227.9, 0.53, 'year, 1610'],
  ['Júpiter', 778.3, 11.2, 'year, 1610'],
  ['Saturno', 1427.0, 9.45, 'year 1610']
];

const planetas = [];

// Crear objetos Planeta a partir de los arrays utilizando un bucle
for (const informacioPlanetas of arrayPlanetas) {
  const [nombre, distanciaAlSol, tamanoRelativo, fechaDescubrimiento] = informacioPlanetas;
  const planeta = new Planeta(nombre, distanciaAlSol, tamanoRelativo, fechaDescubrimiento);
  planetas.push(planeta);
}

// Mostrar la informacion de todos los planetas en la consola
console.log('Información de los planetas:');
for (const planeta of planetas) {
  planeta.mostrarInformacion();
}