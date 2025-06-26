// Menor y mayor de un array

let array = [2, 5, 7, 15, -5, -100, 55];

function getMenorMayor(arr){
    //let menor = Infinity;
    //let mayor = -Infinity;

    let menor = arr[0];
    let mayor = arr[0];

    for (elem of arr) {
        menor = (menor > elem) ? elem : menor;
        mayor = (mayor < elem) ? elem : mayor;
    }
    return [menor, mayor];
}

let listTops = getMenorMayor(array);
console.log(listTops);