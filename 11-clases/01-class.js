// function User(name){
//     this.name = name;
//     this.instancia = function(){} // Metodo de la instancia
// }
// 
// User.prototype.login = function(){
//     console.log('Inicio sesion'); // Metodo del prototipo y no de la instancia
// }


// Pasando esto a Class: (ECMAS6)

class User {
    constructor(name) {
        this.name = name;
        this.instancia = function(){} // Metodo de la instancia
    }

    login() {
        console.log('Inicio sesion'); // Metodo del prototipo y no de la instancia
    }

    logout = () => {
        console.log('Cierre sesion'); // Metodo de instancia !!! JS no logra ver si es un metodo o una propiedad!!
    }
}

let user = new User('Esteban'); // Nos crea un Objeto a partir de la funcion Constructor User

// La unica diferencia es que el constructor del prototipo es una class, en vez de una funcion Constructora
// Las Clases no se izan, por lo que debemos declararlas antes de usarlas (a diferencia de f constructoras)

