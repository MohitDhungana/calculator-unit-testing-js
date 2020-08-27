const Calculator = require('./Calculator');

const calculator = new Calculator();

// Square test
describe('Square method', () => {
  test('Fails to square a number', () => {
    expect(calculator.square(10)).not.toBe(20);
  });

  test('successfully square a positive number', () => {
    expect(calculator.square(5)).toBe(25);
  });

  test('successfully square a negative number', () => {
    expect(calculator.square(-2)).toBe(4);
  });

  test('successfully throws TypeError', () => {
    expect(() => {
      calculator.square('a', 2);
    }).toThrow(TypeError);
  });
});
