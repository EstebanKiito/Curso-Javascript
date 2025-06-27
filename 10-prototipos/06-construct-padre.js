function Entidad(entidad){
    this.id = Math.random().toString(20);
    this.entidad = entidad;
}

function User(name){
    Entidad.call(this); // Llamamos al constructor de Entidad para inicializar id y entidad
    this.attribute = {
        name: name,
        createdAt: new Date()
    }
}

const u = new User('Hola Mundo');
console.log(u);