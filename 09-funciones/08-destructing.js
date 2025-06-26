// El Param Destructuring es una forma de extraer valores de un objeto o array y asignarlos a variables individuales.
// Esto es muy util cuando se trabaja con objetos que tienen muchas propiedades y solo necesitas algunas de ellas.
//// En lugar de acceder a las propiedades del objeto una por una, puedes extraerlas directamente en
// la declaración de la función.

function webserver(config){
    const url = config.url;
    return url;
}

console.log(webserver({url: 'https://api.ejemplo.com'})); // https://api.ejemplo.com

// Destructuring
function webserver(config){
    const {url} = config;
    return url;
}

// Otra forma
function webserver({url}){
    return url;
}
// Destructing con varios parámetros
const config = {
    url: 'https://api.ejemplo.com',
    direccion: {
        calle: 'Calle Falsa 123',
        ciudad: 'Ciudad Ejemplo',
    },
};
function webserver({url, direccion: {calle}}){
    console.log(calle);
}
// ESTO ES ENGORROSO!!! -> {url, direccion: {calle: {avenida, numero}}} .... {{{{{}}}}}

//----- ARRAY DESTRUCTURING ----
const configu = [
    'hhtp://api.ejemplo.com',
    145,
    80
];
//function webserver([url, bucket, port]){
function webserver([url, ...rest]){
    console.log(rest); // [ 145, 80 ]
    return url
}
console.log(webserver(configu)); // hhtp://api.ejemplo.com

// Conclusion
// El destructuring es una forma de extraer valores de un objeto o array y asignarlos a variables individuales.
// Puedes extraerlas tanto en la declaración de la función como dentro de la función.