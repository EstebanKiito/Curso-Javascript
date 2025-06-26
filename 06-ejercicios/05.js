// Funcion que evalua si tiene propiedad en particular

let objeto = {
    id: 1,
    name: "Esteban",
    login: function() {},
    logout: function() {},
};

let propiedad = 'name';

function tieneProp(obj, propiedad) {
    let props = Object.keys(obj); // [id, name]
    for (let prop of props){ // for of -> id, name / for in -> 0, 1, 2 ...
        console.log(prop);
        
        if (propiedad == prop){
            return true;
        }
    }
    return false;
}

console.log(tieneProp(objeto, propiedad));
