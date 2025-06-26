// Metodo map()
// map() crea nuevo arreglo con los resultados de la llamada a la función aplicada a cada elemento del arreglo.

// Ejercicio inspirado en HTML

const usuarios = [
    { nombre: 'Esteban', edad: 25 },
    { nombre: 'Daniel', edad: 30 },
    { nombre: 'Gaby', edad: 17 }
]

// El valor que retorne map, va a ser el asignado a la variable
const lista_nombres = usuarios.map( u => u.nombre ); // Crear nuevo arreglo con los nombres de los usuarios
console.log(lista_nombres); // ['Esteban', 'Daniel', 'Gaby']

const lista_html = usuarios.map( u => `<li>${u.nombre}</li>` ); // Crear nuevo arreglo con nombres en formato Lista HTML
const html = `<ol>${lista_html.join('')}</ol>`; // Crear un string con la lista HTML
console.log(html); 
// <ol><li>Esteban</li><li>Daniel</li><li>Gaby</li></ol>



// Agregar Nueva propiedad a cada objeto del arreglo
const mapped = usuarios.map( u => {
    return {
        ...u, // Spread: Copiar todas las propiedades
        mayor: u.edad >= 18 // Agregar una nueva propiedad mayor, que indica si el usuario es mayor de edad
    }
}
); // Crear nuevo arreglo con los usuarios y la nueva propiedad

// NOTA: Podemos hacer => { return { ...u, mayor} } o => ({ ... u}) ---- Los parentesis son un implicito return


console.log(mapped);
// [
//   { nombre: 'Esteban', edad: 25, mayor: true },
//   { nombre: 'Daniel', edad: 30, mayor: true },
//   { nombre: 'Gaby', edad: 17, mayor: false }
// ]


// MAP Y FILTER: Devuelven un nuevo arreglo
// -> ((( ENCADENAR ))) métodos (Aplicar map y filter al mismo tiempo)

let lista_html2 = usuarios
    .filter( u => u.edad >= 18 ) // Filtrar usuarios mayores de edad
    .map( u => `<li>${u.nombre}</li>` ); // Crear nuevo arreglo con nombres en formato Lista HTML

html2 = `<ol>${lista_html2.join('')}</ol>`; // Crear un string con la lista HTML
console.log(html2); 