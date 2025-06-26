// FECHAS

const actual = new Date();
console.log(actual);

const fecha = new Date(1987, 11, 25, 23,59);
console.log(fecha);


// METODOS IMPORTANTES

console.log('DateString', fecha.toDateString());
console.log('TimeString', fecha.toTimeString()); // Solo la Hora

console.log('ISOString', fecha.toISOString()); // --> ESTE FORMATO ES EL UTILIZADO EN SERVIDORES


// OBTENER DIA o MES o AÑO

console.log(fecha.getDay());
console.log(fecha.getHours());
console.log(fecha.getMonth());


// CAMBIAR FECHA

fecha.setFullYear(2025)
console.log('DateString', fecha.toDateString());



