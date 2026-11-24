let hundai = 5;
let toyota = 10;
let tieneKilometraje = true;
let noEsNuevo = false;
let nombre = null;

console.log("Total de autos (+):", hundai + toyota);
console.log("Resta de autos (-):", toyota - hundai);
console.log("Multiplicación (*):", hundai * toyota);
console.log("División (/):", toyota / hundai);
console.log("Módulo o resto (%):", toyota % hundai);
console.log("Exponenciación (**):", hundai ** 2);

console.log("Estrictamente igual (===):", hundai === "5");
console.log("Igualdad débil (==):", hundai == "5");
console.log("Estrictamente diferente (!==):", hundai !== toyota);
console.log("Diferencia débil (!=):", hundai != "5");
console.log("Mayor que (>):", toyota > hundai);
console.log("Menor que (<):", hundai < toyota);
console.log("Mayor o igual que (>=):", toyota >= 10);
console.log("Menor o igual que (<=):", hundai <= 5);

console.log("AND lógico (&&):", tieneKilometraje && noEsNuevo);
console.log("OR lógico (||):", tieneKilometraje || noEsNuevo);
console.log("NOT lógico (!):", !tieneKilometraje);
console.log("Nullish Coalescing (??):", nombre ?? "Auto sin nombre");

let autos = 5;

console.log("Asignación suma (+=):", autos += 2);
console.log("Asignación resta (-=):", autos -= 1);
console.log("Asignación multiplicación (*=):", autos *= 2);
console.log("Asignación división (/=):", autos /= 3);
console.log("Asignación módulo (%=):", autos %= 3);
console.log("Asignación exponenciación (**=):", autos **= 3);

let cantidadAutos = 5;

cantidadAutos++;
console.log("Incremento (++):", cantidadAutos);

cantidadAutos--;
console.log("Decremento (--):", cantidadAutos);

let edadConductor = 20;

console.log("Ternario (? :):", edadConductor >= 18 ? "Puede conducir" : "No puede conducir");

console.log("=== TABLA DE MULTIPLICACIÓN DE AUTOS ===");

console.log(`1 x 5 = ${5 * 1} autos Hyundai`);
console.log(`2 x 5 = ${5 * 2} autos Hyundai`);
console.log(`3 x 5 = ${5 * 3} autos Hyundai`);
console.log(`4 x 5 = ${5 * 4} autos Hyundai`);
console.log(`5 x 5 = ${5 * 5} autos Hyundai`);
console.log(`6 x 5 = ${5 * 6} autos Hyundai`);
console.log(`7 x 5 = ${5 * 7} autos Hyundai`);
console.log(`8 x 5 = ${5 * 8} autos Hyundai`);
console.log(`9 x 5 = ${5 * 9} autos Hyundai`);
console.log(`10 x 5 = ${5 * 10} autos Hyundai`);

console.log("=== TABLA DE DIVISIONES DE AUTOS ===");

console.log(`5 / 1 = ${5 / 1} autos`);
console.log(`5 / 2 = ${5 / 2} autos`);
console.log(`5 / 3 = ${5 / 3} autos`);
console.log(`5 / 4 = ${5 / 4} autos`);
console.log(`5 / 5 = ${5 / 5} autos`);
console.log(`5 / 6 = ${5 / 6} autos`);
console.log(`5 / 7 = ${5 / 7} autos`);
console.log(`5 / 8 = ${5 / 8} autos`);
console.log(`5 / 9 = ${5 / 9} autos`);
console.log(`5 / 10 = ${5 / 10} autos`);