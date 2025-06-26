// Buscar primitivos

const letras = ['a', 'b', 1, 'c', 1];

console.log(letras.indexOf('c'));
console.log(letras.indexOf(1));
console.log(letras.lastIndexOf(1)); // Busca al reves

if (letras.includes(1)){
    console.log('Si tengo el 1 !');
}

// Segundo argumento -> Desde donde empezar la busqueda indexof(1, 2) -> 4