// Forma antigua de parametros default

function configurarApi(url){
    url = url || 'https://api.ejemplo.com'; // Si no se pasa un valor, se usa el valor por defecto
    console.log(`Configurando API en ${url}`);
}
// Llamada a la función sin pasar un argumento
configurarApi(); // Configurando API en https://api.ejemplo.com

// Llamada a la función pasando un argumento
configurarApi('https://api.ejemplo.com/v1'); // Configurando API en https://api.ejemplo.com/v1

// Forma moderna de parametros default
function configurarApiModern(url = 'https://api.ejemplo.com') {
    console.log(`Configurando API en ${url}`);
}
// Llamada a la función sin pasar un argumento
configurarApiModern(); // Configurando API en https://api.ejemplo.com
// Llamada a la función pasando un argumento
configurarApiModern('https://api.ejemplo.com/v1'); // Configurando API en https://api.ejemplo.com/v1

// --- OBJECT DESTRUCTURING ---
let config = {
    url: 'https://api.ejemplo.com'
}
function configurarApiDestructuring({ url } = { url: 'por defecto' }) {
    console.log(`Configurando API en ${url}`);
}


function configApi( url, bucket = 145, port){ // Si pongo default uno, todos a la derecha necesatian // un valor por defecto
    return `${url}:${port}/${bucket}`;
}
console.log(configApi('https://api.ejemplo.com', '145', 8080)); // https://api.ejemplo.com:8080/bucket1
console.log(configApi('https://api.ejemplo.com', 8080)); // https://api.ejemplo.com:909/bucket145
// Esto dara undefined porque no se esta pasando el segundo argumento

