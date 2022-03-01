// Buscar la palabra más larga

const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];
function findLongestWord(param) {      
    let lengthWord = '';
    for (i=0; i<param.length; i++) {
        if (param[i].length>lengthWord.length) {
            lengthWord = param[i];
        }
    }
    console.log(lengthWord);
    /* return lengthWord */
}

findLongestWord(avengers);