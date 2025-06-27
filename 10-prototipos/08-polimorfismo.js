function Select(){}

Select.prototype.render = function(){
    console.log('Renderizando select...');
}

function Checkbox(){}

Checkbox.prototype.render = function(){
    console.log('Renderizando checkbox...');
}

let components = [
    new Select(),
    new Checkbox()
]

components.forEach( component => component.render() );