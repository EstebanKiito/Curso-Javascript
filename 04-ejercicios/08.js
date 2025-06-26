// Ejercicio inverso
// Crear algoritmo que devuelva un Array de Objetos en base a pares
let pairs = [
    [1,{ name: "Esteban"}],
    [2,{ name: "Roro"}],
    [3,{ name: "Tan"}],
]

function toCollection(arr){

    let collection = [];
    for (idx in arr){
        let elemento = arr[idx]; // elemento: [1, {name:''}]
        collection[idx] = elemento[1]; // Agregamos los objetos {name: ''}
        collection[idx].id = elemento[0]; // al objeto agregado, le añadimos una propiedad id, con su respectivo numero
    }
    return collection;
}


let result = toCollection(pairs);
console.log(result);

// Result:
// [
//     { id: 1, name: 'Esteban' },
//     { id: 2, name: 'Roro' },
//     { id: 3, name: 'Tan' }
// ]
//
