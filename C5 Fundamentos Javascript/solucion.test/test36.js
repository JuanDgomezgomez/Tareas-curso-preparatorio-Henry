const numeroRandom = 

test('Debe retornar un número entre 0 y 1', function () {
   expect(typeof numeroRandom()).toBe('number');
   expect(numeroRandom()).toBeGreaterThanOrEqual(0);
   expect(numeroRandom()).toBeLessThan(1);
});

function numeroRandom() {
    
    const num = Math.random();
  
      if (num >= 0 && num < 1) {
        return num;
    } else {
        throw new Error('Número fuera del rango esperado');
    }
  }
  
    try {
    const resultado = numeroRandom();
    console.log('Número aleatorio generado:', resultado);
  
      if (typeof resultado !== 'number') {
      console.error('Error: El valor generado no es un número');
    } else if (resultado < 0 || resultado >= 1) {
      console.error('Error: El número no está en el rango [0, 1)');
    } else {
      console.log('Número está en el rango correcto: [0, 1)');
    }
  } catch (error) {
    console.error(error.message);
  }
  