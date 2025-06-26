let i = 0;

while (i < 10) {
    i++;
    if (i === 2){
        continue; // Salta a la siguiente iteracion, no ejecuta el codigo que sigue
    } else if (i === 5){
        break; // Rompe el ciclo
    }
    console.log('Numero par:', i);
}