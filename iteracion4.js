// Calcular el promedio

const numbers = [12, 21, 38, 5, 45, 37, 6];

let suma = 0;
let media = 0;

function average(param) {
    suma = 0;
    media = 0;
    for (let i = 0; i < param.length; i++) {
        suma += param[i];
    }
    media = suma/param.length;
    console.log(media)
}

average(numbers)