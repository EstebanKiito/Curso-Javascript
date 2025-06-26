// Obtener por el indice

function getbyIdx(arr, idx){
    if (idx < 0 || idx > arr.length - 1 ){
        return 'elemento no existente';
    }
    return arr[idx];
}

let resultado = getbyIdx([1,2,3,4], 1);
console.log(resultado); // 2