const multiplicarArgumentos = require('../ejercicios/19');

test('Debe retornar el producto de los argumentos', function () {
   const product = multiplicarArgumentos(5, 5);
   const product2 = multiplicarArgumentos();
   const product3 = multiplicarArgumentos(3, 3, 3, 3);
   const product4 = multiplicarArgumentos(1);
   const product5 = multiplicarArgumentos(10, 0, 10);
   expect(product).toBe(25);
   expect(product2).toBe(0);
   expect(product3).toBe(81);
   expect(product4).toBe(1);
   expect(product5).toBe(0);
});

function multiplicarArgumentos(...args) {
   if (args.length === 0) return 0;
   return args.reduce((acc, num) => acc * num, 1);
}

console.log(multiplicarArgumentos(5, 5)); 
console.log(multiplicarArgumentos()); 
console.log(multiplicarArgumentos(3, 3, 3, 3)); 
console.log(multiplicarArgumentos(1)); 
console.log(multiplicarArgumentos(10, 0, 10)); 

