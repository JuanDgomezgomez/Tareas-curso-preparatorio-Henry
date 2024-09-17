const redondearHaciaArriba = 

test('Debe retornar el número redondeado para arriba', function () {
   expect(redondearHaciaArriba(1.5)).toBe(2);
   expect(redondearHaciaArriba(2)).toBe(2);
   expect(redondearHaciaArriba(0.1)).toBe(1);
});

function redondearHaciaArriba(numero) {
    
    const entero = Math.floor(numero);
    
    const decimal = numero - entero;
    
      if (decimal > 0) {
      return entero + 1;
    } else {
        return entero;
    }
  }
  
  console.log('Resultado para 1.5:', redondearHaciaArriba(1.5));
  console.log('Resultado para 2:', redondearHaciaArriba(2));
  console.log('Resultado para 0.1:', redondearHaciaArriba(0.1));
  
  