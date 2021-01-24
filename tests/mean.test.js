const mean = require('../mean');

test('finds the average of numbers between 1 and 5', () => {
    expect(mean([1,2,3,4,5])).toBe(3);
});