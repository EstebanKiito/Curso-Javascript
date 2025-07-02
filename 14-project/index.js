class User {
    static #url = "https://jsonplaceholder.typicode.com/users";
    // Privado: Porque no queremos que se pueda modificar desde fuera de la clase
    // Static: Para no acceder desde una instancia, sino desde la clase
    static #users = [];
    static #ul = document.createElement('ul'); // Creamos el ul una vez, no cada vez que renderizamos

    static async getAll() {
        try {
            const response = await fetch(this.#url);
            if (!response.ok) throw response; // Yo ya se que es un error, 
            // lanzo al catch el elemento response Completo para analizarlo
            this.#users = await response.json();
            return this.#users;
        } catch(e) {
            console.error('Error al obtener los usuarios:', e);
        }
    }

    static renderUser(user) {
        let li = document.createElement('li');
        li.innerText = user.name; // Asignamos el nombre del usuario al li
        return li; // Retornamos el li creado
    }

    static render(){
        // this.#ul = document.createElement('ul'); // ESTO NO QUIERO HACERLO CADA VEZ QUE RENDERICE
        let users = this.#users; // Referencia de users
        users.forEach( user => this.#ul.appendChild(this.renderUser(user)) )

        return this.#ul; // Retornamos el ul con los usuarios
    }

}

async function main() {
    const users = await User.getAll();
    let template = User.render();
    console.log(template);
}

main();