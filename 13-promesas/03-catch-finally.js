// Que pasa si entremedio de la cadena, hay un error?
// USAR CATCH: Solo se ejecuta si hay error en la cadena

let promesa1 = new Promise((res, rej) => {
    rej(1);
});

let promesa2 = new Promise((res, rej) => {
    res(2);
});

promesa1
    .then(valor => {
        if (valor === 1) return promesa2; // Retornamos otra promesa
    })
    .then(valor2 => {
        console.log('Segunda promesa', valor2); // NO se ejecuta porque hubo un error
        return valor2;
    })
    .catch(e => console.log('Error en la cadena:', e))
    .finally(() => console.log('Cadena terminada')); // Se ejecuta siempre, sin importar si hubo error o no

// Si hay error, se salta todo hasta el catch
// Finally se ejecuta siempre, sin importar si hubo error o no
// Finally nunca recibe argumento
