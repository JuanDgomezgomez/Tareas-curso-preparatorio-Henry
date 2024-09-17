const esPalindromo = require('../ejercicios/32');

test("esPalindromo devuelve true para 'ana'", () => {
   expect(esPalindromo('ana')).toBe(true);
});

test("esPalindromo devuelve true para 'reconocer'", () => {
   expect(esPalindromo('reconocer')).toBe(true);
});

test("esPalindromo devuelve false para 'hola'", () => {
   expect(esPalindromo('hola')).toBe(false);
});

test("esPalindromo devuelve false para 'javascript'", () => {
   expect(esPalindromo('javascript')).toBe(false);
});

test("esPalindromo devuelve false para 'No subas, abusón'", () => {
   expect(esPalindromo('No subas, abusón')).toBe(false);
});

const esPalindromo = (texto) => {
   const textoLimpiado = texto.toLowerCase().replace(/[^a-z0-9]/gi, '');
   return textoLimpiado === textoLimpiado.split('').reverse().join('');
 };
 
 console.log(esPalindromo('ana')); 
 console.log(esPalindromo('reconocer')); 
 console.log(esPalindromo('hola')); 
 console.log(esPalindromo('javascript')); 
 console.log(esPalindromo('no subas, abuson'));
 console.log(esPalindromo('No subas, abuson')); 
 
 
