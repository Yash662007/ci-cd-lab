const { add, subtract, multiply, divide } = require('../src/calculator');

test('adds 2 + 3 to equal 5', () => expect(add(2, 3)).toBe(5));
test('subtracts 10 - 4 to equal 6', () => expect(subtract(10, 4)).toBe(6));
test('multiplies 3 * 4 to equal 12', () => expect(multiply(3, 4)).toBe(12));
test('divides 10 / 2 to equal 5', () => expect(divide(10, 2)).toBe(5));
test('throws on division by zero', () => expect(() => divide(5, 0)).toThrow('Division by zero'));
