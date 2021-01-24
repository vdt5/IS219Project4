const Calculator = require('./Calculator');
class Statistics extends Calculator {

    Variance(a,b) {
        return this.Difference(a,b);
    }
    Mean(values) {
        let sum = this.Add(values);
        let numValues = values.length;
        return this.Divide(sum,numValues);
    }

    Median(nums) {
        var median = 0, count = numbers.length;
        nums.sort();

        if (count % 2 === 0) {  // is even
            median = (nums[count / 2 - 1] + nums[count / 2]) / 2;
        } else { // is odd
            median = numbers[(count - 1) / 2];
        }
        return median;
    }

    Mode(numbers) {
        var modes = [], count = [], i, number, maxIndex = 0;

        for (i = 0; i < numbers.length; i += 1) {
            number = numbers[i];
            count[number] = (count[number] || 0) + 1;
            if (count[number] > maxIndex) {
                maxIndex = count[number];
            }
        }
        for (i in count)
            if (count.hasOwnProperty(i)) {
                if (count[i] === maxIndex) {
                    modes.push(Number(i));
                }
            }

        return modes;
    }
    standardDeviation(values){
        var avg = average(values);

        var squareDiffs = values.map(function(value){
            var diff = value - avg;
            var sqrDiff = diff * diff;
            return sqrDiff;
        });

        var avgSquareDiff = average(squareDiffs);

        var stdDev = Math.sqrt(avgSquareDiff);
        return stdDev;
    }

    ZScore(z) {

        if (z < -6.5) {
            return 0.0;
        }
        if (z > 6.5) {
            return 1.0;
        }
        var factK = 1;
        var sum = 0;
        var term = 1;
        var k = 0;
        var loopStop = Math.exp(-23);

        while(Math.abs(term) > loopStop) {
            term = .3989422804 * Math.pow(-1,k) * Math.pow(z,k) / (2 * k + 1) / Math.pow(2,k) * Math.pow(z,k+1) / factK;
            sum += term;
            k++;
            factK *= k;
        }

        sum += 0.5;

        return sum;
    }

}
module.exports = Statistics;