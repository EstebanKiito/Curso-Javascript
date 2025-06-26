// Vista rapida a las Arrow Functions 

const saludo = () => { // Es totalmente anonima, no se le asigna nombre, si quiero referenciarla, tengo que asignarla a una var
    return 'hola mundo';
}

// FORMA IMPLICITA:

const saludo2 = () => 'Hola Mundo';
const llamarSaludo = saludo2();

console.log(saludo2());
console.log(llamarSaludo);


const saludo3 = nombre => 'Hola ' + nombre // Notar que 1 solo parametro -> No necesitamos ()
console.log(saludo3("Esteban"));

const saludo4 = (nombre, edad) => {
    return `Hola ${nombre}, tienes ${edad} años`;
}
console.log(saludo4("Esteban", 30));
