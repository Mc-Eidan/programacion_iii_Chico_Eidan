const marca = document.getElementById("marca");
const modelo = document.getElementById("modelo");
const estado = document.getElementById("estado");

marca.textContent = "Marca: Toyota";
modelo.textContent = "Modelo: Corolla";
estado.textContent = "Estado: disponible";

const vehiculo = document.querySelector(".vehiculo");
vehiculo.textContent = "Toyota Corolla";

const h2Objeto = document.querySelector("h2");
h2Objeto.textContent = "Preparando inventario";

const inventario = document.querySelector("#inventario");
inventario.textContent = "Inventario actualizado";

const promocion = document.querySelector("#promocion .estado");
promocion.textContent = "Promocion activa";

const modelos = document.querySelectorAll(".modelos");
console.log(modelos);
console.log(modelos.length);

console.log("Recorrer con for:");
for (let i = 0; i < modelos.length; i++) {
    console.log(modelos[i].textContent);
}

console.log("Recorrer con forEach:");
modelos.forEach(function (modelo) {
    console.log(modelo.textContent);
});

console.log("Recorrer con for of:");
for (let modelo of modelos) {
    console.log(modelo.textContent);
}
