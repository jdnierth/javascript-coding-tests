/**
 * Immediatly called function that will checke whether or not a given
 * value is a leap year or not.
 *
 * @author: Jessica Nierth
 * @date: 2/24/2017
 */

(function() {
    "use strict";

    var givenNameDom = document.querySelector('pre'),
        firstNameDom = document.getElementById('firstname'),
        lastNameDom = document.getElementById('lastname');

    _init();

    /**
     * Checks the value on load and initializes.
     *
     * @private
     */
    function _init() {
        var name = givenNameDom.innerHTML,
            names;
        
        names = _splitAtSpace(name);
        names = _removeSpaces(names);

        console.log(names);
        _showResultMessage(names[0], names[1]);
        
    }

    /**
     * Splits a given string at spaces and returns an array of results
     *
     * @param { String } copy string containing spaces.
     * @returns { Array } results original string split at spaces and results array containing split stings.
     * @private
     */
    function _splitAtSpace(copy) {
        return copy.split(' ');
    }

    /**
     * Removes spaces from every item within a given array of strings
     *
     * @param { Array } copyArray consisting of strings.
     * @returns {Array} returns an array of strings where each item doesn't have a spare space anymore.
     * @private
     */
    function _removeSpaces(copyArray) {
        var results = [];

        for(var i = 0, len = copyArray.length; i < len; i++) {
            var trimmed = copyArray[i].trim();

            // Only put results into array if they are not empty strings
            if(trimmed) {
                results.push(trimmed);
            }

        }

        return results;
    }

    /**
     * Shows the results on the page
     *
     * @private
     */
    function _showResultMessage(firstname, lastname) {

        firstNameDom.innerHTML = firstname;
        lastNameDom.innerHTML = lastname;

    }
})();