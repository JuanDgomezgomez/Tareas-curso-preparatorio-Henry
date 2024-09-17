const sumarArray = require('../ejercicios/04');

test('Debe sumar todos los números del arreglo y pasarle el resultado como argumento al callback.', function (done) {
  sumarArray([1, 2, 3, 4, 5], function (sum) {
    expect(sum).toBe(15);
    done();
  });
});

function sumarArray(arr, cb) {
  const sum = arr.reduce((acc, num) => acc + num, 0);
  cb(sum);
}

sumarArray([1, 2, 3, 4, 5], (sum) => console.log(`La suma es: ${sum}`));
