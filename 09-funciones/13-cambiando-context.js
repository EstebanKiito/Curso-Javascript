// Analizaremos la forma antigua de vincular el contexto de this a un objeto en una función.

// 1
function saludar() {
    console.log(this);
}

// saludar(); // this hace referencia al objeto global (window en el navegador, global en Node.js)
saludar.call({ nombre: 'Juan' }); // this hace referencia al objeto { nombre: 'Juan' }
// print: { nombre: 'Juan' }

saludar.apply({ nombre: 'Ana' },[1,2,3]); // this hace referencia al objeto { nombre: 'Ana' }
// LA diferencia entre call y apply es que apply recibe un array de argumentos

let nuevoSaludar = saludar.bind({ nombre: 'Pedro' }); // this hace referencia al objeto { nombre: 'Pedro' }
nuevoSaludar(1,2,3); // this hace referencia al objeto { nombre: 'Pedro' }
// print: { nombre: 'Pedro' } (si pusieramos ...resto, se imprimiría también 1, 2, 3)
// Basicamente: bind crea una nueva función con el contexto de this vinculado al objeto pasado como argumento

// Hacerlo con la funcion anterior! (Antigua) -> Mejor usar funciones flecha
const persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    ciudadanias: ['Argentina', 'España'],
    mostrarCiudadanias() {
        this.ciudadanias.forEach(function(ciudadania) {
            console.log(this); // this hace referencia al objeto global (window en el navegador, global en Node.js)
            console.log(ciudadania); // undefined, porque this no hace referencia al objeto persona
        }.bind(this)); // Usamos bind para vincular this al objeto persona
    }
};



