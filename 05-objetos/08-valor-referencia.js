// Valores literales se guardan directos en memoria
// Valores dinamicos como un objeto se guarda una referencia de el (Una direccion a donde se encuentra realmente)
// EN C: Se guarda el puntero adonde apunta a la direccion de donde se almacena realmente

// Si queremos comparar dos objetos, pero que tienen distintos punteros a distintas memorias
// obj1 === obj2 ? -> FALSE: Estamos comparando las direcciones
// Hay que ALMACENAR LA MISMA REFERENCIA AL MISMO OBJETO

let a = 1;
let b = a;
b++;
console.log(a, b); 

// QUE OCURRE: 1 y 2 -> Estamos moficando espacios distintos de memoria A y B no estan en el mismo espacio de memoria

let c = {};
let d = c;
c.porp = 1;

console.log(c, d);

// {prop: 1} y {prop: 1} -> Estamos modificando el mismo espacio de memoria (REAL del objeto)

// Si compararmos c === d -> TRUE: Porque esta comparando la misma direccion en memoria RAM

// Conclusion: Los objetos al Asignarse como Variable, se crea una direccion (el objeto se guarda en otro lugar)

let x = 1;
function suma(n){
    n++;
}
suma(a);
console.log(a);

// PORQUE AQUI NO SE SUMO 1 ??? -> Javascript crea variables para los parametros 
// x y n, son considerados como variables distintas


let z = {prop:1};
function suma(n){
    n.prop++;
}
suma(z);
console.log(z);

// AQUI SI SUMO 1 -> Le pasamos el objeto POR REFERENCIA!

/**
 * RESUMEN DE ESTO:
    * PRIMITIVOS: Se Copian !!!
    * Referencia : Se REferencian! 
        * Objetos
        * Arrays
        * Funciones
*/