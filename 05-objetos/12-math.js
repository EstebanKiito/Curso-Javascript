console.log(
    Math.PI,
    Math.abs(-10),         // 10
    Math.round(15.5),      // 16
    Math.round(15.4),      // 15
    Math.floor(15.5),      // 15
    Math.ceil(15.0000001), // 16
    Math.pow(2,3),         // 8
    Math.sqrt(9), // 3
);

function getRandom(min, max) {
    return Math.random() * (max-min);
}