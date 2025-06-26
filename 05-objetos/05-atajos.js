let objeto = {}; // Esto es un atajo para construir objetos

// obj.constructor -> function Object() {[native code]}: funcion constructora
//  Todos los objetos que son creados en JS, contienen propiedad llamada CONSTRUCTOR
// Esta propiedad nos indica con QUE CONSTRUCTOR fue creado un objeto

let objeto2 = new Object();

// obj2.constructor -> El mismo Constructor!

// Conculsion: Podemos crear objetos de la siguiente manera

let obj = {};
let obj1 = new Object(); // Object() -> NO es el unico constructor en Javascript

/** 
 * new Array()
 * new String()
 * new Number()
 * new Boolean()
 */

// Ahora, que constructor tendra un objeto que hayamos creado con una funcion constructora?

function Usuario(){ // Usuario es una funcion Constructora
    this.name = "Chanchito Feliz";
}
let user = new Usuario();
console.log(user.constructor);

// Detalle importante -> Este console log nos muestra toda la funcion
// Esto no sera igual con Constructores de Strings Arrays dado que estan con codigo nativo

/**
 * typeof '': 'string'
 * typeof new String(): 'object'
 * typeof new Number(): 'object'
 * typeof new Boolean(): 'object'
 */

// --------- DETALLE IMPORTANTE: JS ENVUELVE Literales! -------------
/** 

* "". -> Nos daremos cuenta que el string tiene metodos!
 * Esto pasa porque en JS, cuando nostors accedemos a los metodos de (numbers, booleans. strings)
 * --- JS envuelve el literal dentro de un objeto, y en la siguiente linea de ejecucion lo saca! ---
 * ->  Por eso podemos usar metodos de numeros, strings 
 * a = 4;
 * a.toString()
 * '4'
 */

// --> Los strings, numeros y boolena literales, 
// se comportan distinto a los creados con Constructores Array Numbers Boolean!!!
// Esto da errores mas comunes de lo que parecen

const s1 = "1 + 1";
const s2 = new String("1 + 1");

// ¿Son lo mismo?

console.log(eval(s1), eval(s2));
// 2 y String("1+1")

// Conclusion: USAR SIEMPRE LOS LITERALES
// -> Si tuvieses que llegar a usar los constructores de Strings por ejemplo -> Devuelvelos

console.log(s2.valueOf())


