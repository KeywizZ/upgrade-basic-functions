// Buscador de nombres

const nameFinder = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
  ];
  function finderName(param, nameSpecific) {
    for (let i = 0; i < param.length; i++) {
        if (param[i] === nameSpecific){
        return console.log(true, 'Su posicion es ' + param.indexOf(nameSpecific));
        /*   return true +  param[i].indexOf(nameSpecific); */
        }
    }
    return console.log(false);
  }

/*   console.log(finderName(nameFinder, 'Peter')); */
finderName(nameFinder, 'Name'); // Cambiar Name por cualquier nombre