// Factory Function

function createUsuario(name){
    return {
        id : Math.random(),
        name,
    }
}

let user = createUsuario('Esteban')
let user2 = createUsuario('Gabriel')
console.log(user, user2);

