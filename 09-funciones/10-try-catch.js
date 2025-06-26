function sumaTodo(arr){
    return arr.reduce((acc, el) => acc + el); // Si no le damos un valor inicial, acc sera el primer elemento del array
}

console.log(sumaTodo([1, 2, 3, 4])); // 10

console.log(sumaTodo( { prop: 1 } )); // ERROR: El objeto no tiene el metodo reduce

// Manejo de errores con try-catch
try {
    console.log(sumaTodo( { prop: 1 } )); // ERROR: El objeto no tiene el metodo reduce
}catch (error) {
    console.error('Error al sumar:', error.message); // Error al sumar
}


// Lanzar codigo elegante para manejar errores

function sumaTodo2(arr){
    if (!Array.isArray(arr)) {
        throw new TypeError('El argumento debe ser un array'); // Lanzamos un error si no es un array
    }
    return arr.reduce((acc, el) => {
        if(typeof el !== 'number' || isNaN(el)) { // Verificamos si el elemento es un numero
            throw new TypeError('Todos los elementos del array deben ser numeros'); // Lanzamos un error si no es un numero
        }
        acc + el
    });
}