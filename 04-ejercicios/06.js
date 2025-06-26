// Cuantos positivos

let array = [2, 5, 7, 15, -5, -100, 55];

function getPositivos(arr){
    let count = 0;
    
    for (elem of arr) {
        count += (elem > 0) ? 1 : 0;
    }
    return count;
}

let quantity = getPositivos(array);
console.log(quantity);