const invocarCallback = 

test('Debe invocar/ejecutar el callback', function () {
  const cb = jest.fn();
  invocarCallback(cb);
  expect(cb).toHaveBeenCalled();
});

function invocarCallback(cb) {
  cb();
}

const cb = () => console.log("Callback invocado");
invocarCallback(cb); // Imprime "Callback invocado"
