console.log("ciclo for");
for (let i = 1; i <= 5; i++) {
    console.log("Revisión del auto número: " + i);
}

console.log("cuenta regresiva para la entrega del auto");
for (let i = 10; i >= 0; i--) {
    console.log("faltan " + i + " minutos para la entrega del auto");
}

console.log("cuenta regresiva para la entrega del auto con mensaje de entrega");
for (let i = 10; i >= 0; i--) {
    if (i === 0) {
        console.log("Entrega del auto en curso");
    } else {
        console.log("faltan " + i + " minutos para la entrega del auto");
    }
}

console.log("Nivel de combustible del auto");
let combustible = 50;
for (let i = 0; i <= 100; i += 10) {
    if (combustible >= i) {
        console.log("Nivel de combustible del auto: " + i + "%");
    }
}

let consumoPorAlquiler = 10;
let totalconsumo = 0;
for (let alquiler = 1; alquiler <= 5; alquiler++) {
    totalconsumo += consumoPorAlquiler;
    console.log("alquiler " + alquiler);
    console.log("total consumido:" + totalconsumo + " litros");
}
console.log("total consumido:" + totalconsumo + " litros");

console.log("promedio de ingresos por alquiler");
let totalIngresos = 0;
let dias = 7;
for (let dia = 1; dia <= dias; dia++) {
    let ingresos = dia * 50 + 50;
    totalIngresos += ingresos;
    console.log("Dia " + dia + ": " + ingresos + " dólares recaudados");
}
console.log("total de ingresos recaudados:" + totalIngresos);
console.log("promedio de ingresos por dia:" + (totalIngresos / dias).toFixed(2));

console.log("Disponibilidad de Autos");
let disponibles = 0;
let alquilados = 0;
for (let numeroAuto = 1; numeroAuto <= 10; numeroAuto++) {
    if (numeroAuto % 2 === 0) {
        console.log("Auto " + numeroAuto + " está alquilado");
        alquilados++;
    } else {
        console.log("Auto " + numeroAuto + " está disponible");
        disponibles++;
    }
}
console.log("Total de autos disponibles: " + disponibles);
console.log("Total de autos alquilados: " + alquilados);

console.log("recaudacion de alquileres de la semana");
let recaudaciones = [35, 60, 45, 80, 70, 90, 55];
let total = 0;
let alquileresRentables = 0;
for (let i = 0; i < recaudaciones.length; i++) {
    total += recaudaciones[i];
    console.log("Alquiler " + (i + 1) + ": " + recaudaciones[i] + " dólares recaudados");
    if (recaudaciones[i] >= 40) {
        alquileresRentables++;
    } else {
        console.log("Alquiler " + (i + 1) + " no fue rentable, se recaudaron menos de 40 dólares");
    }
}
console.log("Total recaudado: " + total);
console.log("Alquileres rentables: " + alquileresRentables);

console.log("Recorrer Flota de Autos con For ... of");
const autos = ["Toyota Yaris", "Kia Rio", "Chevrolet Spark", "Hyundai Tucson", "Nissan Kicks"];
for (let modelo of autos) {
    console.log("Auto :", modelo);
}

let auto = {
    modelo: "Kia Rio",
    kilometraje: 50000,
    precioPorDia: 40,
    accesorios: ["GPS", "Silla para bebé", "Portaequipaje"]
};

for (let propiedad in auto) {
    console.log(propiedad + ":", auto[propiedad]);
}

console.log("Accesorios del auto");
for (let accesorio of auto.accesorios) {
    console.log(accesorio);
}

let alquileres = [
    { nombre: "Alquiler 1", diasUsados: 9, diasContratados: 10, cliente: "Carlos" },
    { nombre: "Alquiler 2", diasUsados: 8, diasContratados: 10, cliente: "María" },
    { nombre: "Alquiler 3", diasUsados: 19, diasContratados: 20, cliente: "Luis" }
];

let aprovechados = 0;
for (let alquiler of alquileres) {
    let porcentaje = (alquiler.diasUsados / alquiler.diasContratados) * 100;
    console.log(alquiler.nombre + " de " + alquiler.cliente + " con un " + porcentaje.toFixed(2) + "% de uso");
    if (porcentaje >= 90) {
        aprovechados++;
    } else {
        console.log(alquiler.nombre + " no fue aprovechado, se usó menos del 90% de los días contratados.");
    }
}
console.log("Número de alquileres aprovechados: " + aprovechados);

for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log("Auto " + i + " en mantenimiento, se omite este auto.");
        continue;
    }
    console.log("Auto disponible: " + i);
}
for (let i = 1; i <= 10; i++) {
    if (i === 7) {
        console.log("Se encontró el auto 7 solicitado por el cliente, se detiene la búsqueda.");
        break;
    }
    if (i % 2 === 0) {
        console.log("Auto " + i + " en mantenimiento, se omite este auto.");
        continue;
    }
    console.log("Auto disponible: " + i);
}