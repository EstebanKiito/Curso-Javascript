// nombre resolucion:

/** 
 * Nombre: ancho x alto
 * 8K = 7680 x 4320
 * 4K = 3840 x 2160
 * Full HD = 1920 x 1080
 * HD = 1280 x 720
*/ 

function nombreResolucion(alto, ancho){
    if(alto >= 7680 && ancho >= 4320){
        return '8K';
    } else if(alto >= 3840 && ancho >= 2160){
        return '4K';
    } else if(alto >= 1920 && ancho >= 1080){
        return 'Full HD';
    } else if(alto >= 1280 && ancho >= 720){
        return 'HD';
    } else {
        return 'Otra resolución';
    }
}

let nombre = nombreResolucion(7680, 4320);
console.log(nombre); // 8K