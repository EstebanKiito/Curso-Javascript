// en vez de document.createElement

let initialValues = {
    name: '',
    lastname: ''
}

let render = ({data, errors}) => { // Object Destructuring
    return `
        <form name='formulario'>
            <div>
                <label>Nombre:</label>
                <input name="name" value="${data.name}" />
                ${errors.name || ''}
            </div>
            <div>
                <label>Apellido:</label>
                <input name="lastname" value="${data.lastname}" />
                ${errors.lastname || ''}
            </div>
            <div><button>Enviar</button></div>
        </form>
    `
}

let validate = data => {
    let errors = {};
    if (!data.name){
        errors.name = 'El nombre es obligatorio';
    }
    if (!data.lastname){
        errors.lastname = 'El apellido es obligatorio';
    }

    return errors
}


let form = document.createElement('form');

// Problema: La primera vez en renderizar el form, no hay data
// Solucion: Pasar un objeto vacio por defecto
form.innerHTML = render({ data: initialValues, errors: {} });
document.body.append(form);

form.addEventListener('submit', e => {
    e.preventDefault(); // Evitar recarga de pagina
    // console.log(e.target.elements);
    let data = Array.from(e.target.elements).reduce((acc, el) => {
        if (!el.name) return acc; // Ignorar elementos sin nombre
        acc[el.name] = el.value;
        return acc;
    }, {});
    console.log(data);

    const errors = validate(data);
    console.log(errors);
    
    if (Object.keys(errors).length > 0) {
        let html = render({ errors, data });
        form.innerHTML = html;
        return;
    }

    // Aqui: PROMESAS Y ASINCRONIA
    // Para enviar datos a un servidor.

});