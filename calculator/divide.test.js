const Calculator = require('./Calculator');

const calculator = new Calculator();

// Divide test
describe('Divide method', () => {
  test('Fails to divide two numbers', () => {
    expect(calculator.divide(10, 5)).not.toBe(20);
  });

  test('successfully divide two positive numbers', () => {
    expect(calculator.divide(10, 5)).toBe(2);
  });

  test('successfully divide two negative numbers', () => {
    expect(calculator.divide(-2, -4)).toBe(0.5);
  });

  test('successfully divide one positive and one negative number', () => {
    expect(calculator.divide(10, -2)).toBe(-5);
  });

  test('successfully handles divide by zero condition', () => {
    expect(() => {
      calculator.divide(10, 0);
    }).toThrow(Error);
  });

  test('successfully handles zero divide by zero condition', () => {
    expect(() => {
      calculator.divide(0, 0);
    }).toThrow(Error);
  });

  test('successfully throws TypeError', () => {
    expect(() => {
      calculator.divide('a', 2);
    }).toThrow(TypeError);
  });
});
