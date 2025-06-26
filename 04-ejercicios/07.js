// Algoritmo que tome array de objetos y devuelva array de pares

let array = [{
    id: 1,
    name: 'Esteban',
}, {
    id: 2,
    name: 'Felipe',
}, {
    id: 3,
    name: 'Chanchito',
}];

function arrayToPares(arr){
    let result = [];

    // --- Vamos a necesitar el indice para poder agregar el id al PAR -> [1, {id:1, ...}] Por eso usamos for in
    // --- Si usamos for of, no tenemos el indice, si no el elemento
    
    for (idx in arr) {
        let elemento = arr[idx]; // elemento: {id:1, name: 'Esteban'}
        result[idx] = [elemento.id, elemento];
    }
    return result;
}

let result = arrayToPares(array);
console.log(result)

/**
 * RESULT:
    * [1, {id:1, ...}]
    * [2, {id:2, ...}]
    * [3, {...}] 
 */