// console.clear();
class Calculator {
  add(num1, num2) {
    if (this.isValid(num1, num2)) return num1 + num2;
  }

  subtract(num1, num2) {
    if (this.isValid(num1, num2)) return num1 - num2;
  }

  multiply(num1, num2) {
    if (this.isValid(num1, num2)) return num1 * num2;
  }

  divide(num1, num2) {
    if (this.isValid(num1, num2)) {
      if (num1 === 0 && num2 === 0) {
        throw new Error('Cannot perform Zero divide by Zero operation');
      } else if (num2 === 0) {
        throw new Error('Cannot divide by zero');
      }
      return num1 / num2;
    }
  }

  square(number) {
    if (this.isValid(number)) return number * number;
  }

  squareRoot(number) {
    if (this.isValid(number)) {
      if (number < 0) {
        throw new Error('Cannot calculate square root of negative numbers');
      }
      return Math.sqrt(number);
    }
  }

  sin(number) {
    if (this.isValid(number)) return Math.sin((number * Math.PI) / 180);
  }

  cos(number) {
    if (this.isValid(number)) return Math.cos((number * Math.PI) / 180);
  }

  tan(number) {
    return this.sin(number) / this.cos(number);
  }

  isValid(num1, num2 = 0) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
      throw new TypeError('Please enter input of type: Number');
    }

    return true;
  }
}

// try {
//   console.log('program starting');

//   const calc = new Calculator();
//   // console.log(calc.add(2, 8));
//   // console.log(calc.subtract(3,1);
//   // console.log(calc.multiply(2, 0));
//   // console.log(calc.divide(0, 0));
//   // console.log(calc.square(5));
//   // console.log(calc.squareRoot(81));
//   // console.log(calc.sin(30));
//   // console.log(calc.cos(25));
//   // console.log(calc.tan(45));
//   //   console.log(calc.isValid(25, 'a', 32));
// } catch (error) {
// console.log(error.name + ': ' + error.message);
// // console.log(error);
// } finally {
//   console.log('program terminated');
// }

module.exports = Calculator;
