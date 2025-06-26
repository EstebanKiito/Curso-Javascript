let arr = [1, 2];
let arr2 = arr; 
arr2 = [];
console.log(arr); // [1, 2]
console.log(arr2); // []

// Vaciando un array
arr = [1, 2, 3, 4, 5];
arr.length = 0;
console.log(arr); // []

// Otra forma de vaciar un array
arr = [1, 2, 3, 4, 5];
arr.splice(0, arr.length); // Elimina todos los elementos: desde 0 hasta el final
console.log(arr); // []

// Otra forma de vaciar un array
arr = [1, 2, 3, 4, 5];
arr = [];
console.log(arr); // []

// No recomendada: LOOPS!

