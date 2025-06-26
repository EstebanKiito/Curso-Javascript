// Metodo reduce
// reduce() ejecuta una función reductora sobre cada elemento de un arreglo, devolviendo como resultado un único valor.
// reduce() recibe dos parámetros:
// 1. Función reductora (callback)
// 2. Valor inicial (opcional)


const numeros = [1, 2, 3, 4, 5];

// La función reductora recibe cuatro parámetros:
// 1. Acumulador (valor acumulado)
// 2. Elemento actual (valor actual)
// 3. Índice del elemento actual (opcional)
// 4. Arreglo original (opcional)
// La función reductora debe retornar el nuevo valor del acumulador
// La funcion se ejecuta por cada elemento del arreglo
// En este caso, la función reductora suma los elementos del arreglo
const suma = numeros.reduce((acumulador, elemento) => {
    return acumulador + elemento;
}, 0); // 0 es el valor inicial del acumulador y 1 el primer elemento del arreglo

// acc + el = suma
// 0 + 1 = 1
// 1 + 2 = 3
// 3 + 3 = 6
// 6 + 4 = 10
// 10 + 5 = 15
console.log(suma); // 15


// >>> Ejemplo de uso para aplanar un ARRAY DE ARRAYS

const arreglo = [[1, 2], 3, 4, [5, 6]];
// El resultado es un arreglo plano
const aplanado = arreglo
    .reduce((acumulador, elemento) => acumulador.concat(elemento), []); // [] es el valor inicial del acumulador

console.log(aplanado); // [1, 2, 3, 4, 5, 6]


// >>> Ejemplo para indexar un ARRAY de objetos
// Esto es util cuando necesitas buscar un objeto por una propiedad dentro de un arreglo gigante

const usuarios = [
    { nombre: 'Esteban', edad: 25 },
    { nombre: 'Daniel', edad: 30 },
    { nombre: 'Gaby', edad: 17 },
    { nombre: 'Levi', edad: 22 }
]

const indexado = usuarios.reduce((acumulador, elemento) => ({
    ...acumulador, // Copiar todas las propiedades del objeto original
    [elemento.nombre]: elemento // Agregar una nueva propiedad con el nombre del usuario como clave y el objeto del usuario como valor
}), {}); // {} es el valor inicial del acumulador

console.log(indexado);

// { 
//   Esteban: { nombre: 'Esteban', edad: 25 },
//   Daniel: { nombre: 'Daniel', edad: 30 },
//   Gaby: { nombre: 'Gaby', edad: 17 },
//   Levi: { nombre: 'Levi', edad: 22 } 
// }