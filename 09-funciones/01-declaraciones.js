// Declaracion de funciones

console.log(declaracion); // Ok
console.log(expresion); // Error -> no se puede acceder antes de inicializar : Hoisting!!!

function declaracion(a, b) {
    return a + b
}

let expresion = function() {
    console.log('Hola Mundo');
} // Asignamos una funcion anonima

let namedExpresion = function hola() {
    console.log("hola");
}

const arrowfunction = () => {
    console.log("Arrow function (siempre es anonima)");
}

