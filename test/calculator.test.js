const assert = require('assert');
const calculator = require('../src/calculator');

describe('Calculator Test Suite ', function () {
  
  before(async function () {
    console.log('Executing before to prepare the test environment');
    console.log('Preparing the database connection');
    console.log('Querying the initial data for the tests');
  });

  after(async function () {
    console.log('Restoring the environment after running the tests');
  });


  describe('#Calculator - Sum', function () {
    const tests = [
      { args: [1, 5], expected: 6 },
      { args: [2, 6], expected: 8 },
      { args: [1, 2, 3, 4], expected: 10 },
      { args: [3, 4, 6, 7], expected: 20 },
      { args: [10, 4, 5, 1, 7, 3], expected: 30 }
    ];

    tests.forEach(({ args, expected }) => {
      it.only (`correctly adds ${args.length} args`, function () {
        const res = calculator.sum(args);
        assert.strictEqual(res, expected);
      });
    });
  });
  

  describe('#Calculator - Add', function () {
    it('Should return the sum of two numbers', function () {
      const result = calculator.add(2,3);
      const expected = 5;
      assert.strictEqual( result, expected );
    });
  });

  describe('#Calculator - Subtract', function () {
    it('Should return the difference between two numbers', function () {
      const result = calculator.subtract(15,8);
      const expected = 7;
      assert.strictEqual(result, expected);
    });
  });

  describe('#Calculator - Subtract', function () {
    it('Should fail to calculate the difference between two', function() {
      const result = calculator.subtract(10,7);
      const expected = 3;
      assert.notStrictEqual( result, expected );
    });
  });

  describe('#Calculator - Multiply', function () {
    it('Should return the value of multiplying two numbers', function() {
      const result = calculator.multiply(2,7);
      const expected = 14;
      assert.strictEqual(result, expected);
    });
  });

  describe('#Calculator - Share', function () {
    it('Should return the value of dividing two numbers', function() {
      const result = calculator.share(21,3);
      const expected = 7;
      assert.strictEqual(result, expected);
    });
  });

  describe('#Calculator - Share', function () {
    it('Should throw an error if divisor equals 0', function () {
      assert.throws(() => calculator.share(2, 0));
    });
  });

});