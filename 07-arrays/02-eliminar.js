const letras = ['a','b','c','d','e','f','g'];

// Eliminar final -> Se puede asignar a una var
let final = letras.pop(); 

// Eliminar inicio -> Se puede asignar a una var
let cominezo = letras.shift(); 

console.log(letras);


// Eliminar de entremedio

let numeros = [0,1,2,3,4];

numeros.splice(1, 2) // Eliminar de el 1 en adelante = (1,2) -> 2 elem
console.log(numeros); // [0,3,4]


