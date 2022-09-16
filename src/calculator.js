class Calculator {

  static add = (x, y) => {
    return x + y;
  }

  static subtract = (x, y) => {
    return x - y;
  }

  static multiply = (x, y) => {
    return x * y;
  }

  static share = (x, y) => {
    if (y === 0) {
      throw new Error('Cannot divide by 0');
    }
    return x / y;
  }

  static sum(args) {
    return args.reduce((prev, curr) => prev + curr, 0);
  }

  static pow(x, y) {
    return Math.pow(x, y);
  }
}

module.exports = Calculator;