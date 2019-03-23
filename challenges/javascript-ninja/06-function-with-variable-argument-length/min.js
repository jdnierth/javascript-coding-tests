/**
 * Implement two functions, one called max that will accept an array of numbers and returns
 * the largest number. The other function should be called min that will accept an array
 * of numbers and returns the smallest number.
 *
 * @author: Jessica Nierth
 * @date: 23.03.2019
 */
var myMinAndMax = (function () {
    /**
     * Returns the max number of a given array of numbers.
     *
     * @param {Array} numbers of which the max should be returned.
     * @returns {number} the max number.
     */
    function max(numbers) {
        // TODO: handle case of empty array.
        return Math.max.apply(Math, numbers);
    }

    function min(numbers) {
        // TODO: handle case of empty array.
        return Math.min.apply(Math, numbers);
    }

})();
