function saludar() {
  console.log('Hola');
}

saludar(); 

function suma(a, b){
    console.log(arguments); // Arguments es un objeto que contiene todos los argumentos que se pasan a la funcion
    return a + b; // Referencias dentro de la funcion; a y b son Parametros
}

resultado = suma(5, 8); // 5 y 8 son Argumentos
console.log(resultado);

console.log(typeof suma); // function