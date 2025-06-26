const saludo = "Hola Mundo"; // Esto nos devuelve un string
const despedida = new String("Chao Mundo"); // Esto nos devuelve un Objeto y no un string

// saludo.metodo : Porque? -> Javascript toma el string -> Lo envuelve dentro de un objeto: Por eso tiene metodos

console.log(saludo.length); // PROPIEDAD -> No requiere parentesis length()
console.log(saludo.indexOf("M"));
console.log(saludo.includes(" Mundo")); // TRUE

// NO ENCUENTRA EL STRING : RETRONA -1

// Logica: 
// if (string.indexOf() >= 0) { ...}

// --- REMPLAZO ---
console.log(saludo.replace("Mundo", "Esteban"), saludo); // Replazo TEMPORAL!

let nuevoSaludo = saludo.replace("Mundo", "Esteban");
console.log(nuevoSaludo);

console.log(saludo.toUpperCase());

console.log(saludo.substring(0,4));

// QUITAR ESPACIOS: LIMPIAR
console.log('   Chao   Espacios '.trim());

