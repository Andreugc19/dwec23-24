// Exercici Planetas del Sistema Solar - Andreu Garcia

/* 
   Mercurio (58.344.000 km al sol) / Nº tamaño de la tierra (0,38 veces mas respecto a la tierra) / Descubrimiento (1610),
   Venus (107.712.000 km al sol) / Nº tamaño de la tierra (0.95 veces menos respecto a la tierra) / Descubrimiento (1610),
   Marte (227.392.000 km al sol) / Nº tamaño de la tierra (0.53 veces menos respecto a la tierra) / Descubrimiento (1610), 
   Jupiter (777.920.000 km al sol) / Nº tamaño de la tierra (11.2 veces mas respecto a la tierra) / Descubrimiento (1610),  
   Saturno (1.433.168.000 km del sol) / Nº tamaño de la tierra (9.45 veces mas respecto a la tierra) / Descubrimiento (1610)
*/

// Arrays para almacenar información sobre los planetas
const nombrePlanetas = ["Mercurio", "Venus", "Marte", "Jupiter", "Saturno"];
const distanciaPlanetaUA = [0.39, 0.72, 1.52, 5.20, 9.58]; // Distancia al Sol en UA (Unidades Astronómicas)
const tamañosPlaneta = [0.38, 0.95, 0.53, 11.21, 9.45]; // Tamaño relativo (Tierra = 1)
const descubrimientoFecha = [
  new Date("year, 1610"),
  new Date("year, 1610"),
  new Date("year, 1610"),
  new Date("year, 1610"),
  new Date("year, 1610")
];

// Función para crear objetos Planeta a partir de los arrays
function crearPlanetas() {
  const planetas = [];
  for (let i = 0; i < nombrePlanetas.length; i++) {
    const distanciaAlSolKM = distanciaPlanetaUA[i] * 149.6e6; // Convertir UA a kilómetros
    const planeta = {
      nombre: nombrePlanetas[i],
      distanciaAlSol: distanciaAlSolKM,
      tamañoRelativo: tamañosPlaneta[i],
      fechaDescubrimiento: descubrimientoFecha[i]
    };
    planetas.push(planeta);
  }
  return planetas;
}

// Función para mostrar la información de un planeta en la consola
function mostrarInformacionPlaneta(planeta) {
  console.log(`Planeta: ${planeta.nombre}`);
  console.log(`Distancia al Sol: ${planeta.distanciaAlSol} km`);
  console.log(`Tamaño relativo: ${planeta.tamañoRelativo} veces la tierra`);
  console.log(`Fecha de descubrimiento: ${planeta.fechaDescubrimiento.toDateString()}`);
  console.log("\n");
}

// Crear objetos Planeta y almacenarlos en un array
const planetas = crearPlanetas();

// Mostrar la información de todos los planetas
console.log("Información de todos los planetas:");
planetas.forEach(mostrarInformacionPlaneta);