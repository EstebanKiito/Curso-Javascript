// Iterar sobre las propiedades de un objeto, incluyendo las de su Prototipo
function User(){
    this.name = 'Hola Mundo';
}

User.prototype.login = function() {
    console.log('Iniciando sesión:', this.name);
}

let user = new User();

// Iterar sobre las propiedades del objeto user
for (let prop in user) {
    console.log(prop);
}
// name
// login
// Iterar sobre las propiedades propias del objeto (no de su prototipo (funcion constructora))
console.log(Object.keys(user)); // ['name']
