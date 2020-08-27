const Calculator = require('./Calculator');

const calculator = new Calculator();

// SquareRoot test
describe('SquareRoot method', () => {
  test('Fails to squareRoot a number', () => {
    expect(calculator.squareRoot(25)).not.toBe(2);
  });

  test('successfully squareRoots a positive number', () => {
    expect(calculator.squareRoot(100)).toBe(10);
  });

  test('successfully handles squareRoot of negative number', () => {
    expect(() => {
      calculator.squareRoot(-100);
    }).toThrow(Error);
  });

  test('successfully throws TypeError', () => {
    expect(() => {
      calculator.squareRoot('a', 2);
    }).toThrow(TypeError);
  });
});
