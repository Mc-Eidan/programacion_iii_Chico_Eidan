let personajes = [ { id: 1, nombre: "Rick Sanchez", dimension: "c-137", estado: "Vivo" }, { id: 2, nombre: "Rick Sanchez", dimension: "c-137", estado: "Desconocido" }, { id: 3, nombre: "Rick Sanchez", dimension: "c-137", estado: "Muerto" }, { id: 4, nombre: "Rick Sanchez", dimension: "c-137", estado: "Vivo" } ];

const formulario = document.getElementById("formulario"); const nombre = document.getElementById("nombre"); const dimension = document.getElementById("dimension"); const estado = document.getElementById("estado"); const guardar = document.getElementById("guardar"); const cancelar = document.getElementById("cancelar");

const cantidad = document.getElementById("cantidad"); const contenedor = document.getElementById("contenedor");

let idEditar = null;

function mostrarPersonajes() {

contenedor.innerHTML = "";

personajes.forEach(function (personaje) {

    const tarjeta = document.createElement("div");
    tarjeta.classList.add("tarjeta");

    const titulo = document.createElement("h3");
    titulo.textContent = personaje.nombre;

    const parrafoDimension = document.createElement("p");
    parrafoDimension.textContent = "Dimension = " + personaje.dimension;

    const parrafoEstado = document.createElement("p");
    parrafoEstado.textContent = "Estado = " + personaje.estado;

    const botonModificar = document.createElement("button");
    botonModificar.textContent = "Modificar";

    botonModificar.addEventListener("click", function () {
        modificarPersonaje(personaje.id);
    });

    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";

    botonEliminar.addEventListener("click", function () {
        eliminarPersonaje(personaje.id);
    });

    tarjeta.append(
        titulo,
        parrafoDimension,
        parrafoEstado,
        botonModificar,
        botonEliminar
    );

    contenedor.appendChild(tarjeta);

});

cantidad.textContent = personajes.length;


}

formulario.addEventListener("submit", function (evento) {

evento.preventDefault();

if (idEditar === null) {

    const nuevoPersonaje = {
        id: Math.max(0, ...personajes.map(p => p.id)) + 1,
        nombre: nombre.value,
        dimension: dimension.value,
        estado: estado.value
    };

    personajes.push(nuevoPersonaje);

} else {

    personajes = personajes.map(function (personaje) {

        if (personaje.id === idEditar) {

            return {
                id: personaje.id,
                nombre: nombre.value,
                dimension: dimension.value,
                estado: estado.value
            };

        }

        return personaje;

    });

    idEditar = null;
    guardar.textContent = "Agregar";

}

mostrarPersonajes();
formulario.reset();


});

function modificarPersonaje(id) {

const personajeEncontrado = personajes.find(function (personaje) {
    return personaje.id === id;
});

nombre.value = personajeEncontrado.nombre;
dimension.value = personajeEncontrado.dimension;
estado.value = personajeEncontrado.estado;

idEditar = id;

guardar.textContent = "Actualizar";


}

function eliminarPersonaje(id) {

personajes = personajes.filter(function (personaje) {
    return personaje.id !== id;
});

mostrarPersonajes();


}

cancelar.addEventListener("click", function () {

formulario.reset();

idEditar = null;

guardar.textContent = "Agregar";


});

mostrarPersonajes();