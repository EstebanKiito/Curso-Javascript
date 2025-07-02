const p1 = Promise.reject(1);
const p2 = 42; // Podemos meter un primitivo a una cadena, y se convierte en una promesa resuelta
const p3 = new Promise((res, rej) => {
    setTimeout(res, 1000, 'foo');
    // Esta forma: foo es inyectado como valor de la promesa
})

// ---- Metodo estatico Promise.all: ----
// Funciona esperando a que se resuelvan todas las promesas
// En paralelo, no en cadena
// Si una falla, se rechaza toda la cadena (va al catch)
// Solo al terminar, ejecuta el THEN

//Promise.all([p1, p2, p3])
//    .then(valores => {
//        console.log('all', valores);
//    })
//    .catch(e => console.log('Error en all:', e));
    // En caso de error, e = el error de la primera promesa que fallo

// ---- Metodo estatico Promise.race ----
// Espera al primer resultado que se resuelva/rechace
// Catch solo se activa si el primero falla

Promise.race([p1, p2, p3])
    .then(valor => console.log('race', valor))
    .catch(e => console.log('Error en race:', e));

// ---- Promise.any ---
// Igual a race, pero espera a cualquiera que resuelva

// ---- Promise.allSettled ----

Promise.allSettled([p1, p2, p3])
    .then(valores => console.log({ valores }))
    .catch(e => console.log({ e }));

// Devuelve un array de objetos con el estado de cada promesa
// No caemos en el catch, porque no hay error
// Cada objeto tiene un status y un value o reason (pasar el motivo de rechazo)
// status: 'fulfilled' o 'rejected'
