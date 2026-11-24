console.log("Preparando los autos para iniciar los alquileres...");
let autoPreparado = 1;
while (autoPreparado <= 5) {
    console.log("Auto " + autoPreparado + " listo para alquilar.");
    autoPreparado++;
}
console.log("Todos los autos están preparados.");

let nivelLimpieza = 20;
let limpiezaPorLavado = 10;
let lavados = 0;

while (nivelLimpieza < 100) {
    nivelLimpieza += limpiezaPorLavado;
    lavados++;
    console.log("Limpiando el auto... Nivel de limpieza: " + nivelLimpieza + "%");
}

console.log("El auto quedó limpio después de " + lavados + " lavados.");

console.log("Consumo de combustible durante los alquileres:");
let combustible = 100;
let consumoPorViaje = 25;
let viajes = 0;

while (combustible >= consumoPorViaje) {
    combustible -= consumoPorViaje;
    viajes++;
    console.log("Viaje " + viajes + " realizado. Combustible restante: " + combustible + "%");
    if (combustible < 50) {
        console.log("Advertencia: queda poco combustible. Nivel actual: " + combustible + "%");
    }
}

console.log("No hay suficiente combustible para otro viaje.");
console.log("Total de viajes realizados: " + viajes);

console.log("Revisando el combustible antes de entregar el auto:");
let combustibleParaEntrega = 55;
do {
    console.log("El auto está en revisión. Combustible: " + combustibleParaEntrega + "%");
    combustibleParaEntrega -= 15;
} while (combustibleParaEntrega > 0);
console.log("La revisión terminó; se debe volver a cargar combustible.");

console.log("Ahorro para comprar un auto nuevo para la agencia:");
let ahorros = 200;
let meta = 500;
let ahorroSemanal = 70;
let semanas = 0;
do {
    ahorros += ahorroSemanal;
    semanas++;
    console.log("Semana " + semanas + ": ahorro actual: $" + ahorros + ".");
} while (ahorros < meta);
console.log("Meta alcanzada en " + semanas + " semanas. Ahorro total: $" + ahorros + ".");