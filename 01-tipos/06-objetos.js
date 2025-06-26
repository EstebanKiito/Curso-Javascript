// Objetos: tipos de datos de referencia 

let nombre = "Esteban";
let apellido = "Ortega";
let edad = 22;

let persona = {
    nombre: "Esteban",
    apellido: "Ortega",
    edad: 22,
};

console.log(persona);

console.log(persona.nombre);

console.log(persona["apellido"]);

// MODIFICAR UN OBJETO

persona.nombre = "Gabriel";


// ALGORITMO DE MODIFICACION DE PROPIEDADES

let llave = "edad";
persona[llave] = 23;
console.log(persona[llave]);

// Puedo iterar sobre array de llaves -> modificar llaves, y por lo tanto modificar las propiedades dentro de algun ciclo

// ELIMINAR UNA PROPIEDAD

delete persona.edad;

console.log(persona);