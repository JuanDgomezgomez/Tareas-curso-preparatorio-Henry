const promedioResultadosTest = require('../ejercicios/18');

test('Debe retornar el promedio de todas las notas', function () {
   expect(promedioResultadosTest([10, 10, 16, 12])).toBe(12);
   expect(promedioResultadosTest([97, 100, 80, 55, 72, 94])).toBe(83);
});

function promedioResultadosTest(notas) {
   if (notas.length === 0) return 0; 
   const suma = notas.reduce((acumulador, nota) => acumulador + nota, 0); 
   return Math.floor(suma / notas.length); 
}

console.log(promedioResultadosTest([10, 10, 16, 12]));  
console.log(promedioResultadosTest([97, 100, 80, 55, 72, 94])); 
console.log(promedioResultadosTest([0, 0, 0])); 
console.log(promedioResultadosTest([])); 



