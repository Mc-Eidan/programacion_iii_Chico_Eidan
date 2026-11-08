let sucursal = "Quito";
switch (sucursal) {
    case "Quito":
        console.log("Estás en la sucursal de Quito.");
        break;
    case "Guayaquil":
        console.log("Estás en la sucursal de Guayaquil.");
        break;
    default:
        console.log("Sucursal desconocida.");
}

let tipoCliente = "Basico";
switch (tipoCliente) {
    case "Basico":
    case "Estandar":
        console.log("Cliente con tarifa estándar.");
        break;
    case "Premium":
        console.log("Cliente premium, tienes un auto de cortesía y seguro incluido.");
        break;
    default:
        console.log("Tipo de cliente desconocido.");
}

let dias = 5;
switch (true) {
    case (dias > 0 && dias <= 3):
        console.log("Alquiler de corta duración.");
        break;
    case (dias > 3 && dias <= 7):
        console.log("Alquiler de una semana.");
        break;
    case (dias > 7 && dias <= 30):
        console.log("Alquiler de larga duración.");
        break;
    default:
        console.log("Cantidad de días no válida.");
}

console.log("Cotizador de Alquiler de Autos con Switch");
let monto = 40;
let valor = 5;
let operacion = "dias";
let resultado;
switch (operacion) {
    case "seguro":
        resultado = monto + valor;
        console.log("Costo del alquiler con seguro:", resultado);
        break;
    case "descuento":
        resultado = monto - valor;
        console.log("Costo del alquiler con descuento:", resultado);
        break;
    case "dias":
        resultado = monto * valor;
        console.log("Costo total del alquiler por días:", resultado);
        break;
    case "cuotas":
        if (valor !== 0) {
            resultado = monto / valor;
            console.log("Valor de cada cuota:", resultado);
        } else {
            console.log("Error: no se puede dividir entre cero cuotas.");
        }
        break;
    default:
        console.log("Operación no válida.");
}
if (resultado !== undefined) {
    console.log("Resultado de la operación", operacion, ":", resultado);
}