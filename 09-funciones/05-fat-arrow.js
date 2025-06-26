// ERROR:
const suma = (a, b) => {
    console.log(arguments); 
    Array.from(arguments)
        .reduce((acc, el) => acc + el) // Sumar todos los argumentos 
}
argumentos(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// Las Fat Arrow Functions no tienen su propio 'arguments'
// Tampoco tienen 'this', 'super', 'new.target' o 'prototype'
// Por lo tanto, no se pueden usar como métodos de un objeto o como constructores

// Conclusion: Usar Fat Arrow Functions solo para hacer calculos!