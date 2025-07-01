// Eventos gatillados por usuarios 

let form = document.createElement('form');
form.id = 'mi-formulario';

let input = document.createElement('input');
input.setAttribute('type', 'text');

let btn = document.createElement('button');
btn.innerText = 'Enviar';

form.append(input);
form.append(btn);

document.body.append(form);


// --- EVENTOS ---
// 1. On Mouse enter 
form.onmouseenter = evento => {
    console.log('Mouse entro al formulario', evento);
}

// 2. On Mouse Leave, 
form.onmouseleave = e => {
    console.log('Mouse salio del formulario');
}

// 3. On Focus: Cuando pinchamos sobre el input
input.onfocus = e => {
    console.log('Input enfocado');
}

// 4. On Blur: Se usa cuando sacamos el foco del input
// Primero se ejecuta un focus, y luego un blur
input.onblur = e => {
    console.log('Input desenfocado');
}
// Con esta podemos gatillar un evento que guarde info al servidor
// Asi vemos que hay froms que no tienen submit

// 5. On Change: Se usa cuando cambiamos el valor del input
input.onchange = e => {
    console.log('Input cambiado a:', e.target.value);
    // e.target nos devuelve el elemento html
};


// --- BOTON CLICKEADO ---
// btn.onclick = e => {
//     e.preventDefault(); // Evita el comportamiento por defecto del formulario
//     console.log('Boton Clickeado!!!');
//     // Default: Enviar el formulario (recargar la pagina)
// }

// Algunas apps ejecutan con AddEventListener

btn.addEventListener('click', e => {
    e.preventDefault(); // Evita el comportamiento por defecto del formulario
    console.log('Boton Clickeado con addEventListener!!!');
});

// addEventListener recibe el nombre del evento, y una funcion que se ejecuta cuando el evento ocurre
// el nombre del evento es el mismo que el de la propiedad del objeto, pero sin el prefijo "on"