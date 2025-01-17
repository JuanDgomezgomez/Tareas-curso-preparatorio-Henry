const contarParesConContinue = require('../ejercicios/25');

describe('contarParesConContinue', () => {
   it('should return 0 when given an empty array', () => {
      expect(contarParesConContinue([])).toBe(0);
   });

   it('should return 0 when given an array with no even numbers', () => {
      expect(contarParesConContinue([1, 3, 5])).toBe(0);
   });

   it('should return the correct count when given an array with even numbers', () => {
      expect(contarParesConContinue([1, 2, 3, 4, 5, 6])).toBe(3);
   });

   it('should return the correct count when given an array with only even numbers', () => {
      expect(contarParesConContinue([2, 4, 6, 8])).toBe(4);
   });
});

const contarParesConContinue = (arr) => {
   let contador = 0;
   for (let i = 0; i < arr.length; i++) {
     if (arr[i] % 2 !== 0) {
       continue;
     }
     contador++;
   }
   return contador;
 };
 
 console.log(contarParesConContinue([])); 
 console.log(contarParesConContinue([1, 3, 5])); 
 console.log(contarParesConContinue([1, 2, 3, 4, 5, 6])); 
 console.log(contarParesConContinue([2, 4, 6, 8])); 
 
