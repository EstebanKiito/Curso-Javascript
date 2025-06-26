// Factory Functions -> Crear objetos de manera NO REPETITIVA

let user = {
    email: 'esteban@uc.cl',
    name: 'Esteban',
    activo: true,
    recuperarClave: function () {
        console.log('recuperando clave... ');
    },
};

// Para crear otro usuario, que comparta la mismas propiedades, sería horrible copiar todo 

function createUser(name, email){
    return {
        email, // Es lo mismo que email: email -> Repetir nombre de atributo y parametro se puede dejar como email,
        name,
        activo: true,
        recuperarClave: function () {
            console.log('recuperando clave... ');
        }
    };
};

let user1 = createUser('Gabita', 'gaby@gmail.com');
let user2 = createUser('Tan', 'tan@gmail.com');

console.log(user1)
console.log(user2)
