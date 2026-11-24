const vehiculo = document.getElementById("vehiculo");
const cambiar = document.getElementById("cambiar");
const verModelo = document.getElementById("verModelo");
const modelo = document.getElementById("modelo");

cambiar.addEventListener("click", function () {
    if (vehiculo.getAttribute("title") === "Toyota") {
        vehiculo.setAttribute("src", "imagenes/Morty.jpg");
        vehiculo.setAttribute("title", "Honda");
        vehiculo.dataset.modelo = "Honda Civic";
    } else {
        vehiculo.setAttribute("src", "imagenes/Rick.jpg");
        vehiculo.setAttribute("title", "Toyota");
        vehiculo.dataset.modelo = "Toyota Corolla";
    }
});

verModelo.addEventListener("click", function () {
    modelo.textContent = "Modelo: " + vehiculo.dataset.modelo;
});

const taller = document.getElementById("taller");
const activarTaller = document.getElementById("activarTaller");

activarTaller.addEventListener("click", function () {
    if (taller.textContent === "Taller cerrado") {
        taller.style.backgroundColor = "green";
        taller.style.color = "white";
        taller.textContent = "Taller abierto";
        activarTaller.textContent = "Cerrar taller";
    } else {
        taller.style.backgroundColor = "red";
        taller.style.color = "white";
        taller.textContent = "Taller cerrado";
        activarTaller.textContent = "Activar taller";
    }
});
