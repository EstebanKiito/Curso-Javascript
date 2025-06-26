// Agregar elementos dentro de Arrays

const letra = ['c', 'd'];

letra.push('z') // AÑADE AL FINAL
letra.unshift('a', 'b')

letra.splice(3,0,'XD') // despues del 3er elemento, añade XD y quita 0 siguientes
                       // si fuese 3,1 -> Quitaria el siguiente elemento a la derecha

console.log(letra);

// SLICE -> Puede eliminar elementos y agregar


