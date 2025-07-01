// HTMLDivElement
let htmlElement = document.getElementById('cuerpo'); // <div id="cuerpo" name="body">Hola Mundo</div>
// console.log(Object.getPrototypeOf(htmlElement)); // Hack para ver los metodos que podemos utilizar con el elemento HTML


// HTMLCollection
let elementosRed = document.getElementsByClassName('red') // Devuelve una colección de elementos con la clase 'red'
// console.log(elementosRed); // HTMLCollection(3) [p.red, p.red, p.red] 
// HTMLCollection se parece a un array, pero no es un array real!


// NodeList: Se parece a un Html collection, tiene diferencias sutiles
document.getElementsByName('esteban'); // Devuelve una colección de elementos con el atributo name='esteban'
console.log(document.getElementsByName('esteban')); // NodeList [p.blue[name="esteban"]]

// HTMLCollection(4)
let parrafos = document.getElementsByTagName('p'); // Devuelve una colección de todos los elementos <p> del documento
console.log(parrafos); // HTMLCollection(6) [p.red, p.red, p



// ---- METODOS LENTOS ---- : Van a buscar en todo el DOM, los otros funcionan a indices

let el = document.querySelector('#cuerpo'); // Un elemento: ID usamos #
let el2 = document.querySelector('.red'); // Un elemento HTML: CLASE usamos .

// NodeList
let el3 = document.querySelectorAll('p'); // Un elemento HTML: TAG usamos el nombre del tag


// DIFERENCIA ENTRE NODELIST Y HTMLCOLLECTION
let plive = document.getElementsByTagName('p'); // HTMLCollection
let pstatic = document.querySelectorAll('p'); // NodeList
console.log(plive, pstatic); 

let nuevoP = document.createElement('p'); // 
document.body.append(nuevoP); // Añadimos el nuevo elemento al body
console.log(plive, pstatic); 

// CONCLUSION: La HtmlCollection refleja los cambios en el DOM, mientras que la NodeList no.
// NodeList te pide hacer la query cada vez que la llamas
