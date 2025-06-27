// METODOS ESTATICOS: // Son metodos que pertenecen a la clase y no a las instancias de la clase.
// Se accede a ellos directamente desde la clase, no desde las instancias.
// Se definen con la palabra reservada static.

class Restaurant {
    constructor(name){
        this.name = name;
    }

    getTimetable(){
        console.log('Horarios Restuarante');
    }

    static getRestaurant(id){
        return new Restaurant('bbq');
    }
}

const restaurant = new Restaurant('McDonalds');
console.log(restaurant.name); // McDonalds
restaurant.getTimetable(); // Horarios Restuarante
console.log(Restaurant.getRestaurant(1)); // Restaurant { name: 'bbq' }
console.log(Restaurant.getRestaurant(1).name); // bbq

// No se puede acceder a un metodo estatico desde una instancia de la clase
// console.log(restaurant.getRestaurant(1)); // Error: restaurant.getRestaurant is not a function
// Se debe acceder al metodo estatico desde la clase

// De que sirve esto?
// Por ejemplo, si tenemos una clase que representa una base de datos, podemos tener un metodo
// estatico que nos permita conectarnos a la base de datos sin necesidad de crear una instancia
// de la clase. Esto es util para evitar crear instancias innecesarias y ahorrar memoria

// Ya hemos usados metodos estaticos, por ejemplo: Object.assign(), Object.keys(), Object.values(), etc.
// No necesitamos de crear una instancia de Object para usar estos metodos, podemos usarlos directamente desde la clase Object.