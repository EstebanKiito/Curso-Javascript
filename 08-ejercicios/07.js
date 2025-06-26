/**
 * Ejercicio practico, trabajar con base de datos distintas
 * Una en ingles, otra en español
 */

const usuarios = [
    { edad: 22, nombre: "Levi", plan: "Premium"},
    { edad: 25, nombre: "Esteban", plan: "Free"},
    { edad: 17, nombre: "Gabi", plan: "Gold"},
    { edad: 30, nombre: "Daniel", plan: "Free"},
]

const users = [
    { age: 60, name: "Robert", membership: "Premium"},
    { age: 45, name: "John", membership: "Free"},
    { age: 35, name: "Alice", membership: "Gold"},
    { age: 50, name: "Emma", membership: "Free"},
]

// Paso 1: Unificar las estructuras de usuarios y users
// Fusionar los dos arreglos en uno solo
// Ordenar por edad de mayor a menor
// Crear plantilla Html:
// <li>Nombre: name, Edad: age</li>

const usuariosEs = users.map( el => {
    return {
        edad: el.age,
        nombre: el.name,
        plan: el.membership
    }
})

// Fusionar
const fusionados = [...usuarios, ...usuariosEs]

// Ordenar
fusionados.sort( (a, b) => {
    if (a.edad < b.edad){
        return 1
    }
    if (a.edad > b.edad){
        return -1
    }
    return 0;
});

const lista = fusionados.map( u => 
    `<li>Nombre: ${u.nombre}, Edad: ${u.edad}</li>`);

const html = `
<ul>
    ${lista.join(`
    `)}
</ul>
`
// Con el enter, se va a ver mas lindo dentro de la consola!!!

console.log(html);
