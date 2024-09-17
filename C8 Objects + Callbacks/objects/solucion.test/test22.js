const esAnagrama = require('../ejercicios/22');

test('anagrama de palabras iguales', () => {
   expect(esAnagrama('hola', 'hola')).toBe(true);
});

test('anagrama de palabras diferentes', () => {
   expect(esAnagrama('hola', 'aloh')).toBe(true);
});

test('palabras con diferente longitud', () => {
   expect(esAnagrama('hola', 'holaa')).toBe(false);
});

test('palabras con diferente cantidad de letras iguales', () => {
   expect(esAnagrama('hola', 'holb')).toBe(false);
});

test('palabras con espacios', () => {
   expect(esAnagrama('hola mundo', 'mundo hola')).toBe(true);
});

test('palabras con mayúsculas y minúsculas', () => {
   expect(esAnagrama('Hola', 'aloh')).toBe(true);
});

test('palabras con caracteres especiales', () => {
   expect(esAnagrama('hola!', '!aloh')).toBe(true);
});

test('palabras vacías', () => {
   expect(esAnagrama('', '')).toBe(true);
});

function esAnagrama(str1, str2) {
   const formatString = (str) => 
     str.toLowerCase().replace(/[^a-z0-9]/g, '').split('').sort().join('');
   
   return formatString(str1) === formatString(str2);
 }
 
 console.log(esAnagrama('hola', 'hola'));             
 console.log(esAnagrama('hola', 'aloh'));             
 console.log(esAnagrama('hola', 'holaa'));            
 console.log(esAnagrama('hola', 'holb'));             
 console.log(esAnagrama('hola mundo', 'mundo hola')); 
 console.log(esAnagrama('Hola', 'aloh'));             
 console.log(esAnagrama('hola!', '!aloh'));           
 console.log(esAnagrama('', ''));                     
 