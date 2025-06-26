let a = 10;
console.log(a == 10); // true
console.log(a == '10'); // true
console.log(a === '10'); // false -> Compara el valor y el tipo de dato (es exactamente igual)

console.log(a != 10); // false
console.log(a != '10'); // false
console.log(a !== '10'); // true

console.log(a > 10); // false
console.log(a < 10); // false
console.log(a >= 10); // true
console.log(a <= 10); // true

console.log(a > 5 && a < 15); // true
console.log(a > 5 || a < 15); // true

console.log(a > 5 ? 'Si es mayor' : 'No es mayor'); // No es mayor
console.log(a < 5 ? 'Si es menor' : 'No es menor'); // No es menor

console.log(a > 5 ? a < 15 ? 'Si es menor' : 'No es menor' : 'No es mayor'); // Si es menor
console.log(a < 5 ? a < 15 ? 'Si es menor' : 'No es menor' : 'No es mayor'); // No es mayor