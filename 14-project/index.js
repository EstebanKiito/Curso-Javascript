let serialize = target => 
    Array.from(target.elements).reduce((acc,el) => {
        if (!el.name) return acc; // Si no tiene nombre, no lo añadimos
        acc[el.name] = el.value
        return acc;
    }, {});

class User {
    static #url = "https://jsonplaceholder.typicode.com/users";
    // Privado: Porque no queremos que se pueda modificar desde fuera de la clase
    // Static: Para no acceder desde una instancia, sino desde la clase
    static #users = [];
    static #ul = document.createElement('ul'); // Creamos el ul una vez, no cada vez que renderizamos
    static #form = document.createElement('form');

    static #initialValues = {
        name: '',
        email: ''
    };

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
        users.forEach( user => {
            this.#ul.appendChild(this.renderUser(user))
        } )
        //console.log(this.#ul); // Imprimimos el ul en la consola
        //console.log(this.#users);
        
        
        return this.#ul; // Retornamos el ul con los usuarios
    }

    static onSubmit(e){
        e.preventDefault(); // Evitamos el comportamiento por defecto del formulario
        let data = serialize(e.target); // los datos del formulario
        console.log(data); // Imprimimos los datos del formulario

        let user = new User(data); // Creamos una nueva instancia de User
        const errors = user.validate(); // Validamos los datos del usuario
        if (Object.keys(errors).length > 0) {
            this.#form.innerHTML = this.formHtml({data, errors})
            return;
        }
        user.save(); // Guardamos el usuario
    }

    save() {
        return User.save(this); // Llamamos al método estático save de la clase User, y le pasamos la instancia actual de user (this)
    }

    static async save(user){
        try{
            const response = await fetch(this.#url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(user) // Convertimos el objeto user a JSON
            })

            // Guardar en el static users y en el DOM
            const data = await response.json(); // Obtenemos la respuesta del servidor
            this.#users.unshift(data); // Añadimos el nuevo usuario al principio del array de usuarios
            this.#ul.prepend(this.renderUser(data)); // Añadimos el nuevo usuario al principio del ul


        } catch(e) {
            console.error('Error al guardar el usuario:', e);
        }
    }
    
    validate(){
        let errors = {};
        if (!this.name) {
            errors.name = 'Nombre es obligatorio';
        }
        if (!this.email) {
            errors.email = 'Email es obligatorio';
        }
        return errors; // Retornamos los errores encontrados
    }

    constructor(data) {
        this.name = data.name
        this.email = data.email;
    }

    static formHtml({ data, errors }) {
        return `
        <form>
            <div>
                <label>Nombre:</label>
                <input name="name" value="${data.name}">
                ${errors.name || ''}
            </div>
            <div>
                <label>Correo:</label>
                <input name="email" value="${data.email}">
                ${errors.email || ''}
            </div>
            <input type="submit" value="Enviar">
        </form>
        `;
    }

    static renderForm(){
        // On submit, initialValues, error, innerHtml
        this.#form.onsubmit = this.onSubmit.bind(this); // Bind para que this se refiera a la clase User y no al formulario
        this.#form.innerHTML = this.formHtml({
            data: this.#initialValues,
            errors: {}
        });
        return this.#form; // Retornamos el formulario
    }

}

async function main() {
    const users = await User.getAll();
    let template = User.render();
    //console.log(template);
    const form = User.renderForm();
    document.body.insertAdjacentElement('afterbegin', template); // Insertamos el ul al principio del body
    document.body.insertAdjacentElement('afterbegin', form); // Insertamos el ul al principio del body

}

main();