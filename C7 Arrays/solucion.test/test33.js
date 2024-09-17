const combine = require('../ejercicios/33');

describe('combine', () => {
   test('Debe combinar los caracteres de forma alternada si hay un string vacío', () => {
      expect(combine('abc', '', '123')).toBe('a1b2c3');
      expect(combine('abc', '12345', '')).toBe('a1b2c345');
   });

   test('Debe combinar correctamente los resultas si los strings tienen diferente tamaño', () => {
      expect(combine('abc', '12345', '')).toBe('a1b2c345');
      expect(combine('a', '12', 'xyz')).toBe('a1x2yz');
   });

   test('Debe retornar un string vacío si todos los strings están vacíos', () => {
      expect(combine('', '', '')).toBe('');
   });

   test('De procesar strings de tamaño 1 correctamente', () => {
      expect(combine('a', 'b', 'c')).toBe('abc');
   });

   test('Debe retornar el resultado correcto si cualquier string está vacío', () => {
      expect(combine('abc', '', '')).toBe('abc');
      expect(combine('', '123', '')).toBe('123');
      expect(combine('', '', 'xyz')).toBe('xyz');
   });
});

const combine = (str1, str2, str3) => {
   let maxLength = Math.max(str1.length, str2.length, str3.length);
   let result = '';
 
   for (let i = 0; i < maxLength; i++) {
     if (i < str1.length) result += str1[i];
     if (i < str2.length) result += str2[i];
     if (i < str3.length) result += str3[i];
   }
 
   return result;
 };
 
 console.log('Debe combinar "abc", "", "123" =>', combine('abc', '', '123')); 
 console.log('Debe combinar "abc", "12345", "" =>', combine('abc', '12345', '')); 
 console.log('Debe combinar "a", "12", "xyz" =>', combine('a', '12', 'xyz')); 
 console.log('Debe combinar "", "", "" =>', combine('', '', '')); 
 console.log('Debe combinar "a", "b", "c" =>', combine('a', 'b', 'c')); 
 console.log('Debe combinar "abc", "", "" =>', combine('abc', '', '')); 
 console.log('Debe combinar "", "123", "" =>', combine('', '123', '')); 
 console.log('Debe combinar "", "", "xyz" =>', combine('', '', 'xyz')); 
 