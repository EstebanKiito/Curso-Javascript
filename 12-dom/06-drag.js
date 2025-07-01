//let span = document.createElement('span');
//span.id = 'hola-mundo';
//span.innerText = 'Arrastrable';
//span.draggable = true; // Habilita el arrastre
//document.body.append(span);

// ---- DRAGGABLE ELEMENT ----

let id; // Declaramos la var, para cuando empieze el arrastre, se asigne el id

function createDraggable(){
    let span = document.createElement('span');
    span.id = 'hola-mundo';
    span.innerText = 'Arrastrable';
    span.draggable = true; // Habilita el arrastre

    span.ondragstart = e => {
        id = e.target.id; // Guardamos el id del elemento arrastrado
    }
    return span;
}

let span = createDraggable();
document.body.append(span);

// ---- DROPABLE AREA ---

function createDroppableArea(){
    let dropArea = document.createElement('div');
    dropArea.className = 'drop';

    dropArea.ondragenter = e => {
        e.target.style.background = 'yellow';
    }

    dropArea.ondragleave = e => {
        e.target.style.background = '';
    }

    // Para añadir al area: necesitamos la referencia del elemento arrastrado
    // Con esta la sacamos del body, y la añadimos al dropArea
    // Ademas, debemos evitar el comportamiento defecto
    dropArea.ondragover = e => e.preventDefault();
    dropArea.ondrop = e => {
        e.target.appendChild(document.getElementById(id));
    }

    return dropArea;
}


let dropArea = createDroppableArea();
let dropArea2 = createDroppableArea();
document.body.append(dropArea);
document.body.append(dropArea2);
