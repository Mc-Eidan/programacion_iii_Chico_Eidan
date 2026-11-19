console.log("abriendo portal de la nave...");
let portal = 1;
while (portal <= 5) {
    console.log("Portal abierto en la dimension " + portal + ".");
    portal++;
}
console.log("todos los portales han sido abiertos.");

console.log("cuenta regresiva despegue de la nave morty");
let i = 10;
while (i >= 0) {
    console.log("faltan " + i + " segundos para el despegue de la nave");
    i--;
}


console.log("Recargar la pistola de portales de Rick");
let energia = 0;
let recarga = 10;
let totalRecargas = 0;
while (energia < 100) {
    energia += recarga;
    totalRecargas++;
    console.log("Recargando... Nivel de energia: " + energia + "%");
}
console.log("Pistola de portales totalmente recargada despues de " + totalRecargas + " recargas.");

console.log("consumo combustible nave de Rick");
let combustible = 100;
let consumo = 45;
let viaje = 0;
while (combustible > 0) {
    combustible -= consumo;
    viaje++;
    console.log("Viaje " + viaje + ": Nivel de combustible: " + combustible + "%");
    if (combustible <= 50) {
        console.log("Advertencia: combustible bajo. nivel actual: " + combustible + "%");
    }
}
console.log("No hay suficiente combustible para otro viaje");
console.log("total de viajes realizados: " + viaje);


console.log("Activar portales de dimensiones peligrosas con Do......-While");
let energia_portal =50;
do {
    console.log("Activando portal de dimension peligrosa. Nivel de energia: " + energia_portal + "%");
    energia_portal -= 15;
} while (energia_portal > 0);
console.log("No hay suficiente energia para activar otro portal.");

console.log("comprar una pistola de portales para rick");
let ahorro =80;
let meta = 500;
let ahorroSemanal = 70;
let semanas = 0;
do {
    ahorro += ahorroSemanal;
    semanas++;
    console.log("Semana " + semanas + ": Ahorro actual: " + ahorro + " unidades");
} while (ahorro < meta);
console.log("meta alcanzada en " + semanas + " semanas. Ahora Rick puede comprar la pistola de portales.");


let cristales = [5,10,15,20,25];
let objetivo = 150;
let energiatotal = 0;
let indice = 0;
while (i < cristales.length) {
    let cristal = cristales[indice];
    energiatotal += cristal;
    indice++;
    if (cristal < 20) {console.log("cristal" +cristal);
        continue; /*continuar con el siguiente ciclo si el cristal es menor a 20*/
    }
    energiatotal += cristal;
    console.log("Cristal recolectado: " + cristal + ". Energía total: " + energiatotal);
    if (energiatotal >= objetivo) {
        console.log("Objetivo de energía alcanzado. Energía total: " + energiatotal);
        break; /*romper el bucle si se alcanza el objetivo de energía*/
    }
}
console.log("Energía total recolectada: " + energiatotal);




