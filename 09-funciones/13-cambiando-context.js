// Analizaremos la forma antigua de vincular el contexto de this a un objeto en una función.

// 1
function saludar() {
    console.log(this);
}

// saludar(); // this hace referencia al objeto global (window en el navegador, global en Node.js)
saludar.call({ nombre: 'Juan' }); // this hace referencia al objeto { nombre: 'Juan' }
// print: { nombre: 'Juan' }


