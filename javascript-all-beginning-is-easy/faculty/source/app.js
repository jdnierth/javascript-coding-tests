/**
 * Immediatly called function that will calculate the faculty of a given number.
 *
 * @author: Jessica Nierth
 * @date: 2/25/2017
 */

(function() {

    "use strict";

    var facultyDom = document.getElementById('faculty'),
        resultDom = document.getElementById('result');

    _init();

    function _init() {
        _bindEvents();
        _calculateFaculty();
    }

    /**
     * Gets the number either from the faculty input field in the DOM after change event was triggered
     * or reads the value on load and triggers the calculateFaculty function.
     * @param { Object } e event handler object or null.
     * @private
     */
    function _calculateFaculty(e) {
        var number = (e) ? e.currentTarget.value : facultyDom.value;

        if (number >= 0) {
            _showResultMessage(number, _facultyRecursive(number));
        } else {
            _showResultMessage(null, null, true);
        }
    }

    /**
     * Recursive function to calculate the faculty of a given number.
     *
     * @param {Number} number the number to calculate the faculty from.
     * @returns { number } returns the faculty number of a given faculty
     * @private
     */
    function _facultyRecursive(number) {
        var facRes = 1,
            recRes;

        if (number == 0) {

            facRes = 1;

        } else if (number) {
            recRes = _facultyRecursive(number - 1);

            facRes = number * recRes;
        }

        return facRes;
    }

    /**
     * Event registration
     *
     * @private
     */
    function _bindEvents() {
        facultyDom.addEventListener('input', _calculateFaculty);
    }

    /**
     * Shows the results on the page
     *
     * @param: { Number } the number that was given to calculate the faculty of or null.
     * @param: { Number } the result (faculty of the originally given number) or null.
     * @parma: { Boolean } false if the input value was not a number
     * @private
     */
    function _showResultMessage(number, faculty, error) {
        var msg = "The input was not a valid number.";

        if(!error) {
            msg = "The faculty of " + number + ' is ' + faculty;
        }

        resultDom.innerHTML = msg;
    }
})();