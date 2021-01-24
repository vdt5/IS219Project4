class numberGenerator  {

    constructor(min, max) {
        this.max = max;
        this.min = min;
    }

    GetRandomInt(min, max) {
        min = Math.ceil(this.min);
        max = Math.floor(this.max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    GetRandomIntWithSeed(min, max, seed) {
        Math.seed = seed;

        var randomNum = Math.sin(seed++);
        return this.min + randomNum * (this.max - this.min);
    }
}
module.exports = numberGenerator;