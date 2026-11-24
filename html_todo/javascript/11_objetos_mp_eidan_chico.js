let nombreCliente = "Carlos";
let edadCliente = 30;
let ciudad = "Quito";
let combustible = 100;
let alquilado = false;

let auto = {
    nombreCliente: "Carlos",
    edadCliente: 30,
    ciudad: "Quito",
    combustible: 100,
    alquilado: false
};

console.log("Información del auto:");
console.log("Nombre del cliente: " + auto.nombreCliente);
console.log("Edad del cliente: " + auto["edadCliente"]);
console.log("Ciudad: " + auto["ciudad"]);
console.log("Nivel de combustible: " + auto["combustible"]);
console.log("Estado del alquiler: " + auto["alquilado"]);
console.log("Auto:", auto);

console.log("Agregar una nueva propiedad al auto:");
auto.modelo = "Kia Rio";
console.log("Modelo del auto: " + auto.modelo);
auto["capacidadPasajeros"] = 5;
console.log("Capacidad de pasajeros: " + auto["capacidadPasajeros"]);
console.log("Auto:", auto);

console.log("Actualizar el estado del alquiler:");
auto.combustible = 80;
console.log("Nuevo nivel de combustible: " + auto.combustible + "%");
auto["alquilado"] = true;
console.log("Nuevo estado: " + (auto.alquilado ? "alquilado" : "disponible"));

console.log("Eliminar una propiedad del auto:");
delete auto.capacidadPasajeros;
console.log("Propiedad 'capacidadPasajeros' eliminada");
console.log("Auto:", auto);

console.log("Recorrer las propiedades del auto:");
for (let propiedad in auto) {
    console.log(propiedad + ": " + auto[propiedad]);
}

let accesorios = {
    gps: 3,
    sillasParaBebe: 4,
    portaequipajes: 2
};

console.log("Cálculo de unidades de accesorios:");
for (let totalUnidades in accesorios) {
    console.log(totalUnidades + ": " + accesorios[totalUnidades]);
}

let total = accesorios.gps + accesorios.sillasParaBebe + accesorios.portaequipajes;
console.log("Total de unidades de accesorios: " + total);
