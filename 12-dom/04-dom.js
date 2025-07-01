let el = document.getElementById('cuerpo'); // Obtiene el elemento con id 'cuerpo'
el.innerText = 'Soy un elemento'; 

// APPEND: Recibe Texto y Nodos

document.body.append(el); // Añade el elemento al final del body

// Para eliminar
el.remove(); // Elimina el elemento del DOM

document.body.prepend(el); // Añade el elemento al principio del body

// Referencias son unicas, no se puede añadir el mismo elemento dos veces

// Reemplazar un elemento
let div = document.createElement('div'); // Crea un nuevo elemento <div>
div.innerText = 'Soy un div'; // Añade texto al div
el.replaceWith(div); // Reemplaza el elemento 'el' con el nuevo div

// Forma alternativa: Nodo Padre
document.body.replaceChild(el, div); // Reemplaza 'div' con 'el' en el body

document.body.removeChild(el); // Elimina 'el' del body
document.body.appendChild(el); // Añade 'el' al final del body
// appendChild solo recibe nodos, no texto

// Añadiendo en posicion
document.body.insertBefore(div, el); 
document.body.insertAdjacentElement('beforebegin', div); // Añade 'div' antes de abrir body
document.body.insertAdjacentElement('afterbegin', div); // Añade 'div' al inicio de body
document.body.insertAdjacentElement('beforeend', div); // Añade 'div' al final
document.body.insertAdjacentElement('afterend', div); // Añade 'div' después de body







