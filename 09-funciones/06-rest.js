function suma(a, b, ...rest){
    console.log(rest); // Imprime un array con los argumentos restantes
}
suma(1, 2, 3, 4, 5);
// [3, 4, 5] - Imprime un array con los argumentos restantes después de 'a' y 'b'
// siempre tiene que ser el ultimo argumento de la función

// Ejemplo real:

const logMsg = (desc, ...msgs) => {
    for (let msg of msgs){
        console.log(desc, msg);
    }
}
// logMsg('Servidor', 'Error 1', 'Error 2', 'Error 3'); --> Para strings

let mensajes = ['Error 1', 'Error 2', 'Error 3'];
logMsg('Cliente movil:', ...mensajes, 'Otro error (se puede usar despues del spread operator)');
// Cliente movil: Error 1
// Cliente movil: Error 2
// Cliente movil: Error 3
// Cliente movil: Otro error (se puede usar despues del spread operator)