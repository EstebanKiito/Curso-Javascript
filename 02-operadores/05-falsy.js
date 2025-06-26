// short circuit

// Falso
// Todos estos son valores FALSY: false, 0, '', null, undefined, NaN

// ||
// Si el primer valor es falso, regresa el segundo valor

let nombre = '';
let username = nombre || 'Anonimo';

console.log(username); // Anonimo

nombre = 'Juan';
console.log(nombre || 'Anonimo'); // Juan

// &&
// Si el primer valor es verdadero, regresa el segundo valor

function fn1(){
    console.log('fn1');
    return true;
}

function fn2(){
    console.log('fn2');
    return false;
}

let x = fn1() && fn2(); // fn1, fn2 se ejecutan

