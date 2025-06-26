let i = 0;

while (i <10) {
    if (i % 2 == 0){
        console.log('Numero par:', i);
    }
    i++;
}

// ---- Do while -----
// do while se ejecuta al menos una vez, aunque la condicion sea falsa, la condicion se evalua al final!
let j = 0;

do {
    console.log('Numero:', j);
    j++;
} while (j < 10);


// ----- For -----

let k = 0;
for(k; k < 10; k++){ // Notar lo parecido con C! int i = 0; i < 10; i++
    console.log('Numero:', k);
}

// ---- For of -----
// Itera sobre los elementos de un objeto iterable (arrays, strings, maps, sets, etc)

let numeros = [1, 2, 3, 4, 5];
for (let numero of numeros){
    console.log(numero);
}
// Notar el parecido con Python! -> for numero in numeros: print(numero)


// ----- For in -----
// Itera sobre las propiedades de un objeto
// Esto es interesante, ya que puedes iterar sobre un numero DESCONOCIDO de propiedades de un objeto 
// Las cuales, pueden cambiar durante la ejecucion del programa (Añadir o eliminar)

let persona = {
    nombre: 'Juan',
    edad: 30,
    sexo: 'M',
};

for (let propiedad in persona){
    console.log(propiedad, persona[propiedad]);
}

