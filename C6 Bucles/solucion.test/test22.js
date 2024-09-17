const doWhile = 

test('Debe agregar 5 al número recibido un total de 8 veces y retornar el resultado', function () {
  expect(doWhile(5)).toBe(45);
  expect(doWhile(100)).toBe(140);
  expect(doWhile(-1)).toBe(39);
});

const doWhile = (num) => {
    let total = num;
    let i = 0;
    do {
      total += 5;
      i++;
    } while (i < 8);
    return total;
  };

  console.log(doWhile(5));
  console.log(doWhile(100));
  console.log(doWhile(-1));
