const mayoriaDeEdad = 

test("Debe retornar 'Allowed' si la edad es igual o mayor a 18", function () {
  expect(mayoriaDeEdad(18)).toBe('Allowed');
  expect(mayoriaDeEdad(35)).toBe('Allowed');
});

test("Debe retornar 'Not allowed' si la edad es menor a 18", function () {
  expect(mayoriaDeEdad(7)).toBe('Not allowed');
});

const mayoriaDeEdad = (edad) => {
    if (edad >= 18) {
      return 'Allowed';
    } else {
      return 'Not allowed';
    }
  };
  
  console.log(mayoriaDeEdad(18)); 
  console.log(mayoriaDeEdad(35)); 
  console.log(mayoriaDeEdad(7));   
  