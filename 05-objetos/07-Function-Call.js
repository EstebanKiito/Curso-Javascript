// Constructor llamado Function()
// Existen otras propiedades de la funciones para reutilizar codigo

function Punto(x, y) {
    this.x = x;
    this.y = y;
    this.dibujar = function() { console.log('Dibujando...'); }
}

// Como construir todo eso con el constructor de Function() :

// const Point = new Function('x', 'y',`
//     this.x = x;
//     this.y = y;
//     this.dibujar = function() { console.log('Dibujando...'); }
// `);

// const p = new Point(1,2);
// console.log(p);
// Este codigo es malo -> No utilizar este tipo de definiciones, existen, pero no son recomendables



// ---- CALL: metodo de las funciones ----: 
// Podemos extender objetos (pasarlos como)
// let p = Punto.call({}, 1, 2);

let punto = { z: 7 };
Punto.call(punto, 1, 2);
console.log(punto);

// ---- punto = {z: 7, x: 1, y: 2, dibujar: ƒ} -----

/**
 * Que acaba de pasar?:
    * Cuando a Punto lo llamamos con el metodo call
    * La variable punto (que es un objeto con un propiedad z:7) se la va a pasar a la funcion Punto
    * y this va a tomar el valor del objeto 
    * this = {z} , pero tambien le agregamos x e y, y el metodo
 */

// RESUMEN: Call te permite llamar funciones a las cuales les puedes pasar el contexto de this, y aumentar los objetos que le pasamos
// Con esto podemos -> REUTILIZAR CODIGO
// Tenemos un objeto, queremos extenderlo -> Para que tenga un eje x e y, se lo pasamos a una funcion (con CALL)

// --- APPLY: Hace lo mismo, pero hay que entregar los atributos como un ARRAY ----
// Punto.apply(punto, [1, 2]);
