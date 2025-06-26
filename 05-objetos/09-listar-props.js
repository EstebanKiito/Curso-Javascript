// JS: Lenguaje dinamico
// Los objetos se le pueden agregar y eliminar
// Problema: Haber eliminado alguna

// LISTAR PROPIEDADES AÑADIDAS DE MANERA DINAMICA

const punto = {
    x: 10,
    y: 15,
    dibujar() { // Equivalente a realizar : dibujar: function(){}
        console.log('dibujando');
    }
};

// delete punto.dibujar;
// punto.dibujar(); // ERROR: Dibujar no es una funcion

if('dibujar' in punto){
    punto.dibujar(); // OK: No se ejecutara si no existe
}


// 1. Object.KEYS('nombre_objeto'): Array con las propiedades de un objeto -> Con esto podemos Listarlas

console.log(Object.keys(punto));
// ['x','y','dibujar']

// for (let llave of Object.keys(punto)) { // For of: Recorre como Array
//     console.log(llave, punto[llave]); // llave: x  // punto[x] = 10
// }

// 2. Object.ENTRIES(): Sirve para acceder a las propiedades cuando no sabemos

// for(let entry of Object.entries(punto)){
//     console.log(entry) // entry: ['x', 'y']
// }

// 3. Esta forma es NUEVA y FACIL de recorrer propiedades
for (let llave in punto){
    console.log(llave, punto[llave]);
}

// Conclusion: Utilizar esta ultima, la 3
// 1 y 2: Son formas antiguas, de recorrer las propiedades de un Objeto

/** ------ IMPORTANTE --------
 * 1. METODOS DE CLASE: o ESTATICO -> Metodos de un Constructor (ej: Object)
    * Constructor Object -> Tiene 2 Metodos estaticos: Keys y Entries
 */