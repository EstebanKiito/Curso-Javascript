function Entidad(entidad){
    this.id = Math.random().toString(20);
    this.entidad = entidad;
}

function User(name){
    Entidad.call(this);
}

const u = new User('Hola Mundo');
console.log(u);