// Funcion constructora para crear usuarios

function Usuario(name) {
    this.id = Math.random()
    this.name = name;
}

let user = new Usuario('Esteban');
let user2 = new Usuario('Gabriel');
console.log(user, user2);

