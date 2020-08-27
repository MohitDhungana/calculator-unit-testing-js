const Calculator = require('./Calculator');

const calculator = new Calculator();

// Multiply test
describe('Multiply method', () => {
  test('Fails to multiply two numbers', () => {
    expect(calculator.multiply(10, 5)).not.toBe(1);
  });

  test('successfully multiply two positive numbers', () => {
    expect(calculator.multiply(2, 10)).toBe(20);
  });

  test('successfully multiply two negative numbers', () => {
    expect(calculator.multiply(-2, -4)).toBe(8);
  });

  test('successfully multiply one positive and one negative number', () => {
    expect(calculator.multiply(5, -2)).toBe(-10);
  });

  test('successfully throws TypeError', () => {
    expect(() => {
      calculator.multiply('a', 2);
    }).toThrow(TypeError);
  });
});
