const fizzBuzz = 

test('Debe retornar "fizzbuzz" si num es divisible por 3 y 5', function () {
  expect(fizzBuzz(15)).toBe('fizzbuzz');
});

test('Debe retornar "fizz" si num es divisible por 3', function () {
  expect(fizzBuzz(9)).toBe('fizz');
});

test('Debe retornar "buzz" si num es divisible por 5', function () {
  expect(fizzBuzz(10)).toBe('buzz');
});

test('Debe retornar false si num NO es divisible por 5 ni 3', function () {
  expect(fizzBuzz(4)).toBe(false);
});

const fizzBuzz = (num) => {
    if (num % 3 === 0 && num % 5 === 0) {
      return 'fizzbuzz';
    } else if (num % 3 === 0) {
      return 'fizz';
    } else if (num % 5 === 0) {
      return 'buzz';
    } else {
      return false;
    }
  };

  console.log(fizzBuzz(15));
  console.log(fizzBuzz(9));
  console.log(fizzBuzz(10));
  console.log(fizzBuzz(4));