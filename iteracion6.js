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
    let unique = {};
    param.forEach((i) => {
            if (!unique[i]) {
                unique[i] = true;
            }
        });
     return Object.keys(unique); 
  }

console.log(removeDuplicates(duplicates)); 
  