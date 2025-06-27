// Mixins con Class

// Un mixin es una forma de reutilizar código entre varias clases sin usar herencia directa. 
// Es como decir: “esta clase no hereda de otra, pero quiero añadirle habilidades extras”.

// Mixins: funciones que añaden comportamiento


const Volador = (Base) => class extends Base {
  volar() {
    console.log(`${this.nombre} está volando 🕊️`);
  }
};

const Nadador = (Base) => class extends Base {
  nadar() {
    console.log(`${this.nombre} está nadando 🐟`);
  }
};

// Clase base
class Animal {
  constructor(nombre) {
    this.nombre = nombre;
  }

  saludar() {
    console.log(`Hola, soy ${this.nombre}`);
  }
}

// Creamos nuevas clases usando los mixins
class Pato extends Volador(Nadador(Animal)) {} // Pato puede volar y nadar
class Perro extends Animal {} // Perro no hereda ningún mixin
class Pez extends Nadador(Animal) {} // Pez solo puede nadar


// 1. Definimos un mixin llamado "Volador"
//    Es una función que recibe una clase base (Base)
//    y devuelve una nueva clase que extiende esa base y añade el método volar().
// Cuando creemos la clase Pato, la hacemos extender(heredar) de Animal, 
// Pero también le añadimos las habilidades de volar y nadar usando los mixins.



// Pruebas
const pato = new Pato('Donald');
pato.saludar();  // Hola, soy Donald
pato.volar();    // Donald está volando 🕊️
pato.nadar();    // Donald está nadando 🐟

const perro = new Perro('Firulais');
perro.saludar(); // Hola, soy Firulais
// perro.nadar(); // ❌ Error: perro.nadar is not a function

const pez = new Pez('Nemo');
pez.saludar();   // Hola, soy Nemo
pez.nadar();     // Nemo está nadando 🐟
