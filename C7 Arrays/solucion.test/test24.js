const continueStatement = require('../ejercicios/24');

test('Debe retornar un arreglo con los valores resultantes de incrementarlos en 2 siempre que el número y la iteración seas diferentes a 5', function () {
   expect(continueStatement(50)).toEqual([52, 54, 56, 58, 60, 62, 64, 66, 68]);
   expect(continueStatement(-4)).toEqual([-2, 0, 2, 4, 6, 8, 10, 12, 14]);
});

const continueStatement = (num) => {
   const resultado = [];
   for (let i = 0; i < 10; i++) {
     if (i === 5) {
       continue;
     }
     num += 2;
     resultado.push(num);
   }
   return resultado;
 };
 
 console.log(continueStatement(50)); 
 console.log(continueStatement(-4)); 
 