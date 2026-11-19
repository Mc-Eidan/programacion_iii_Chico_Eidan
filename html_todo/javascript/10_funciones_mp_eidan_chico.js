console.log("Agencia de alquiler de autos: funciones en JavaScript");

function prepararAuto() {
    console.log("Preparando el auto para el cliente...");
}
prepararAuto();

function asignarAuto(cliente) {
    console.log(cliente + " está recibiendo un auto asignado.");
}
asignarAuto("Carlos");

function cargarCombustible(combustible, recarga) {
    let combustibleTotal = combustible + recarga;
    if (combustibleTotal > 100) {
        combustibleTotal = 100;
    }
    console.log("Tanque cargado al " + combustibleTotal + "%.");
    return combustibleTotal;
}

let combustible = 50;
combustible = cargarCombustible(combustible, 30);
combustible = cargarCombustible(combustible, 40);

console.log("Calcular descuento del alquiler:");
function calcularDescuento(precioPorDia, descuento) {
    let precioFinal = precioPorDia - (precioPorDia * descuento / 100);
    return precioFinal;
}

let precioOriginal = 100;
let porcentajeDescuento = 20;
let precioConDescuento = calcularDescuento(precioOriginal, porcentajeDescuento);
console.log("Precio original: $" + precioOriginal);
console.log("Precio con descuento: $" + precioConDescuento);

function evaluarCombustible(combustibleActual, respuestasCorrectas, totalPreguntas) {
    let porcentajeCorrectas = (respuestasCorrectas / totalPreguntas) * 100;
    if (combustibleActual < 20) {
        console.log("ADVERTENCIA: combustible bajo. Nivel actual: " + combustibleActual + "%");
    }
    if (porcentajeCorrectas >= 70) {
        console.log("Evaluación aprobada con " + porcentajeCorrectas + "%.");
    } else {
        console.log("Evaluación no aprobada. Porcentaje obtenido: " + porcentajeCorrectas + "%");
    }
}

function alquilerConAprovechamiento(diasUsados) {
    let objetivo = 5;
    if (diasUsados >= objetivo) {
        console.log("Alquiler exitoso: el cliente utilizó " + diasUsados + " días.");
    } else {
        console.log("Alquiler poco aprovechado: solo se utilizaron " + diasUsados + " días.");
    }
}
