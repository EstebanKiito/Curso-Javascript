class Entidad {
    constructor(id){
        this.id = id;
        this.created_at = new Date();
    }

    save(){
        console.log(`Guardando desde Entidad`);
    }
}

class User extends Entidad {
    constructor(name){
        super(1); // Llamamos al constructor de la clase padre Entidad (Necesario hacerlo para inicializar el id y created_at)
        this.name = name;
    }
    save(){
        super.save(); // Llamamos al método save de la clase padre
        console.log(`Guardando desde User`);
    }
}

const user = new User('John Doe');
console.log(user); // User { id: 1, created_at: 2023-12-01T00:00:00.000Z, name: 'John Doe' }

user.save(); 
// Guardando desde Entidad
// Guardando desde User
