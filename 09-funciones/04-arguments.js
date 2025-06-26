function argumentos(){
    console.log(arguments); // Imprime un objeto 'arguments' que contiene todos los argumentos pasados a la función 
    // (no es un array, es un iterable)
    console.log(arguments[0]);
    console.log(arguments.length);

    // Como iterar argumentos
    // Array.from(arguments) Nos devuelve un array a partir de un iterable
    Array.from(arguments)
        .reduce((acc, el) => acc + el) // Sumar todos los argumentos 
}

argumentos(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);