let tarifasPorDia = [30, 50, 70, 40];
for (let i = 0; i < tarifasPorDia.length; i++) {
    console.log("Posición:", i);
    console.log("Tarifa:", tarifasPorDia[i]);
}

console.log("----------------------------------------");
let tarifas = [30, 50, 70, 40];
let posicion = 2;
let nuevaTarifa = 100;
for (let i = 0; i < tarifas.length; i++) {
    console.log("Posición:", i);
    console.log("Tarifa:", tarifas[i]);
    if (posicion >= 0 && posicion < tarifas.length) {
        tarifas[posicion] = nuevaTarifa;
    } else {
        console.log("Posición no válida");
    }
}
console.log(tarifas);

console.log("----------------------------------------");
let clientes = [
    { id: 1, nombre: "Carlos", dias: 5, edad: 30 },
    { id: 2, nombre: "María", dias: 3, edad: 25 },
    { id: 3, nombre: "Luis", dias: 7, edad: 40 }
];
for (let cliente of clientes) {
    console.log("ID:", cliente.id);
    console.log("Nombre:", cliente.nombre);
    console.log("Días:", cliente["dias"]);
    console.log("Edad:", cliente["edad"]);
}

console.log("----------------------------------------");
console.log("Agencia organiza los alquileres");
let alquileres = [
    {
        cliente: "Carlos",
        pagos: [30, 50, 60]
    },
    {
        cliente: "María",
        pagos: [20, 30, 30]
    },
    {
        cliente: "Luis",
        pagos: [90, 80, 70]
    }
];

for (let alquiler of alquileres) {
    let totalPagado = 0;
    console.log("Cliente:", alquiler.cliente);
    for (let pago of alquiler.pagos) {
        console.log("Pago recibido:", pago);
        totalPagado += pago;
    }
    console.log("Total pagado por", alquiler.cliente, ":", totalPagado);
}

console.log("----------------------------------------------------------------------------------");
let tarifasOriginales = [30, 50, 70, 40];
let tarifasDobles = tarifasOriginales.map(elemento => elemento * 2);
console.log("Tarifas dobles:", tarifasDobles);

let tarifasValidas = tarifasOriginales.filter(tarifa => tarifa >= 50);
console.log("Tarifas válidas:", tarifasValidas);

let totalTarifas = tarifasOriginales.reduce((acumulador, elemento) => {
    return acumulador + elemento;
});
console.log("Total de tarifas:", totalTarifas);
