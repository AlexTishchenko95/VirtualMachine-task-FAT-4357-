import intersect from './intersectTest.js';

describe('Check function intersect(arr1, arr2)', function() {
  it('intersect(arr1[1, 3, 5], arr2[2, 3, 6]) must return arrResult[3]', function() {
    const arr1 = [1, 3, 5];
    const arr2 = [2, 3, 6];
    expect(intersect(arr1, arr2)).toEqual([3]);
  });

  it('intersect(arr1[0, 3, 12, 3, 15], arr2[2, 7, 3, 15, 3, 18, 22]) must return arrResult[3, 3, 15]', function() {
    const arr1 = [0, 3, 12, 3, 15];
    const arr2 = [2, 7, 3, 15, 3, 18, 22];
    expect(intersect(arr1, arr2)).toEqual([3, 3, 15]);
  });

  it('intersect(arr1[a, b, c, d, e], arr2[x, y, a, c]) must return arrResult[a, c]', function() {
    const arr1 = ['a', 'b', 'c', 'd', 'e'];
    const arr2 = ['x', 'y', 'a', 'c'];
    expect(intersect(arr1, arr2)).toEqual(['a', 'c']);
  });

  it('intersect(arr1[a, b, 1, 3, 5, c, d, e], arr2[x, y, 1, a, c]) must return arrResult[a, 1, c]', function() {
    const arr1 = ['a', 'b', '1', '3', '5', 'c', 'd', 'e'];
    const arr2 = ['x', 'y', '1', 'a', 'c'];
    expect(intersect(arr1, arr2)).toEqual(['a', '1', 'c']);
  });
});
