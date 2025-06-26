// numeros impares

function imapres(n){
    for(let i = 0; i <= n; i++){
        if( i % 2 !== 0){
            console.log(i);
        }
    }
}

imapres(100); // 1, 3, 5, 7, 9... 99