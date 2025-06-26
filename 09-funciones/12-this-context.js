// Que pasa si tratamos de acceder a una propiedad de un objeto desde un metodo (declarado con function)?

// LAS FAT ARROW FUNCTIONS no tienen su propio this, 
// por lo que heredan el this del contexto donde fueron creadas!!!
persona.mostrarCiudadaniasArrow = function() {
    this.ciudadanias.forEach(ciudadania => { 
        console.log(this); // this hace referencia al objeto persona
        console.log(ciudadania); // Argentina, España
    });
};


// forma antigua
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
