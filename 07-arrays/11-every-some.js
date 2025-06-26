let usuarios = [
    {id : 1, activo: true},
    {id : 2, activo: false},
    {id : 3, activo: false},
]

let todosActivos = usuarios.every( (usuario) => {
    console.log(usuario.id);
    return usuario.activo;
})

console.log(todosActivos); // false

// EVERY: Devuelve true si todos los elementos cumplen la condición (Finaliza el bucle al encontrar el primer false)
// SOME: Devuelve true si al menos un elemento cumple la condición (Finaliza el bucle al encontrar el primer true)

let algunActivo = usuarios.some( (usuario) => {
    console.log(usuario.id);
    return usuario.activo;
}
)
console.log(algunActivo); // true
