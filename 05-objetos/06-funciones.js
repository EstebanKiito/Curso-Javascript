// Funciones: Tambien se les considera como OBJETOS! -> 
// DE PRIMERA CLASE: Una funcion constructora, se pueden pasar a otras funciones como argumentos o retornadas

function Usuario(nombre) {
    this.nombre = nombre;
}

console.log(Usuario.name); // Nombre de la funcion
console.log(Usuario.length); // Cantidad de Argumentos



// Las FUNCIONES pueden: ASIGNARSE a variables, Pasarse como ARGUMENTOS, y RETORNARSE !!!

// --- 1. Podemos Asignarselas a una variable ---

const U = Usuario;
let user = new U('Esteban');

console.log(user);

// --- 2. Podemos pasarlas como Argumentos ---

function of(Funcion, arg) { // Esta funcion recibe una funcion Constructora, y un argumento
    return new Funcion(arg)
}

let user1 = of(Usuario, 'Esteeeeeban'); // Le pasamos la funcion constructora Usuario como ARGUMENTOS!!
console.log(user1);

// --- 3. Podemos retornarlas ---

function returned(){
    return function() { // La creamos anonima
        console.log('Hola Mundo');
    }
}
let saludo = returned();
saludo();

// --- Conclusion: Funciones son Objetos de PRIMERA CLASE ---