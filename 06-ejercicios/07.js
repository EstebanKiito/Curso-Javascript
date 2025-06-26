// Agregar ID

let objeto = {name: "Esteban"}
function agregarId(obj){
    //obj.id = Math.random()
    obj["id"] = Math.random() // recuerda que [id] daria error porque id es una variable y no existe
}

agregarId(objeto); // Notar que podemos hacer esto -> Porque los objetos se pasan por referencia (no copias!)
console.log(objeto);
