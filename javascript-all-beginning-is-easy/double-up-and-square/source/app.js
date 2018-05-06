/**
 * JavaScript code to use a higher order function in order to 
 * transform tha values of an array.
 *
 * @author: Jessica Nierth
 * @date: 3/07/2017
 */

(function () {

    "use strict";

    var numbers = [1,2,3,4,5,6,7,8,9,10],
        result1Dom = document.getElementById('result-1'),
        result2Dom = document.getElementById('result-2');

     _initExercise();

    /**
     * Main entry point of this function.
     * @private
     */
    function  _initExercise() {
        var result1 = _mapToDouble(numbers),
            result2 = _mapToSquare(numbers);

        if(result1) {
            _printMethodsOnPage(result1Dom, result1);
        }
        if(result2) {
            _printMethodsOnPage(result2Dom, result2);
        }
    }


    /**
     * Uses the higher order function map in order to transform each value of the list
     * and returns a new array with the results.
     * @param {Array} numbers list of numbers
     * @returns {Array} list of numbers sorted lexicographically
     * @private
     */
    function _mapToDouble(numbers) {
        return numbers.map(_doubleUp);
    }

    function _mapToSquare(numbers) {
        return numbers.map(_square);
    }


    /**
     * @param {Number} a number 1 to be used for comparison
     * @returns {number} returns the double of the input number.
     * @private
     */
    function _doubleUp(a) {
        return a * a;
    }

    function _square(a) {
        return Math.pow(a,2);
    }
    /**
     * Prints a given result into a given dom element
     * @param {object} dom element that the result needs to be appended to.
     * @param {Array} result the result array of sorted numbers.
     * @private
     */
    function _printMethodsOnPage(dom, result) {
        dom.innerHTML = result;
    }

})();