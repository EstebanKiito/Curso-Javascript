// Ejercicio 1: paraAbsoluto
// Lista de numeros, y tenemos que devolver un nuevo arreglo con los numeros absolutos

function paraAbsoluto(arr) {
    return arr.map( elem => Math.abs(elem) )
}

const ns = [-1, 2, -30, 8, -5];

const absolutos = paraAbsoluto(ns);
console.log(absolutos);

