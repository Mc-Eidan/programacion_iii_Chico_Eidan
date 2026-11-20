const cantidad = document.getElementById("cantidad");
const precio = document.getElementById("precio");
const calcular = document.getElementById("calcular");
const resultado = document.getElementById("resultado");

calcular.addEventListener("click", function () {
    if (cantidad.value.trim() === "" || precio.value.trim() === "") {
        resultado.textContent = "Complete ambos campos";
        return;
    }

    const cantidadVehiculos = Number(cantidad.value);
    const precioVehiculo = Number(precio.value);

    if (!Number.isFinite(cantidadVehiculos) ||
        !Number.isFinite(precioVehiculo) ||
        cantidadVehiculos < 0 ||
        precioVehiculo < 0) {
        resultado.textContent = "Ingrese valores validos";
        return;
    }

    const total = cantidadVehiculos * precioVehiculo;
    resultado.textContent = "Precio total: $" + total;
});
