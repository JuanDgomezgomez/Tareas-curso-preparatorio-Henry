// const productoEntreNúmeros = 

test('productoEntreNúmeros of 1 and 5 is 120', () => {
    expect(productoEntreNúmeros(1, 5)).toBe(120);
  });
  
  test('productoEntreNúmeros of 2 and 4 is 24', () => {
    expect(productoEntreNúmeros(2, 4)).toBe(24);
  });
  
  test('productoEntreNúmeros of 5 and 5 is 5', () => {
    expect(productoEntreNúmeros(5, 5)).toBe(5);
  });
  
  test('productoEntreNúmeros of 0 and 10 is 0', () => {
    expect(productoEntreNúmeros(0, 10)).toBe(0);
  });
  
  test('productoEntreNúmeros of -5 and 5 is 0', () => {
    expect(productoEntreNúmeros(-5, 5)).toBe(0);
  });
  
  const productoEntreNúmeros = (num1, num2) => {
    let producto = 1;
    if (num1 === 0 || num2 === 0) {
      return 0;
    }
    for (let i = num1; i <= num2; i++) {
      producto *= i;
    }
    return producto;
  };
  
  console.log(productoEntreNúmeros(1, 5));   
  console.log(productoEntreNúmeros(2, 4));   
  console.log(productoEntreNúmeros(5, 5));   
  console.log(productoEntreNúmeros(0, 10));  
  console.log(productoEntreNúmeros(-5, 5));  
  

