//function User(name) {
//    this.name = name;
//    this.login = function() {
//        console.log('Iniciando sesion');
//    }
//}

const user1 = new User('Juan');
const user2 = new User('Ana');

console.log(user1.login === user2.login); // false, porque cada instancia tiene su propio método login

// ¿Que pasa si tenemos que crear muchas instancias? -> se crean muchas copias del mismo método
// Para evitar esto, podemos usar prototipos

console.log(User.prototype); // { constructor: ƒ, login: ƒ }

// Agregamos el método login al prototipo de User
// ---- METODO DE PROTOTIPO ----
User.prototype.login = function() {
    console.log('Iniciando sesion:', this.name);
}

console.log(user1.login === user2.login); // true, porque ahora ambos comparten el mismo método login en el prototipo
// Ahora, si creamos una nueva instancia, también tendrá acceso al método login

user1.login(); // Iniciando sesion: Juan // this.name apunta a la instancia y no al prototipo

// Yo puedo ademas, agregar este metodo a la declaracion de la clase User
function User(name) {
    this.name = name;
    // --- METODO DE INSTANCIA ---
    this.logger = function() {
        this.login();
    }
}

// INTERCEPTAR CADENA DE PROTOTIPOS 
User.prototype.toString = function() {
    console.log('Iniciando sesion:', this.name);
} // toString es un metodo de Object, pero lo interceptamos para que haga algo diferente

user1.toString(); // Iniciando sesion: Juan 