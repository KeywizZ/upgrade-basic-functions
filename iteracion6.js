// Valores únicos

const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
  ];
  function removeDuplicates(param) {
    tempArray = [];
    for (let i = 0; i < param.length; i++) { 
        if (!tempArray.includes(param[i])) {
           tempArray.push(param[i]);
        }
        else {
           
        }
    }
    return tempArray;
  }
console.log(removeDuplicates(duplicates)); 
  