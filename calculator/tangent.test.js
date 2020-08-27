const Calculator = require('./Calculator');

const calculator = new Calculator();

describe('Tangent method in degrees', () => {
  test('Fails calculate tan of a number', () => {
    expect(calculator.tan(45)).not.toBe(6);
  });

  test('successfully calculate tan of a positive number', () => {
    expect(calculator.tan(45)).toBeCloseTo(1);
  });

  test('successfully calculate tan of a negative number', () => {
    expect(calculator.tan(-45)).toBeCloseTo(-1);
  });

  test('successfully throws TypeError', () => {
    expect(() => {
      calculator.tan('a', 2);
    }).toThrow(TypeError);
  });
});
