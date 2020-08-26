const Calculator = require('./Calculator');

const calculator = new Calculator();

describe('Addition method', () => {
  test('Fails to adds two numbers', () => {
    expect(calculator.add(2, 3)).not.toBe(6);
  });

  test('successfully adds two positive numbers', () => {
    expect(calculator.add(1, 2)).toBe(3);
  });

  test('successfully adds two negative numbers', () => {
    expect(calculator.add(-1, -2)).toBe(-3);
  });

  test('successfully adds one positive and one negative number', () => {
    expect(calculator.add(5, -2)).toBe(3);
  });

  test('successfully throws TypeError', () => {
    expect(() => {
      calculator.add('a', 2);
    }).toThrow(TypeError);
  });
});
