let promesa1 = new Promise((res, rej) => {
    res(1);
});

let promesa2 = new Promise((res, rej) => {
    res(2);
});

promesa1
    .then(valor => {
        if (valor > 10) return promesa2; // No va a pasar
        // ¿Como rechazamos?
        return Promise.reject('Valor menor a 10') // Rompemos la cadena
        //return Promise.resolve(200) // Podemos tambien retornar una promesa resuelta
    })
    .then(valor2 => {
        console.log('Segunda promesa', valor2); 
        return valor2;
    })
    .catch(e => console.log('Error en la cadena:', e))
    .finally(() => console.log('Cadena terminada')); 

