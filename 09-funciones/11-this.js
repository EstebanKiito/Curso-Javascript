/**
 * THIS
 * 1. Dentro de un objeto, this hace referencia al objeto actual.
 * 2. Dentro de una función, this hace referencia al objeto global (window en el navegador, global en Node.js).
 * 3. Si se usa NEW: hace referencia al nuevo objeto creado.
 */

const { use } = require("react");

//--- 1 Al objeto ---
const persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    login() {
        console.log(this); // this hace referencia al objeto persona
    }
};

user.logout = function logout() {
    console.log(this); // this hace referencia al objeto user
};


user.logout(); // { nombre: 'Juan', apellido: 'Perez', login: [Function: login], logout: [Function: logout] }
user.login(); // { nombre: 'Juan', apellido: 'Perez', login: [Function: login], logout: [Function: logout] }

//--- 2 A la ventana ---
function saludar() {
    console.log(this); // this hace referencia al objeto global (window en el navegador, global en Node.js)
}
saludar(); // window (en el navegador) o global (en Node.js)

//--- 3 Al nuevo objeto creado ---
function Log(mensaje){ // Funcion constructora
    this.mensaje = mensaje; // this hace referencia al nuevo objeto creado
    console.log(this); // this hace referencia al nuevo objeto creado
}
const l = new Log('Hola mundo'); // { mensaje: 'Hola mundo' }

// Al usar NEW, Ocurren 4 cosas:
// 1. Se crea un nuevo objeto literal (vacio).
// 2. Se vincula el nuevo objeto a this
// 3. Se vincula el prototipo del nuevo objeto al prototipo de la función constructora.
// 4. Se devuelve el nuevo objeto, si no retorna nada, retorna this

