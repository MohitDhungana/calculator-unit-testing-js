const Calculator = require('./Calculator');

const calculator = new Calculator();

// Subtraction test
describe('Subtract method', () => {
  test('Fails to subtract two numbers', () => {
    expect(calculator.subtract(10, 5)).not.toBe(6);
  });

  test('successfully subtract two positive numbers', () => {
    expect(calculator.subtract(50, 30)).toBe(20);
  });

  test('successfully subtract two negative numbers', () => {
    expect(calculator.subtract(-1, -2)).toBe(1);
  });

  test('successfully subtract one positive and one negative number', () => {
    expect(calculator.subtract(5, -2)).toBe(7);
  });

  test('successfully throws TypeError', () => {
    expect(() => {
      calculator.subtract('a', 2);
    }).toThrow(TypeError);
  });
});
