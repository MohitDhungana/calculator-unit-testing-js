const Calculator = require('./Calculator');

const calculator = new Calculator();

// Addition test
describe('Addition method', () => {
  test('successfully adds two negative numbers', () => {
    expect(calculator.add(-1, -2)).toBe(-3);
  });

  test('successfully adds two float numbers', () => {
    expect(calculator.add(0.1, 0.2)).toBeCloseTo(0.3);
  });

  test('successfully throws TypeError', () => {
    expect(() => {
      calculator.add('a', 2);
    }).toThrow(TypeError);
  });
});

// Subtraction test
describe('Subtract method', () => {
  test('successfully subtract two float numbers', () => {
    expect(calculator.subtract(0.5, 0.4)).toBeCloseTo(0.1);
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

// Multiply test
describe('Multiply method', () => {
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

// Divide test
describe('Divide method', () => {
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

// Square test
describe('Square method', () => {
  test('successfully square a negative number', () => {
    expect(calculator.square(-2)).toBe(4);
  });

  test('successfully throws TypeError', () => {
    expect(() => {
      calculator.square('a', 2);
    }).toThrow(TypeError);
  });
});

// SquareRoot test
describe('SquareRoot method', () => {
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

describe('Sine method in degrees', () => {
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

describe('Cosine method in degrees', () => {
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

describe('Tangent method in degrees', () => {
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
