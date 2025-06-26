// Funcion para saber si dos objetos son iguales

function similares(obj1, obj2){
    distintos = false;
    for (let llave in obj1) {
        //console.log(obj1[llave]);
        if (obj1[llave] != obj2[llave]){
            distintos = true;
        }
    }
    return !distintos;
}

let resultado = similares(
    {id:1, name:"Esteban"},
    {id:1, name:"Esteban"},
);

console.log(resultado);
