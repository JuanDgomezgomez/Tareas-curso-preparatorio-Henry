const mesesDelAño = 

var ok = [
   'Marzo',
   'Diciembre',
   'Abril',
   'Junio',
   'Julio',
   'Noviembre',
   'Enero',
   'Mayo',
   'Febrero',
];
var notOk = ['Marzo', 'Diciembre', 'Julio', 'Noviembre'];
test('Debe retornar un arreglo con los meses requeridos', function () {
   expect(mesesDelAño(ok)).toEqual(['Marzo', 'Noviembre', 'Enero']);
});

test('Debe retornar el mensaje si alguno de los meses no se encuentra en el arreglo', function () {
   expect(mesesDelAño(notOk)).toEqual('No se encontraron los meses pedidos');
});

function mesesDelAño(arr) {
   const requiredMonths = ['Enero', 'Marzo', 'Noviembre'];
   const foundMonths = arr.filter(month => requiredMonths.includes(month));
   if (foundMonths.length === requiredMonths.length) {
       return foundMonths;
   }
   return 'No se encontraron los meses pedidos';
}

console.log(mesesDelAño(['Marzo', 'Diciembre', 'Abril', 'Junio', 'Julio', 'Noviembre', 'Enero', 'Mayo', 'Febrero']));
console.log(mesesDelAño(['Marzo', 'Diciembre', 'Julio', 'Noviembre']));
