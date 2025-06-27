function Entidad(){}

Entidad.prototype.save = function(){
    console.log('Guardando entidad...');
}

function User() {}

User.prototype.save = function(){
    console.log('Guardando usuario...');
}

Object.setPrototypeOf(User.prototype, Entidad.prototype); // Establece el prototipo de User como Entidad

let user = new User();
// user.save(); // Guardando usuario...

// Override es cuando una función en un objeto hijo reemplaza a una función del objeto padre.
// En este caso, User está sobreescribiendo el método save de Entidad.

// Como usar el save del padre en el hijo:

console.log(Object.getPrototypeOf(user).save === Entidad.prototype.save); // False: estamos en un nivel intermedio
console.log(Object.getPrototypeOf(Object.getPrototypeOf(user)).save === Entidad.prototype.save); // True

user.save(); // Guardando usuario...
Object.getPrototypeOf(user).save(); // Guardando usuario...
Object.getPrototypeOf(Object.getPrototypeOf(user)).save(); // Guardando entidad...

// Esto se ve feo -> Encapsular en una funcion:
function superSave(obj) {
    return Object.getPrototypeOf(Object.getPrototypeOf(obj));
}
superSave(user).save(); // Guardando entidad...
