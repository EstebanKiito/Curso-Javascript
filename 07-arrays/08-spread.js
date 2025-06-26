// Operador mas sencillo para copiar un array
// arr_copia = [...arr1];

let arr1 = [1, 2];
let arr2 = [5, 6];

let arr3 = [...arr1];
let arr4 = [...arr1, 3, 4, ...arr2]; // Concatenando arrays

console.log(arr3); // [1, 2]
console.log(arr4); // [1, 2, 3, 4, 5, 6]

let arr5 = [...arr1];
arr5.push(3); // Copia el array y añade un elemento
console.log(arr5); // [1, 2, 3]
console.log(arr1); // [1, 2] -> arr1 no se modifica (Era una copia)
//