// Ordenar un array
// El método sort() ordena los elementos de un arreglo en su lugar y devuelve el arreglo.

let arr = [5, 3, -8, 1, 4];

// Ordenar de menor a mayor
arr.sort();

console.log(arr); // [-8, 1, 3, 4, 5]

// Ordenar de mayor a menor
arr.sort((a, b) => b - a);
//arr.reverse(); // Otra forma de invertir el array

console.log(arr); // [5, 4, 3, 1, -8]


// >>> 1. PROBLEMA DE LAS MAYUSCULAS

// El método sort() es sensible a mayúsculas y minúsculas. (Valores ASCII)
let conMayusculas = ['a', 'B', 'c', 'A', 'b', 'C'];

conMayusculas.sort( (a, b) => {
    /**
     * a antes que b => -1
     * b antes que a => 1
     * a y b iguales => 0
     */
    let alower = a.toLowerCase();
    let blower = b.toLowerCase();
    if (alower < blower) return -1;
    if (alower > blower) return 1;
    return 0;
} );

console.log(conMayusculas); // ['A', 'a', 'B', 'b', 'C', 'c']


// >>> 2. ORDENANDO OBJETOS
// El método sort() se puede usar para ordenar objetos en un arreglo.
let usuarios = [
    { nombre: 'Esteban', edad: 25 },
    { nombre: 'Daniel', edad: 30 },
    { nombre: 'Gaby', edad: 20 }
];

usuarios.sort( (a, b) => {
    if (a.edad < b.edad) return -1;
    if (a.edad > b.edad) return 1;
    return 0;
})

console.log(usuarios);