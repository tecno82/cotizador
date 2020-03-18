//Obtinene la diferncia de años
export function obtenerDiferenciaYear(year) {
  return new Date().getFullYear() - year;
}

// Calcula el total dependiendo de la procedencia del tarro
export function calcularMarca(marca) {
  let incremento;
  switch (marca) {
    case "europeo":
      incremento = 1.3;
      break;
    case "americano":
      incremento = 1.15;
      break;
    case "asiatico":
      incremento = 1.05;
      break;

    default:
      break;
  }
  return incremento;
}

// calcular el tipo de seguro

export function obtenerPlan(plan) {
  return plan === "basico" ? 1.2 : 1.5;
}

// colocar la primera letra en Mayuscula
export function primeraMayuscula(texto) {
  return texto.charAt(0).toUpperCase() + texto.slice(1);
}
