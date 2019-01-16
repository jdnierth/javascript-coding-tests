/**
 * Immediatly called function that will checke whether or not a given
 * value is a leap year or not.
 *
 * @author: Jessica Nierth
 * @date: 2/24/2017
 */

(function getLeapYear() {
    "use strict";

    var yearDom = document.getElementById('year'),
        domResult = document.getElementById('result');

    _init();

    /**
     * Checks the value on load and initializes.
     *
     * @private
     */
    function _init() {
        _checkYear();
        _bindEvents();
    }


    /**
     * Triggered every time the input is changed. Triggers all corresponding events such
     * as checking the value then printing it on the screen.
     *
     * @param { Object } e event object triggered every time the input is changed.
     * @private
     */
    function _checkYear(e) {
        var year = e && e.currentTarget.value || yearDom.value;

        if (year.length === 4) {

            var isLeapYear = _isYearALeapYear(year);

            _showResultMessage(isLeapYear, year);

        } else {

            _showResultMessage(null, year, true);
        }
    }

    /**
     * Checks whether or not a given yeaer is a leap year.
     *
     * @param { Number } year in the format YYYY.
     *
     * @private
     */
    function _isYearALeapYear(year) {
        return !!((year % 4 === 0) && (year % 100 !== 0));

    }

    /**
     * Shows the results on the page
     *
     * @param { Boolean } isLeapYear if true will show the corresponding message for the leap year. Else shows the 'not a leap year' message.
     * @param { Number } year The year in the format YYYY.
     * @param { Boolean } error true if the input wasn't a valid input.
     * @private
     */
    function _showResultMessage(isLeapYear, year, error) {
        var msg = `The year ${year} is a leap year`;

        if(error) {
            msg = `${year} is not a valid input for a year.`

        } else if (!isLeapYear) {
            msg = `The year ${year} is not a leap year`;
        }

        domResult.innerHTML = msg;
    }

    /**
     * Event binding declarations.
     *
     * @private
     */
    function _bindEvents() {
        yearDom.addEventListener('input', _checkYear);
    }
})();