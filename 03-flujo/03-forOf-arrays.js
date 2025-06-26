
// --- For of --- (ARRAYS)
// Itera sobre los elementos de un objeto iterable (arrays, strings, maps, sets, etc)

let animales = ['perro', 'gato', 'loro', 'pez', 'serpiente'];

for (let animal of animales){
    console.log(animal);
}

let i = 0;
while (i < animales.length){
    console.log(animales[i]);
    i++;
}

// output:
// perro
// gato
// loro
// pez
// serpiente