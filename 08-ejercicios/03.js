// Funcion que retorna solo aquellos que NO SEAN Gratis

const usuarios = [
    { edad: 22, nombre: "Levi", plan: "Premium"},
    { edad: 25, nombre: "Esteban", plan: "Free"},
    { edad: 17, nombre: "Gabi", plan: "Gold"},
    { edad: 30, nombre: "Daniel", plan: "Free"},
]

function getPaidUsers(usrs){
    return usrs.filter( el => el.plan != "Free")
}

console.log(getPaidUsers(usuarios));