// Funcion GroupBy
// Muy Util!
// Agrupar un array de objetos por una propiedad
// Por ejemplo, agrupar usuarios por su plan de suscripción (Free, Premium, Gold, etc.)
//

const usuarios = [
    { edad: 22, nombre: "Levi", plan: "Premium"},
    { edad: 25, nombre: "Esteban", plan: "Free"},
    { edad: 17, nombre: "Gabi", plan: "Gold"},
    { edad: 30, nombre: "Daniel", plan: "Free"},
]


function groupBy( arr, prop) {
    return usuarios.reduce( (acc, el) => {
        let valor = el[prop];
        
        acc[valor] = (acc[valor] ? acc[valor] : []); // Si tiene valor -> Le asignamos el mismo, si no, uno vacio
        // acc[valor] = (condición ? valorSiTrue : valorSiFalse);
        
        acc[valor].push(el)
        return acc;
    } , {})
}

const gropued = groupBy(usuarios, 'plan');
console.log({ gropued });

/** 
 * gropued: 
Free : [{…}, {…}]
Gold : [{…}]
Premium : [{…}]
 */