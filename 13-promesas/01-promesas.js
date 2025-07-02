// Promesas: Representan estado de una peticion
// Pending: Pendiente
// Fulfilled: Cumplida
// Rejected: Algo ocurrio y la promesa fue rechazada

// Consulta a bdd
// Peticiones a servidor
// Webworkers: hilos de ejecucion en segundo plano

let promesa = new Promise( (resolve, reject) => {
    // resolve(42); // Cumplida
    //setTimeout( () => resolve(42), 10000); // Cumplida despues de 10 segundos
    setTimeout( () => reject('Error de carga'), 1000); // Cumplida despues de 10 segundos
});

// Las promesas se usan para calcular algo en el futuro
// queremos escribir logica para saber si los datos recibidos son correctos
// Si si, cumplimos la promesa
// Si no, rechazamos la promesa


// Capturar promesa

// THEN: Recibe 2 funciones
// 1. La que se ejecuta cuando la promesa se cumple
// 2. La que se ejecuta cuando la promesa es rechazada
promesa.then( 
    valor => console.log('Cumplida:', valor),
    e => console.log('error!!!: ', e) 
);
    