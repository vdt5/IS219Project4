const addition = require('./addition');
function mean(a){
    let average = 0;
    var i = addition.sum(a);
    average = i/a.length;
    return average;
}
module.exports = mean;