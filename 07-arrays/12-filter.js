let usuarios = [
    { nombre: 'Esteban', edad: 25 },
    { nombre: 'Daniel', edad: 30 },
    { nombre: 'Gaby', edad: 17 }
]

const mayorDeEdad = usuarios.filter(u => u.edad >= 18); // Filtrando usuarios mayores de edad
const menoresDeEdad = usuarios.filter(u => u.edad < 18); // Filtrando usuarios menores de edad

console.log(mayorDeEdad); // [{ nombre: 'Esteban', edad: 25 }, { nombre: 'Daniel', edad: 30 }]
console.log(menoresDeEdad); // [{ nombre: 'Gaby', edad: 17 }]