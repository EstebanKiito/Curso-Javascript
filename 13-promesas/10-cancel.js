/**
 * Recordar
 * 1. Async se usa para declarar una funcion asincrona
 * 2. Await se usa para esperar el resultado de una promesa
 * 3. Las funciones async siempre retornan una promesa
 * 4. Si una funcion async retorna un valor, ese valor se convierte en una promesa
 * 5. Await espera a que una promesa se resuelva o rechace
 * 6. Solo podemos usar await dentro de una funcion async
 */


// Para cancelar una peticion, podemos usar signal
const controller = new AbortController();
const { signal } = controller; // Object destructuring
// const signal = controller.signal; // Otra forma de obtener el signal

async function getTodos(){
    const url = 'https://jsonplaceholder.typicode.com/todos';
    try {
        let response = await fetch(url, { signal });
        const data = await response.json();
        console.log(data);
        
    }
    catch (error) {
        console.log('error:', error);
    }
}



getTodos();
controller.abort(); // Cancelamos la peticion