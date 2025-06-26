// Poniendo en practica todo:

/**
 * Obtener los usuarios pago
 * Ordenar de mayor a menor
 * Devolver nombre del usuario
 * Crear plantilla Html
 * Imprimirla en consola
 */

const usuarios = [
    { edad: 22, nombre: "Levi", plan: "Premium"},
    { edad: 25, nombre: "Esteban", plan: "Free"},
    { edad: 17, nombre: "Gabi", plan: "Gold"},
    { edad: 30, nombre: "Daniel", plan: "Free"},
]

function getPaidUsers(usrs) {
    return usrs
        .filter(el => el.plan !== "Free")
        .sort((a, b) => b.edad - a.edad) // Ordenar de mayor a menor por edad
        .map(el => el.nombre); // Devolver solo el nombre de los usuarios
}

function createHtmlList(users) {
    const listItems = users.map(user => `<li>${user}</li>`);
    const html = 
    `<ul>
        ${listItems.join('')}
    </ul>`;
    return html
}

const paidUsers = getPaidUsers(usuarios);
const htmlList = createHtmlList(paidUsers);
console.log(htmlList);
// <ul>
//     <li>Daniel</li>
//     <li>Levi</li>
//     <li>Gabi</li>
// </ul>