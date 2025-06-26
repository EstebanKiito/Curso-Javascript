// Forma de clonar objetos : Que no apunten a la misma direccion de memoria

let punto = {
    x: 10,
    y: 15,
}

// Añadirle propiedades a un Objeto: ASSIGN
Object.assign(punto, {z: 20});
console.log(punto);

// CLONAR EL OBJETO: Pasarle las propiedades a un objeto vacio
let copia = Object.assign({}, punto, {r:20});

// Observacion: Si la pasamos 2 Atributos con mismo nombre punto y x:1, -> Tomara el que este mas a la derecha: 1

// COPIA EXACTA:
// let copiaPunto = Object.assign({}, punto);

// NUEVO OPERADOR

let copiaNueva = { ...punto};
console.log(copiaNueva);