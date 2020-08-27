const Calculator = require('./Calculator');

const calculator = new Calculator();

describe('Cosine method in degrees', () => {
  test('Fails calculate cos of a number', () => {
    expect(calculator.cos(45)).not.toBe(6);
  });

  test('successfully calculate cos of a positive number', () => {
    expect(calculator.cos(60)).toBeCloseTo(0.5);
  });

  test('successfully calculate cos of a negative number', () => {
    expect(calculator.cos(-60)).toBeCloseTo(0.5);
  });

  test('successfully throws TypeError', () => {
    expect(() => {
      calculator.cos('a', 2);
    }).toThrow(TypeError);
  });
});
