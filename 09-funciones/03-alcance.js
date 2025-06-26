let a = 1
function alcance() {
    console.log(a) // Accede a la variable global 'a'
    a = 2 // Modifica la variable global 'a';
    function saludar() {}
    var vieja = "No usar var";
    const nueva = "Usar const";
    let otra = "Usar let";
}
console.log(saludar);
console.log(vieja);
console.log(nueva);
console.log(otra);

console.log(a); // Imprime 1, porque 'a' es una variable global
alcance();
console.log(a); // Imprime 2, porque 'a' fue modificada dentro de la función alcance


// Variables creadas dentro de una funcion, no se pueden acceder desde fuera de la funcion.
// El hoisting iria solo al inicio de la funcion, no al inicio del archivo.
// Dentro de una funcion, si se puede acceder a variables globales, pero no al reves.