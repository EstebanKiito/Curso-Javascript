function User(){
    this.name = 'Hola Mundo';
}

function Product(){
    this.name = 'Producto';
}

function Entidad() {};
Entidad.prototype.login = function() {
    console.log('Iniciando sesión:', this.name);
}
Entidad.prototype.validate = function() {  
    console.log('Validando:', this.name);
}

// Crear cadena de prototipos, conservando el constructor original (--- MANERA ANTIGUA ---)
// User.prototype = Object.create(Entidad.prototype);
// User.prototype.constructor = User;

// Crear cadena de prototipos, conservando el constructor original (--- MANERA MODERNA ---)
Object.setPrototypeOf(User.prototype, Entidad.prototype);

const user = new User();
console.log(user);





