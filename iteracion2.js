// Buscar la palabra más larga

const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];
function findLongestWord() {      
    let largo = 'a';
    for (i=0; i<avengers.length; i++) {
        if (avengers[i].length>largo.length) {
            largo = avengers[i];
        }
    }
    console.log(largo);
}

findLongestWord();

