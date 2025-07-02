// COMO PASAR ARGUMENTOS A UNA PROMESA
// transformar a una fat arrow function

let promesa = user => new Promise((resolve, reject) => {
    resolve(1);
});

let promesa2 = user => new Promise((resolve, reject) => {
    resolve(user + ' es un usuario');
});

// Ahora le podemos inyectar datos que pueda necesitar

promesa('Esteban')
    .then(user => promesa2(user)) // Retornamos otra promesa (return de promesa2)
    .then(dato => console.log(dato)) 
