/**
 * Simple Array sum funtion main entry point
 *
 * @author: Jessica Nierth
 * @date: 3/19/2017
 */

/**
 * Main entry point for the Simple Array Sum puzzle.
 * @constructor
 */
var SimpleArraySum = function() {

    var result = document.getElementById('result');

    var numbersAsStrings = this.getInput(),
        sum = this.calcSum(numbersAsStrings);

    this.printResults(result, sum);
};

/**
 * Prints the result in to the DOM
 * @param {object} result the dom element where the result should be printed into.
 * @param {Number | *} sum either the sum of all inputs or none.
 * @private
 */
SimpleArraySum.prototype.printResults = function (result, sum) {
    result.innerHTML = sum;
};

/**
 * Grabs the numbers from the DOM and converts them into an array of numbers.
 * @private
 */
SimpleArraySum.prototype.getInput = function () {
    var input = document.getElementById('input'),
        inputs = input.innerHTML,
        numbers = inputs.split(' ');
    return numbers;
};


/**
 * Takes an array of numbers and sums up all its items and returns the sum.
 * @param {array} numbers array of numbers
 * @returns {number} returns the sum of all numbers
 */
SimpleArraySum.prototype.calcSum = function(numbers){
    return numbers.reduce(this.sum,0);
};

/**
 *
 * @param {Number} acc previous value
 * @param {Number} currentValue current value of the array that is being looped through by the callee.
 * @returns {Number} the sum of the previous value and the current value or 0
 * @private
 */
SimpleArraySum.prototype.sum = function (acc, currentValue) {
    var currentValueNumber = parseInt(currentValue);

    if(!Number.isInteger(currentValueNumber)) {
        throw new Error("Current value '" + currentValue + "' is not a number");
    }

    return acc + currentValueNumber;
};

new SimpleArraySum();
