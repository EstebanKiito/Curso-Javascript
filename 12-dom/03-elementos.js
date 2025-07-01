// ---- Añadir Texto -------

let el = document.createElement('p'); // Crea un nuevo elemento <p>

// Inner Text: añade textualmente el texto al elemento
// InnerHTML: añade el texto como HTML al elemento

//el.innerText = "<ul><li>Lista</li></ul>"; 
el.innerHTML = "<ul><li>Lista</li></ul>"; 

document.body.append(el); // Añade el elemento al final del body

// ----- Añadir Estilos -------
el.style = 'color: blue; font-size: 20px;'; // Añade estilos al elemento
el.style.color = 'red'; // Cambia el color del texto a rojo


// ----- Asignar o Cambiar Classe ------
el.className = 'parrafo';
el.id = 'parrafo1'; // Asigna un id al elemento

// ----- Añadir Atributos ------
el.setAttribute('mi-atributo', 'valor'); // Añade un atributo personalizado

// ----- Obtener Atributos ------
el.getAttribute('mi-atributo'); // Obtiene el valor del atributo personalizado
el.hasAttribute('mi-atributo'); // Verifica si el atributo existe
el.removeAttribute('mi-atributo'); // Elimina el atributo personalizado