let accion = "listar";

switch (accion) {
    case "listar":
        console.log("Listar productos");
        break;
    case "crear":
        console.log("Crear producto");
        break;
    case "editar":
        console.log("Editar producto");
        break;
    case "eliminar":
        console.log("Eliminar producto");
        break;
    
    // Si no coincide con ningun caso anterior:    
    default:
        console.log("Accion no valida");
};

// Siempre colocar un break al final de cada case, de lo contrario se ejecutaran todos los casos siguientes!

// La libreria REDUX: utiliza switch para manejar los diferentes tipos de acciones que se pueden realizar en una aplicacion web.