/**
 * Cuatro Principios de la Programación Orientada a Objetos (POO):
 * 1. Encapsulamiento: Agrupar datos y métodos que operan
 * 2. Abstracción: Ocultar los detalles de implementación y mostrar solo la funcionalidad esencial.
 * 3. Herencia: Permite que una clase herede propiedades y métodos de otra clase.
 * 4. Polimorfismo: Permite que diferentes clases implementen métodos con el mismo nombre,
 *    pero con comportamientos diferentes.  
 */

// Encapsulamiento:
const user = {
    name: 'John',
    age: 30,
    getNombreCompleto() {
        return [this.name, this.age].join(' ');
    },
}
console.log(user.getNombreCompleto()); // Para acceder a los datos, tenemos que hacerlo a traves del metodo de user

// Abstracción:
const user2 = new User();
user.password = '123456'; // No deberíamos poder acceder a la propiedad password directamente
user.save()
// No sabemos como se guarda el usuario, solo sabemos que se hace

// Herencia:
// Funcion constructora para JS, clase para POO en otros lenguajes
// EN JS, las clases no se comportan igual, porque JS es orientado a prototipos (no a objetos)

// Polimorfismo:
function hablar(entidad){
    //if (entidad instanceof Persona) {
    //    console.log(`Hola, soy ${entidad.nombre}`);
    //} else if (entidad instanceof Animal) {
    //    console.log(`El animal hace: ${entidad.hacerSonido()}`);
    //} else {
    //    console.log('Entidad desconocida');
    //}
    // NOS AHORRAMOS TODO ESO CON EL POLIMORFISMO:
    entidad.hablar(); // Si entidad es una Persona, llama a su metodo hablar, si es un Animal, llama a su metodo hacerSonido
}
