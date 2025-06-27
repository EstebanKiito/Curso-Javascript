class User {
    #name;
    constructor(name) {
        this.#name = name;
    }

    #logger() {
        console.log('Logging...');
    }

    // Para acceder a un atributo privado, se debe usar un método público
    getName() {
        this.#logger();
        return this.#name;
    }
}

const user = new User('John Doe');
console.log(user.name); // undefined
// console.log(user.#name); // error

console.log(user.getName()); // John Doe
