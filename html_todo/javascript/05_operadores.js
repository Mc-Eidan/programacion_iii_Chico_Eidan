let a = 10;
let b = 3;
let x = true;
let y = false;
let nombre = null;

console.log("Suma (+):", a + b);                             
console.log("Resta (-):", a - b);                              
console.log("Multiplicación (*):", a * b);                     
console.log("División (/):", a / b);                           
console.log("Módulo o resto (%):", a % b);                    
console.log("Exponenciación (**):", a ** b);                   

console.log("Estrictamente igual (===):", a === "10");        
console.log("Igualdad débil (==):", a == "10");                
console.log("Estrictamente diferente (!==):", a !== b);      
console.log("Diferencia débil (!=):", a != "10");             
console.log("Mayor que (>):", a > b);                          
console.log("Menor que (<):", a < b);                     
console.log("Mayor o igual que (>=):", a >= 10);               
console.log("Menor o igual que (<=):", b <= 2);                

console.log("AND lógico (&&):", x && y);                       
console.log("OR lógico (||):", x || y);                        
console.log("NOT lógico (!):", !x);                            
console.log("Nullish Coalescing (??):", nombre ?? "Invitado"); 

let c = 5; 
console.log("Asignación suma (+=):", c += 2);                  
console.log("Asignación resta (-=):", c -= 1);                
console.log("Asignación multiplicación (*=):", c *= 2);        
console.log("Asignación división (/=):", c /= 3);            
console.log("Asignación módulo (%=):", c %= 3);                
console.log("Asignación exponenciación (**=):", c **= 3);      


let n = 5;
n++;
console.log("Incremento (++):", n);                            
n--;
console.log("Decremento (--):", n);                            
let edad = 20;
console.log("Ternario (? :):", edad >= 18 ? "Es mayor" : "Es menor"); 


console.log("=== TABLA DE MULTIPLICAR ===");
console.log(`1 x 5 = ${5 * 1}`);
console.log(`2 x 5 = ${5 * 2}`);
console.log(`3 x 5 = ${5 * 3}`);
console.log(`4 x 5 = ${5 * 4}`);
console.log(`5 x 5 = ${5 * 5}`);
console.log(`6 x 5 = ${5 * 6}`);
console.log(`7 x 5 = ${5 * 7}`);
console.log(`8 x 5 = ${5 * 8}`);
console.log(`9 x 5 = ${5 * 9}`);
console.log(`10 x 5 = ${5 * 10}`);

console.log("=== TABLA DE DIVISIONES ===");
console.log(`5 / 1 = ${5 / 1}`);
console.log(`5 / 2 = ${5 / 2}`);
console.log(`5 / 3 = ${5 / 3}`);
console.log(`5 / 4 = ${5 / 4}`);
console.log(`5 / 5 = ${5 / 5}`);
console.log(`5 / 6 = ${5 / 6}`);
console.log(`5 / 7 = ${5 / 7}`);
console.log(`5 / 8 = ${5 / 8}`);
console.log(`5 / 9 = ${5 / 9}`);
console.log(`5 / 10 = ${5 / 10}`);
