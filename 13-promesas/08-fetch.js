// Fetch: Devuelve una promesa que se resuelve con la respuesta de la petición
// Si la petición falla, se rechaza la promesa
// Si la petición es exitosa, se resuelve con un objeto Response

const url = "https://jsonplaceholder.typicode.com/todos/a"

fetch(url)
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

// FETCH: Siempre va a devolver una promesa
// No importa si la petición falla o no (servidor responde)

// Nosotros queremos capturar esos errores de servidores con un catch
// Lo hacemos manualmente con response.ok
// RESPONSE.OK = FALSE si response.status = 200-299