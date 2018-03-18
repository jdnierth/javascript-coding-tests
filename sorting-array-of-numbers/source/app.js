/**
 * JavaScript code to change how the JavaSript function
 * 'sort' works
 *
 * @author: Jessica Nierth
 * @date: 3/05/2017
 */

(function () {

    "use strict";

    var numbersArray = [16,10,2,12,1],
        numbersArray2 = [16,10,2,12,1],
        result1Dom = document.getElementById('result-1'),
        result2Dom = document.getElementById('result-2');

     _initSortExercise();

    /**
     * Main entry point of this function.
     * @private
     */
    function  _initSortExercise() {
        var result1 = _nativeSort(numbersArray),
            result2 = _sortNumersAscending(numbersArray2);

        if(result1) {
            _printMethodsOnPage(result1Dom, result1);
        }

        if(result2) {
            _printMethodsOnPage(result2Dom, result2);
        }
    }

    /**
     * Calls the native JavaScript sort function and returns the result.
     * @param {Array} numbers list of numbers
     * @returns {Array} list of numbers sorted lexicographically
     * @private
     */
    function _nativeSort(numbers) {
        return numbers.sort();
    }


    /**
     * Higher order function that sorts numbers ascendingly.
     *
     * @param {Number} a number 1 to be used for comparison
     * @param {Number} b number 2 to be used for comparison
     * @returns {number} returns 0 if a and b are equal, returns < 0 if a is smaller than b, returns > 0 if a is bigger than b.
     * @private
     */
    function _sortAscending(a,b) {
        return a - b;
    }

    /**
     * Higher order function. Uses the native JavaScript sort function and changes its sorting algorithm to
     * return numberes in an ascending order.
     * @param {Array} numbers list of numbers that need to be sorted.
     * @returns { Array } list of numbers that have been sorted ascendingly.
     * @private
     */
    function _sortNumersAscending(numbers) {
        return numbers.sort(_sortAscending);
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