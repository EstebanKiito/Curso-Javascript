// Metodo join()
// El método join() une todos los elementos de un arreglo (o un objeto similar a un arreglo) en una cadena.
// Este método devuelve una cadena de texto con todos los elementos del arreglo unidos por un separador.
// Si no se especifica un separador, se utiliza una coma por defecto.

let arr = ['Hola', 'mundo', 'desde', 'JavaScript'];
let cadena = arr.join(' ');
console.log(cadena); 
// >>> "Hola mundo desde JavaScript"


// Metodo split()
// El método split() divide una STRING en un ARRAY de subcadenas.

let saludo = 'Hola, soy un saludo';
let dividido = saludo.split(' ');
console.log(dividido); 
// >>> ["Hola,", "soy", "un", "saludo"]


// Tecnica usada en la practica
// De esta forma, quitamos espacios y unimos con guiones

let texto = 'Hola soy un saludo';
let partes = texto.split(' ');
console.log(partes.join('-'));
// >>> "Hola-soy-un-saludo" : Esto funciona por ejemplo en URLs