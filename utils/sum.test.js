import sum from './sumTest.js';

describe('Check function sum(a, b)', function() {
  it('sum(2, 5) must return 7', function() {
    expect(sum(2, 5)).toBe(7);
  });

  it('sum(0, 1) must return 1', function() {
    expect(sum(0, 1)).toBe(1);
  });

  it('sum(756129, 492384) must return 1248513', function() {
    expect(sum(756129, 492384)).toBe(1248513);
  });

  it('sum(-245, 169) must return -76', function() {
    expect(sum(-245, 169)).toBe(-76);
  });
});
