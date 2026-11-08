console.log("Condicional If-Else If Múltiples Caminos");
let tipoAuto = "SUV";
if (tipoAuto === "Sedan") {
    console.log("Alquiler de auto sedan: tarifa económica.");
} else if (tipoAuto === "SUV") {
    console.log("Alquiler de SUV: tarifa intermedia.");
} else if (tipoAuto === "Camioneta") {
    console.log("Alquiler de camioneta: tarifa alta.");
} else {
    console.log("Tipo de auto no disponible en nuestro catálogo.");
}

console.log("Condicional If Anidado");
let tieneLicencia = "si";
let edadConductor = 23;

if (tieneLicencia === "si") {
    if (edadConductor >= 21) {
        console.log("Tienes licencia y la edad mínima, puedes alquilar un auto.");
    } else {
        console.log("Tienes licencia, pero necesitas tener al menos 21 años para alquilar.");
    }
} else {
    console.log("No puedes alquilar un auto sin licencia de conducir.");
}

console.log("Condicional con Operadores Lógicos");
let edad = 30;
let licenciaVigente = "si";
let tarjetaCredito = "si";
let depositoPagado = "no";
let autoDisponible = "si";

if (edad >= 21 &&
    licenciaVigente === "si" &&
    tarjetaCredito === "si" &&
    depositoPagado === "si" &&
    autoDisponible === "si") {
    console.log("Alquiler Autorizado.");
} else {
    console.log("No se puede autorizar el alquiler por los siguientes motivos:");
    if (edad < 21) {
        console.log("- No cumples con la edad mínima.");
    }
    if (licenciaVigente === "no") {
        console.log("- Tu licencia no está vigente.");
    }
    if (tarjetaCredito === "no") {
        console.log("- No tienes tarjeta de crédito para la garantía.");
    }
    if (depositoPagado === "no") {
        console.log("- No has pagado el depósito.");
    }
    if (autoDisponible === "no") {
        console.log("- El auto no está disponible.");
    }
    if (tarjetaCredito === "no" && depositoPagado === "no") {
        console.log("- No tienes ni tarjeta ni depósito, no hay forma de garantizar el alquiler.");
    }
}

console.log("Resumen del alquiler");
let diasAlquiler = 5;
let precioPorDia = 40;
let kmPermitidos = 1000;
let kmRecorridos = 1150;
let precioKmExtra = 0.5;
let autoDanado = "no";
let tanqueLleno = "si";
let descuento = 0;
let kmExtra = 0;
let recargoKm = 0;

let costoBase = diasAlquiler * precioPorDia;
let porcentajeUsoKm = (kmRecorridos / kmPermitidos) * 100;

console.log("Evaluación del kilometraje");
if (kmRecorridos <= kmPermitidos) {
    console.log("Kilometraje dentro del límite permitido.");
} else if (porcentajeUsoKm <= 120) {
    kmExtra = kmRecorridos - kmPermitidos;
    recargoKm = kmExtra * precioKmExtra;
    console.log("Excediste el kilometraje, se cobra un recargo moderado.");
} else {
    kmExtra = kmRecorridos - kmPermitidos;
    recargoKm = kmExtra * precioKmExtra * 2;
    console.log("Excediste mucho el kilometraje, se cobra un recargo doble.");
}

console.log("Evaluación de descuento por cliente");
if (diasAlquiler >= 7 && kmRecorridos <= kmPermitidos) {
    descuento = costoBase * 0.1;
    console.log("Descuento del 10% por alquiler largo y buen uso del auto.");
} else {
    console.log("No se otorga descuento.");
}

console.log("Devolución del auto");
if (autoDanado === "no" && tanqueLleno === "si") {
    console.log("Auto devuelto en perfectas condiciones.");
} else if (autoDanado === "no" && tanqueLleno === "no") {
    console.log("Auto devuelto sin daños, pero con el tanque vacío: se cobra el combustible.");
} else if (autoDanado === "si" && tanqueLleno === "si") {
    console.log("Auto devuelto con daños: se cobra la reparación.");
} else {
    console.log("Auto devuelto con daños y sin combustible: se cobra reparación y combustible.");
}

let totalPagar = costoBase + recargoKm - descuento;

console.log("Resumen final");
console.log("Días de alquiler:", diasAlquiler);
console.log("Precio por día:", precioPorDia);
console.log("Costo base:", costoBase);
console.log("Km permitidos:", kmPermitidos);
console.log("Km recorridos:", kmRecorridos);
console.log("Porcentaje de uso de km:", porcentajeUsoKm.toFixed(2) + "%");
console.log("Recargo por km extra:", recargoKm);
console.log("Descuento aplicado:", descuento);
console.log("Auto dañado:", autoDanado);
console.log("Tanque lleno:", tanqueLleno);
console.log("Total a pagar:", totalPagar);