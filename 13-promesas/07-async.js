let promesa1 = param1 => new Promise((resolve, reject) => {
    const b = 'hola 1er mundo';
    resolve(b);
});

let promesa2 = param2 => new Promise((resolve, reject) => {
    // ... hacer algo
    resolve(param2 + ' Hola 2do mundo');
});

let promesa3 = (a, b) => new Promise((resolve, reject) => {
    // ... hacer algo con a y b
    resolve(a + ' y ' + b + ' Hola 3er mundo');
});


// ---Si queremos usar ambos valores (a y b) de promesas---
// 1.-> MALA PRACTICA: Anidar promesas

// Promise.resolve('Primer valor')
//     .then(a => {
//         return promesa1(a)
//             .then(b => {
//                 return promesa2(b).then( (a,b) => promesa3(a, b))
//             });
//     });

// 2.-> MEJOR PRACTICA: Usar async/await

async function main() {
    try {
        const a = await Promise.resolve('Primer valor');
        const b = await promesa1(a);
        const c = await promesa2(b);
        return promesa3(b, c);
    }
    catch (error) {
        console.error('Error:', error);
    }
}

let a = main();
console.log(a);
