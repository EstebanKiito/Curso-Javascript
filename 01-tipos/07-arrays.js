// Arrays: Colecciones de datos ORDENADOS!!!

let animales = ["Perro", "Gato", "Pato"];

console.log(animales);
console.log(animales[0]);
console.log(animales[-1]); // undefined -> Este truco no funciona en JS como en Python

// MODIFICAR UN ARRAY

animales[0] = "Loro";
console.log(animales[0]);

// AÑADIR ELEMENTOS A UN ARRAY: Con cuidado -> Agregar en una posicion que no existe -> undefined intermedios (EMPTY ITEMS)

animales[4] = "Perro";
console.log(animales);
console.log(animales[3]); // undefined

// Arrays son objetos, por lo tanto, se pueden tener/agregar propiedades (METODOS)

console.log(animales.length);
