console.log(document);

const titulo = document.getElementById("titulo");
console.log(titulo);
titulo.textContent = "Concesionaria Eidan";

const estado = document.getElementById("estado");
const botonVenta = document.getElementById("botonVenta");

botonVenta.addEventListener("click", function () {
    console.log("Ejecutando venta...");
    estado.textContent = "VEHICULO VENDIDO";
    alert("Venta registrada correctamente");
});

const botonListo = document.getElementById("listo");
botonListo.addEventListener("click", function () {
    estado.textContent = "ENTREGA LISTA";
    alert("El vehiculo esta listo para entregar");
});

let ventas = 0;
const contador = document.getElementById("contador");
const nuevaVenta = document.getElementById("nuevaVenta");

nuevaVenta.addEventListener("click", function () {
    ventas += 1;
    contador.textContent = ventas;
});
