const url = "https://jsonplaceholder.typicode.com/todos"

// PETICIONES HTTP

fetch(url, {
    method: 'POST', // PUT, PATCH, DELETE, GET
    body: JSON.stringify({ title: 'Hola Mundo' }), // Solo para POST, PUT, PATCH
    headers: { // Headers opcionales, para indicar el tipo de contenido al servidor
        'Content-Type': 'application/json', // Indica que el cuerpo de la petición es
        Autorization: 'api key',
    },
    // Si no necesitasemos cache
    cache: 'no-cache', // No usar cache, siempre hacer la petición al servidor
    // default - reload - no-store - force-cache - only-if-cached
})
    .then(response => {
        //console.log(response);
        //return response.text(); // Convertimos la respuesta a texto

        if (response.ok){
            return response.json(); // Convertimos la respuesta a JSON
        }
        return Promise.reject('Error en la petición: ' + response.status);
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('Error:', {error});
    });