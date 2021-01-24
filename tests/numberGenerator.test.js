const numberGenerator = require('../numberGenerator');

test('generate random number without seed', () => {
    let min = 1;
    let max = 100;
    let randNum = new numberGenerator(min, max);
    let randomNumber = randNum.GetRandomInt(min, max);

    expect(randomNumber).toBeGreaterThan(1);
    expect(randomNumber).toBeLessThan(100);
});
test('generate random number with seed', () => {
    let min = 1;
    let max = 100;
    let seed = 20;
    let rand = new numberGenerator(min,max);
    let randomNumber = rand.GetRandomIntWithSeed(min, max, seed);

    expect(randomNumber).toBeGreaterThan(1);
    expect(randomNumber).toBeLessThan(100);
});