let collection = document.getElementsByTagName('p'); // HTMLCollection
let list = document.querySelectorAll('p'); // NodeList
console.log(collection, list); // Muestra ambos tipos de colecciones


// Collection Methods:

//let item1 = collection.namedItem('esteban')
//console.log(item1); // Muestra el elemento con name='esteban' 

//let item2 = collection.item(0); 
//console.log(item2); // Muestra el primer elemento de la colección

//let item3 = collection[0];
//console.log(item3);

// Iteracion, HTML Collection no tinene forEach, pero NodeList si

//for (let el of collection) {
//    console.log(el);
//}

// forma 2: Transformar a array
Array.from(collection).forEach(el => console.log(el));
// Antiguamente chrome mostraba otra cosa con esto (objetos y no elementos)

// forma 3: Spread Operator
//[...collection].forEach(el => console.log(el));


// Nodelist Methods: accedemos solo por indices!

let item = list.item(0); // Muestra el primer elemento de la lista
let item1 = list[1]; // Muestra el primer elemento de la lista
console.log(item, item1);

list.forEach(el => console.log(el)); // Itera sobre la lista de nodos

let entries = list.entries(); // Devuelve un iterador de pares clave/valor
// Array Iterator: Posee next() y return()
//console.log(entries.next()); // Muestra el primer par clave/valor

let keys = list.keys(); // Devuelve un iterador de claves

let values = list.values(); // Devuelve un iterador de valores

// Transformar a lista (para usar metodos de lista)
let lista = Array.from(list); // Spread operator
console.log(lista); // Muestra la lista de nodos como un array


