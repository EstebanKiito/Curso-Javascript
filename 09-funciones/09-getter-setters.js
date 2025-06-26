// Getter es una forma de acceder a una propiedad de un objeto de forma controlada, 
// permitiendo realizar acciones adicionales al acceder a la propiedad. 
// Setter es una forma de modificar una propiedad de un objeto de forma controlada, 
// permitiendo realizar acciones adicionales al modificar la propiedad.

const persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    get nombreCompleto() {
        return `${this.nombre} ${this.apellido}`;
    },
    set nombreCompleto(valor) {                      // SET: Necesita un argumento
        //const partes = valor.split(' ');
        //this.nombre = partes[0];
        //this.apellido = partes[1];
        const [nombre, apellido] = valor.split(' '); // Destructuring para obtener nombre y apellido
        this.nombre = nombre;
        this.apellido = apellido;
    }
};  

console.log(persona.nombreCompleto); // Juan Perez
persona.nombreCompleto = 'Maria Lopez'; // Cambiando el nombre completo
console.log(persona.nombreCompleto); // Maria Lopez