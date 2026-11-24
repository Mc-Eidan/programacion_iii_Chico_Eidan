let dimension = "C-500";
switch (dimension) {
    case "C-137":
        console.log("Estás en la dimensión C-137.");
        break;
    case "C-500":
        console.log("Estás en la dimensión C-500.");
        break;
    default:
        console.log("Estás en una dimensión desconocida.");
}

let personaje = "Rick";
switch (personaje) {
    case "Rick":
    case "Morty":
        console.log("Hola Morty, ¿cómo estás?");
        break;
    case "Summer":
        console.log("Hola Summer, ¿cómo estás?");
        break;
    default:
        console.log("Personaje desconocido.");
}

let energia = 50;
switch (true) {
    case (energia > 0 && energia <= 25):
        console.log("Tienes poca energía.");
        break;
    case (energia > 25 && energia <= 50):
        console.log("Tienes energía media.");
        break;
    case (energia > 5 && energia <=25):
        console.log("Tienes energia baja ");
}

console.log("Calculadora Básica con Switch");
let numero1 = 10;
let numero2 = 5;
let operacion = "multiplicacion";
let resultado;
switch (operacion) {
    case "suma":
        resultado = numero1 + numero2;
        console.log("Resultado de la suma:", resultado);
        break;
    case "resta":
        resultado = numero1 - numero2;
        console.log("Resultado de la resta:", resultado);
        break;
    case "multiplicacion":
        resultado = numero1 * numero2;
        console.log("Resultado de la multiplicación:", resultado);
        break;
    case "division":
        if (numero2 !== 0) {
            resultado = numero1 / numero2;
            console.log("Resultado de la división:", resultado);
        } else {
            console.log("Error: no se puede dividir entre cero.");
        }
        break;
    default:
        operacion = 0
        console.log("Operación no válida.");
}
 if(resultado !== undefined){
    console.log("Resultado de la operacion",operacion,":" )
 }