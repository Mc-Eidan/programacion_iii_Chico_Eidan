const mensaje = document.getElementById("mensaje");
const saludo = document.getElementById("saludo");

mensaje.textContent = "Nuevo modelo disponible";
saludo.innerHTML = "<h1>Bienvenido a la concesionaria</h1>";

const ficha = document.getElementById("ficha");
ficha.innerHTML = `
    <h1>TOYOTA COROLLA</h1>
    <p>Modelo: 2026</p>
    <p>Marca: Toyota</p>
    <p>Estado: disponible</p>
`;

const nombre = document.getElementById("nombre");
const saludar = document.getElementById("saludar");
const registrar = document.getElementById("registrar");

registrar.addEventListener("click", function () {
    const nombreCliente = nombre.value.trim();
    if (nombreCliente === "") {
        saludar.textContent = "Ingrese el nombre del cliente";
        return;
    }
    saludar.textContent = "Cliente registrado: " + nombreCliente;
});
