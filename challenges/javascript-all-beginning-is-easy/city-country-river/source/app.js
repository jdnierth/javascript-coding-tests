/**
 * JavaScript code to sort a list of strings by their length.
 * Exercise 44 of the book 'JavaScript all beginning is easy'.
 *
 * @author: Jessica Nierth
 * @date: 3/07/2017
 */

(function () {

    "use strict";

    var city = [
            "Barcelona",
            "Basel",
            "Belgrade",
            "Berlin",
            "Budapest"
        ],
        country = [
            "Belgium",
            "Bulgaria",
            "Brazil",
            "Bolivia",
            "Bosnia and Herzegovina"
        ],
        river = [
            "Bode",
            "Brahmaputra",
            "Beuvron",
            "Black River",
            "Belaja"
        ],
        result1Dom = document.getElementById('result-1'),
        result2Dom = document.getElementById('result-2'),
        result3Dom = document.getElementById('result-3');

     _initSortExercise();

    /**
     * Main entry point of this function.
     * @private
     */
    function  _initSortExercise() {
        var result1 = _sort(city),
            result2 = _sort(country),
            result3 = _sort(river);

        if(result1) {
            _printMethodsOnPage(result1Dom, result1);
        }

        if(result2) {
            _printMethodsOnPage(result2Dom, result2);
        }

        if(result3) {
            _printMethodsOnPage(result3Dom, result3);
        }
    }


    /**
     * Calls the native JavaScript sort function and returns the result.
     * @param {Array} list list of numbers
     * @returns {Array} list of numbers sorted lexicographically
     * @private
     */
    function _sort(list) {
        return list.sort(_sortByLength);
    }


    /**
     * @param {Number} a number 1 to be used for comparison
     * @param {Number} b number 2 to be used for comparison
     * @returns {number} returns 0 if a and b are equal, returns < 0 if a is smaller than b, returns > 0 if a is bigger than b.
     * @private
     */
    function _sortByLength(a,b) {
        var r = 0;

        if(a.length > b.length) {
            r = -1;
        } else {
            r = 1;
        }

        return r;
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