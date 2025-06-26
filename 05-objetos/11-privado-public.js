// Metodos Publicos pueden ser modificados por algun desarrollador del equipo


// Todo lo asignado a THIS: ES PUBLICO

function Usuario(){ // Funcion Constructora de Objetos Usuario
    this.name = 'Nicolas';
    
    //this.log = function() {
    //    console.log('Logging...');
    //}
    
    log = function() {
        console.log('Logging...');
    }
    let id = 1;
    
    this.guardar = function() {
        // this.log() -> LLAMA AL PUBLICO
        log()    // LLAMA AL PRIVADO
        console.log('guardando...');
    }
}

const usuario = new Usuario();

// ESTO NO SE EJECUTARA! (esta privado el metodo)
usuario.log = function() { // OVERRIDE DE LA FUNCION: Podria haber sido error de alguien mas del equipo
    console.log('lala');
} 

usuario.guardar();

// COMO HACERLOS PRIVADOS -> NO USAR THIS