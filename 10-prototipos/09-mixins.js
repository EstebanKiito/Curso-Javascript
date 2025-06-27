// Cuando tenemos que crear mas de un prototipo, podemos usar mixins.
// Un mixin es un objeto que contiene propiedades y métodos que pueden ser compartidos entre diferentes clases o prototipos.
// En lugar de heredar de un único prototipo, podemos mezclar múltiples mixins en una clase o prototipo.
// Esto nos permite reutilizar código y evitar la duplicación de código.
//


let vuela = {
    vuela() {
        console.log('Vuela');
    }
}
let nada = {
    nada() {
        console.log('Nada');
    }
}
let camina = {
    camina() {
        console.log('Camina');
    }
}
let bano = {
    bano() {
        console.log('Va al baño');
    }
}

// Vuela, nada, camina y va al baño
function Pato(){}

// camina y va al baño
function Perro(){}

// Nada y va al baño
function Pez(){}

// Vuela
function Avion(){}

Object.assign(Avion.prototype, vuela);

console.log(Avion.prototype);
console.log(Avion.prototype, new Avion());

Object.assign(Pato.prototype, vuela, nada, camina, bano);
Object.assign(Perro.prototype, camina, bano);
Object.assign(Pez.prototype, nada, bano);

let pato = new Pato();
let perro = new Perro();
let pez = new Pez();
let avion = new Avion();

pato.vuela(); // Vuela
pato.nada(); // Nada
pato.camina(); // Camina

// ------- Encapsular esto! ----------
function mixin(Ctr, ...args){
    Object.assign(Ctr.prototype, ...args);
}

mixin(Pato, vuela, nada, camina, bano);
mixin(Perro, camina, bano);
mixin(Pez, nada, bano);
mixin(Avion, vuela);


