// Calcular la suma

const numbers = [1, 2, 3, 5, 45, 37, 58];

let suma = 0;
function sumAll(param) {   
    for (let i = 0; i < param.length; i++) {
        suma += param[i]; 
    }
    console.log(suma)
}

sumAll(numbers);