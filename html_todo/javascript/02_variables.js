import { stringify } from "node:querystring";

console.log('Hello desde consola');
console.log('Declaracion de variables');

// camelCase

/*
    Estos comentarios son de varias lineas 1
    Estos comentarios son de varias lineas 2
    Estos comentarios son de varias lineas 3
    Estos comentarios son de varias lineas 4
*/ 

let acompanante = 'Morty';
let energia = 100 ;
let dimension = 'C-137';
let tieneCombustible = true;

console.log(acompanante);
console.log(energia);
console.log(dimension);
console.log(tieneCombustible);

acompanante = 'Rick';
energia = 1500;
dimension = 'C-140';
tieneCombustible = false;

console.log(acompanante);
console.log(energia);
console.log(dimension);
console.log(tieneCombustible);

var personaje = 'Jerry';

console.log('Personaje :',personaje);
personaje = 'Rick';
console.log('Nuevo personaje :',personaje);

const protagonista = 'Rick y Morty';
console.log('Protagonistas',protagonista)
