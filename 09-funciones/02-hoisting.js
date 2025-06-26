/**
 * Hoisting en JavaScript
 * El hoisting es un comportamiento de JavaScript donde las declaraciones de variables y funciones son elevadas (hoisted) 
 * al inicio de su contexto de ejecución.
 * Esto significa que puedes usar variables y funciones antes de haberlas declarado en el código.
 * Sin embargo, las variables declaradas con `var` se inicializan con `undefined`,
 * mientras que las variables declaradas con `let` y `const` no se pueden usar antes de su declaración debido al "temporal dead zone".
 * Las funciones declaradas con `function` se pueden llamar antes de su declaración, pero las funciones asignadas a variables (funciones expression) no se pueden llamar antes de su declaración.
 */

console.log(saludo);
console.log(vieja);
console.log(nueva);
console.log(otra);


function saludo() {}
var vieja = "Ya no debes usar este tipo de declaraciones"
const nueva = "Esta si"
let otra = "Esta tambien"

// Todas las variables tienen hoisting, pero no todas se comportan igual.
// Las funciones declaradas con `function` se pueden llamar antes de su declaración.
// Las variables declaradas con `var` se inicializan con `undefined`.
// Las variables declaradas con `let` y `const` no se pueden usar antes de su declaracion

// CONCLUSION: NO USAR VAR, USAR LET Y CONST
