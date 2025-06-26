// Templates Strings

const nombre = "Esteban";

const plantilla = `Hola ${nombre}

Esta es una forma mas "bonita"

de escribir strings`;

console.log(plantilla);

// Podemos transformar esta plantilla en una funcion!

function saludar(nombre) {
    return `Hola ${nombre}

Esta es una forma mas "bonita"

de escribir strings`;}

console.log(saludar("Gabriel"));
