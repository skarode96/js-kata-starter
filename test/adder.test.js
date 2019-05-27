import add from '../src/adder';

describe('adder tests', function () {
  it('should return addition of two numbers', () => {
    expect(add(1,1)).toBe(2);
  });
});
