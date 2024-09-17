// const colors = 

test("Debe retornar 'This is {color}'", function () {
    expect(colors('blue')).toBe('This is blue');
    expect(colors('red')).toBe('This is red');
    expect(colors('green')).toBe('This is green');
    expect(colors('orange')).toBe('This is orange');
  });
  
  test("Debe retornar 'Color not found' si el argumento no es el esperado", function () {
    expect(colors()).toBe('Color not found');
    expect(colors('pink')).toBe('Color not found');
  });

const colors = (color) => {
    if (color === 'blue') {
      return 'This is blue';
    } else if (color === 'red') {
      return 'This is red';
    } else if (color === 'green') {
      return 'This is green';
    } else if (color === 'orange') {
      return 'This is orange';
    } else {
      return 'Color not found';
    }
  };

  console.log(colors("blue"));
  console.log(colors("red"));
  console.log(colors("green"));
  console.log(colors("orange"));
  console.log(colors());
  console.log(colors("pink"));