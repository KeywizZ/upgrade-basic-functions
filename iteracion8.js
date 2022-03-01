// Contador de repeticiones

const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
  ];
let tempArray = [];
let counter = [];

/*  function repeatCounter(param) {
     tempArray = [];
     counter = [];
     for (let i = 0; i < param.length; i++) { 
         if (!tempArray.includes(param[i])) {
            tempArray.push(param[i]);
         }
         else {
            counter.push(param[i]);            
         }
     }
     counter.sort();
     const counterObj = {};
     counter.forEach(element => (counterObj[element] = counterObj[element] + 1 || 1))
         
     console.log(counterObj);
     console.log(tempArray)
 } 

repeatCounter(counterWords);
 */
let counterObj;

function repeatCounter(param) {
    let counterObj = {};
    param.forEach(i => (counterObj[i] = counterObj[i] + 1 || 1))
    
    console.log('Estas son las palabras del array y cuantas veces aparecen: ', counterObj)
}

repeatCounter(counterWords)

