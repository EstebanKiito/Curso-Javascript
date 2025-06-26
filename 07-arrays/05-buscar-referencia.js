// Buscar Referencias dentro de arrays

const users = [
    { id:1, nombre: "Esteban"},
    { id:1, nombre: "Daniel"},
    { id:2, nombre: "Gabriel"},
];

// const resultado = users.indexOf({ id:1, nombre: "Esteban"});
// ESTO ESTA MALO !!!! -> Si le pasamos un objeto nuevo -> No es el mismo (Las referencias son a objetos diferentes)

// FIND: Recibe una funcion -> Retorna el primer elemento que cumpla con lo pedido en la funcion
const resultado = users.find(function(usuario) { 
    return usuario.id === 1 && usuario.nombre === "Daniel";
});

// Si no encuentra nada -> Devuelve undefined

console.log(resultado);
// resultado: { id: 1, nombre: 'Daniel' }

// --- IMPORTANTE: Estas funciones que devuelven true/false (y se pasan como argumento) : Se les llaman PREDICATE --

// --- >>>>>>>> CON ARROW FUNCTIONS => >>>>>>>>> ---

const resultado2 = users.find( usuario => usuario.id === 2);
console.log(resultado2);

// Buscar el INDICE:
const resultadoIdx = users.findIndex( usuario => 
    usuario.id === 2);
console.log(resultadoIdx);
