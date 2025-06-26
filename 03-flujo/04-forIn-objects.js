// --- For in --- (OBJECTS)
// Itera sobre las propiedades de un objeto

let user = {
    id: 1,
    name: 'John',
    edad: 22,
};

for (let key in user) {
    console.log(key, user[key]);
}

// Output:
// id 1
// name John
// edad 22

// La variable key es una variable que se crea en el ciclo for, toma el valor de cada una de las llaves del objeto user.
// En la primera iteración, key va a tomar el valor de 'id', y user[key] va a tomar el valor de user['id'], que es 1.

let animales = ['perro', 'gato', 'loro', 'pez'];

for (let idx in animales){
    console.log(idx, animales[idx]);
}

// No es muy comun ver for in con arrays (aunque es posible), ya que for of es mas sencillo y directo.
// En este caso, indice va a tomar el valor de cada uno de los indices del array animales.