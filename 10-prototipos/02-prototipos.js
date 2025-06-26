/**
 * Cuando trabajamos con Clases, los metodos y propiedades se COPIAN (a la instancia)
 * Cuando trabajamos con Prototipos, los metodos y propiedades se VINCULAN (a un prototipo mas arriba)
 */

let x = {}
let y = { a: 1, b: 2 }
console.log(x.__proto__ === Object.prototype) // true
Object.getPrototypeOf(x) === Object.prototype // true
// 
console.log(x.__proto__ === y.__proto__) // true
// 
// Todos los prototipos de objetos que hayan sido creados con la misma función constructora, apuntan al mismo prototipo
// En este caso, ambos objetos apuntan al prototipo de Object

/**
 * Si yo llamo a un método que no existe en el objeto, JavaScript buscará ese método en el prototipo del objeto
 * y si no lo encuentra, seguirá buscando en el prototipo del prototipo, y así
 */

let array = [1, 2, 3] // El metodo no lo tiene el array, pero si lo tiene el prototipo
// CADENA DE PROTOTIPOS: Prototype chain: a -> b -> c -> d
// [] -> Array -> Object -> null