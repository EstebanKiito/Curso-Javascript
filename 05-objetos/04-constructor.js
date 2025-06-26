
// Funciones Factory: Por convecion: camelCase
// Funcion Constructora: Por convencion se usa UpperCamelCase

// {id: 1, recuperarClave: function(){} }
function Usuario() {
    this.id = 1;
    this.recuperarClave = function(){ // METODO! (No funciones) -> Metodo es una funcion definida dentro de un objeto
        console.log('Recuperando clave...');
    };
}

// let usuario = Usuario();
// console.log(usuario); // Undefined ---> CONSTRUCTOR: new Usuario()

let usuario = new Usuario();
console.log(usuario);

/**
 * 4 Cosas que Ocurren al usar: 
 *  ----- new -----
    * Se crea un objeto del aire
    * Se vincula el Prototipo <---
    * El objeto vacio que acabamos de crear, se le asigna a la palabra reservada this ---> this = {} 
    * Retorna automaticamente this
 */

