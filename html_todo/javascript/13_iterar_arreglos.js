import { totalmem } from "node:os";

let cristales = [30,50,70,40];
let posicion = 2;
let nuevaEnergia = 100;

for (let i = 0; i<cristales.length; i++){
    console.log("Posiscion",i);
    console.log("Cristal :",cristales[i]);
    if( posicion >= 0 && posicion<cristales.length){
        cristales[posicion] = nuevaEnergia;
    }
    else{
        console.log("Posicion no valida");
    }
}
console.log(cristales);

let personajes = [
    {id:1,nombre:"Rick",energia : 99,edad : 70},
    {id:2,nombre:"Morty",energia : 80,edad : 14},
    {id:3,nombre:"Eidan",energia:100,edad : 19}
];
for(let personaje of personajes){
    console.log("ID :" ,personaje.id);
    console.log("Nombre :" ,personaje.nombre);
    console.log("Energia :", personaje["energia"]);
    console.log("Edad :" ,personaje["edad"]);
}

console.log("Rick organiza sus misiones");
let misiones = [
    { 
    piloto:"Rick",
    cristales:[40,50,60]
    },
    { 
    piloto:"Morty",
    cristales:[60,30,20]
    },
    { 
    piloto:"Summer",
    cristales:[90,80,70]
    }
];

for(let mision of misiones){
    let totalCristales = 0;
    console.log("Piloto :",mision.piloto);
    for(let cristal of mision.cristales){
        console.log("Cristales  Recolectados ",cristal);
        totalCristales+=cristal;
    }
    console.log("Total Cristales Recolectados por ",mision.piloto ,"son :",totalCristales)
}

let cristalesOriginales = [30,50,70,40];
let cristalesDobles = cristalesOriginales.map(elemento =>{
    return elemento*2
});
console.log(cristalesDobles);

let validos = cristalesOriginales.filter(cristal=>cristal>=50);
let resultado = cristalesOriginales.reduce((acumulador,elemento)=>{
    return acumulador+elemento;
});