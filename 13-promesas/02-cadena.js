// CHAIN: Cadena de Promesas

let promesa1 = new Promise((res, rej) => {
    res(1);
});

let promesa2 = new Promise((res, rej) => {
    res(2);
});

promesa1.then(valor => { // Este metodo, retorna una nueva promesa
    console.log(valor)
    if (valor === 1) return promesa2; // Retornamos otra promesa
}).then(valor2 => { // Por eso podemos hacerle chaining
    console.log('Segunda promesa', valor2);
    return valor2
})

// Las promesas se resuelven sin ningun valor
// Para asignarle valor hay que retornar, ese sera el param

