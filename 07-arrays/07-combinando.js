let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6,7,8,9,10];

// --- 1. Concatenando arrays ---
arr = arr1.concat(arr2);
console.log(arr); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Muy fea -> Spread mejor !! [...arr1, ...arr2]


// --- 2. Dividiendo un array ---

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let divididos = arr.splice(0, 5);
console.log(divididos); // [1, 2, 3, 4, 5]
console.log(arr); // [6, 7, 8, 9, 10]

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let divididos2 = arr.slice(0, 5);
console.log(divididos2); // [1, 2, 3, 4, 5]
console.log(arr); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Diferencia entre splice y slice
// splice(): (MODIFICA EL ARRAY) original y devuelve los elementos eliminados
// slice() : (CREAR NUEVO ARRAY) no modifica el array original y devuelve una copia de los elementos seleccionados

// Copiando un array
arr = arr1.slice();
// Ojo: Copia los elementos por referencia, si hay un objeto, se copia la referencia y apunta al mismo objeto!
