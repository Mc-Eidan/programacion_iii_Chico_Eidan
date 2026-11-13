let modelos = ["Toyota Yaris", "Kia Rio", "Chevrolet Spark", "Hyundai Tucson", "Nissan Kicks"];
console.log("Elemento 0:", modelos[0]);
console.log("Elemento 2:", modelos[2]);
console.log("Elemento 4:", modelos[4]);
console.log("Tamaño del arreglo:", modelos.length);

console.log("Modelos:", modelos);
console.log("INCLUIR ELEMENTOS A UN ARREGLO CON PUSH");
modelos.push("Mazda CX-5");
console.log("Modelos:", modelos);
modelos.push("Hyundai Accent");
console.log("Modelos:", modelos);

console.log("MODIFICAR ELEMENTOS DEL ARREGLO");
modelos[6] = "Nissan Versa";
console.log("Modelos:", modelos);

console.log("PONER AL INICIO DEL ARREGLO CON UNSHIFT");
modelos.unshift("Chevrolet Tracker");
modelos[0] = "Chevrolet Onix";
console.log("Modelos:", modelos);

console.log("ELIMINAR ELEMENTOS DE UN ARREGLO");
modelos.pop();
console.log("Modelos:", modelos);

modelos.shift();
console.log("Modelos:", modelos);

modelos.splice(1, 1);
console.log("Modelos:", modelos);
