// 2 Funciones, Cunatos premiums y cuantos Mayores

const usuarios = [
    { edad: 22, nombre: "Levi", plan: "Premium"},
    { edad: 25, nombre: "Esteban", plan: "Free"},
    { edad: 17, nombre: "Gabi", plan: "Gold"},
    { edad: 30, nombre: "Daniel", plan: "Free"},
]

function howManyPaidUsers(usrs){
    // return (usrs.filter( el => el.plan !== "Free")).length
    return usrs.reduce( (acc, el) => 
         el.plan !== "Free" ? acc + 1: acc, 0 ); // ? = Si el plan no es Free, sumamos 1 , si no, devolvemos el acumulador
}

function howManyAdults(usrs){
    return (usrs.filter( el => el.edad >= 18)).length
}

console.log(howManyPaidUsers(usuarios));
console.log(howManyAdults(usuarios));

// FORMA CONVENCIONAL => contar ---> REDUCE()