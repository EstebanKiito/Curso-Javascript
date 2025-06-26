// Funcion que divide un arra y por el tipo de dato
// Numeros, strings , objetos
// Devolveremos un objeto con esas 3 propiedades
// cada propiedad, tiene un arreglo con cada valor pertenciente a esa propiedad

const miArray = [
    "hola",
    12,
    "Mundo",
    {},
    {id:15},
    ['lala'], // Object
]

function dividePorTipo(arr) {
    return arr.reduce((acc, el) => { // Reducir el array a un objeto
        const tipo = typeof el;
        // Si la clave ya existe, añadimos el elemento, si no la creamos con un nuevo array
        if (!acc[tipo]) {
            acc[tipo] = [];
        }
        acc[tipo].push(el);
        return acc;
    }, {});
}


const nuevoArray = dividePorTipo(miArray)
console.log(nuevoArray);


// OTRA FROMA (Facil)
/**
 * return {
 *  numeros: arr.filter( elem => typeof elem === "number" )
 *  strings: arr.filter( elem => typeof elem === "string" )
 *  objetos: arr.filter( elem => typeof elem === "object" )
 * }
 */