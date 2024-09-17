const redondearNumero = 

test('Debe retornar el número redondeado', function () {
   expect(redondearNumero(1.5)).toBe(2);
   expect(redondearNumero(2)).toBe(2);
   expect(redondearNumero(0.1)).toBe(0);
});

function redondearNumero(numero) {

    const entero = Math.floor(numero);
    
    const decimal = numero - entero;
    
    if (decimal >= 0.5) {
      return entero + 1;

    } else {
      return entero;
    }
  }
  
  console.log('Resultado para 1.5:', redondearNumero(1.5)); 
  console.log('Resultado para 2:', redondearNumero(2)); 
  console.log('Resultado para 0.1:', redondearNumero(0.1)); 
  console.log('Resultado para -1.5:', redondearNumero(-1.5)); 
  console.log('Resultado para -0.5:', redondearNumero(-0.5)); 
  
    