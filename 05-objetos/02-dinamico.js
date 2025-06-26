// JS: Los objetos son dinamicos -> Podemos añadir y quitar propiedades a voluntad

const user = {id: 1}; // Constante, no se puede reasignar

user.name = 'Esteban'
user.guardar = function () {
    console.log('Guardando', user.name);
}

user.guardar();

// Conclusion -> Si pudimos modificar el usuario como una constante

// Razon: Const no nos permite cambiar el valor de la variable ej: user = 1
// Pero si podemos cambiar, eliminar 

delete user.name;
delete user.guardar;
console.log(user)

// ---- FREEZE : Metodo para volver INMODIFICABLE un Objeto ----

const user1 = Object.freeze({ id: 1});
user1.name = 'Esteban'; // No se agregara la propiedad
user1.id = 2; // No cambiara una propiedad
console.log(user1);

// ---- SEAL : Metodo para poder SOLO MODIFICAR Propiedades -> NO AÑADIR! ---
const user2 = Object.seal({ id: 1});
user2.name = 'Esteban'; // No se agregara la propiedad
user2.id = 2; // SI cambiara la propiedad
console.log(user2);