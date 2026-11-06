    console.log("Condicional If");
let energia = 100;

console.log("Condicional Simple If");
if (energia > 0) {
    console.log("Tienes energía suficiente para continuar la aventura.");
}

console.log("Condicional If-Else Dos Caminos");
let combustible = 50;
if (combustible > 0) {
    console.log("Tienes combustible suficiente para continuar la aventura.");
} else {
    console.log("No tienes combustible suficiente para continuar la aventura.");
}

console.log("Condicional If-Else If Múltiples Caminos");
let dimension = "C-137";
if (dimension === "C-137") {
    console.log("Estás en tu dimensión original.");
} else if (dimension === "C-140") {
    console.log("Estás en una dimensión alternativa.");
} else {
    console.log("Estás en una dimensión desconocida.");
}

console.log("Condicional If Anidado");
let energia2 = 50;
let combustible2 = 400;

if (energia2 > 0) {
    if (combustible2 > 0) {
        console.log("Tienes energía y combustible suficiente para continuar la aventura.");
    } else {
        console.log("Tienes energía, pero no tienes combustible suficiente para continuar la aventura.");
    }
}

console.log("Condicional con Operadores Lógicos");
let combustible4 = 80;
let energia4 = 70;
let rick_disponible = "si";
let summer_disponible = "no";
let nave_averiada = "no";

if (combustible4 >= 50 &&
    energia4 >= 50 &&
    rick_disponible === "si" &&
    summer_disponible === "si" &&
    nave_averiada === "no") {
    console.log("Viaje Autorizado.");
} else {
    if (combustible4 < 50) {
        console.log("No puedes viajar a otra dimensión, no tienes suficiente combustible.");
    }
    if (energia4 < 50) {
        console.log("No puedes viajar a otra dimensión, no tienes suficiente energía.");
    }
    if (rick_disponible === "no") {
        console.log("No puedes viajar a otra dimensión, Rick no está disponible.");
    }
    if (summer_disponible === "no") {
        console.log("No puedes viajar a otra dimensión, Summer no está disponible.");
    }
    if (nave_averiada === "si") {
        console.log("No puedes viajar a otra dimensión, la nave está averiada.");
    }
    if (rick_disponible === "no" && summer_disponible === "no") {
        console.log("No puedes viajar a otra dimensión, ni Rick ni Summer están disponibles.");
    }
}

console.log("Misión interdimensional");
let cristalesObjetivos = 200;
let cristalesRecolectados = 150;
let combustibleInicial = 1000;
let combustibleConsumido = 850;
let mortyHerido = "si";
let naveAveriada = "no";
let bonificacion = 0;
let porcentajeCumplimiento = (cristalesRecolectados / cristalesObjetivos) * 100;
let combustibleRestante = combustibleInicial - combustibleConsumido;

if (porcentajeCumplimiento >= 100 && combustibleRestante > 0 && mortyHerido === "no" && naveAveriada === "no") {
    console.log("Misión Cumplida con Éxito");
} else if (porcentajeCumplimiento >= 70 && porcentajeCumplimiento < 90) {
    console.log("Misión Cumplida Parcialmente");
} else if (porcentajeCumplimiento >= 50 && porcentajeCumplimiento < 70) {
    console.log("Misión Regular, se requiere mejorar el desempeño");
} else {
    console.log("Misión Fallida y Peligro de Extinción");
}

console.log("Evaluación de bonificación por desempeño");
if (porcentajeCumplimiento >= 90 && combustibleRestante >= 200) {
    bonificacion = 1000;
    console.log("Bonificación otorgada por desempeño excelente.");
} else {
    console.log("No se otorga bonificación por desempeño.");
}

console.log("Regreso seguro a la dimensión original");
if (mortyHerido === "no" && naveAveriada === "no") {
    console.log("Regreso seguro a la dimensión original.");
} else if (mortyHerido === "si" && naveAveriada === "no") {
    console.log("Regreso a la dimensión original con precaución, Morty está herido.");
} else if (mortyHerido === "no" && naveAveriada === "si") {
    console.log("Regreso a la dimensión original con precaución, la nave está averiada.");
} else {
    console.log("Regreso a la dimensión original con precaución, Morty está herido y la nave está averiada.");
}

console.log("Resumen de la misión");
console.log("Cristales Objetivos:", cristalesObjetivos);
console.log("Cristales Recolectados:", cristalesRecolectados);
console.log("Porcentaje de Cumplimiento:", porcentajeCumplimiento.toFixed(2) + "%");
console.log("Combustible Inicial:", combustibleInicial);
console.log("Combustible Consumido:", combustibleConsumido);
console.log("Combustible Restante:", combustibleRestante);
console.log("Morty Herido:", mortyHerido);
console.log("Nave Averiada:", naveAveriada);
console.log("Bonificación Otorgada:", bonificacion);