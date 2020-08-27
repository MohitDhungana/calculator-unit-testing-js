const Calculator = require('./Calculator');

const calculator = new Calculator();

describe('Sine method in degrees', () => {
  test('Fails calculate sin of a number', () => {
    expect(calculator.sin(45)).not.toBe(6);
  });

  test('successfully calculate sin of a positive number', () => {
    expect(calculator.sin(30)).toBeCloseTo(0.5);
  });

  test('successfully calculate sin of a negative number', () => {
    expect(calculator.sin(-30)).toBeCloseTo(-0.5);
  });

  test('successfully throws TypeError', () => {
    expect(() => {
      calculator.sin('a', 2);
    }).toThrow(TypeError);
  });
});
