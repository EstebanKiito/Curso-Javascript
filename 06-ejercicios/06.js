// FUNCION CREA COPIAS (sin usar ... y Object.assign)

let obj1 = { id: 1, name: "Esteban"};
function crearCopia(obj){
    // ---- Forma 1 -----
    // let llaves = Object.keys(obj)
    // let valores = Object.values(obj)
    // let objSalida = {}
    // for (let idx in llaves){
    //     objSalida[llaves[idx]] = valores[idx]
    // }
    // return objSalida;

    // ---- Forma 2 -----
    let copia = {};
    for (let key in obj){ // key son las propiedades
        copia[key] = obj[key] // obj[key] son los valores
    }
    return copia;
}

let obj2 = crearCopia(obj1);
console.log({obj1, obj2}); 

// Esto ultimo es equivalente a
/**
 * log {
 *      obj1: obj1,
 *      obj2: obj2
 *  }
 */
