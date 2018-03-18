/**
 *
 * @author: Jessica Nierth
 * @date: 2/19/2017
 */
(function() {
    "use strict";

    var limit = document.getElementById('limit'),
        randomWithDuplicates = document.getElementById('random-with-duplicates'),
        randomWithoutDuplicates = document.getElementById('random-without-duplicates'),
        randomNumberLimit = 49,
        numbersWithDuplicates = [],
        numbersWithoutDuplicates = [];

    _getRandomNumbersWithDuplicates();
    _getRandomNumbersWithOutDuplicates();
    _printResults();

    /**
     * Generates n amount of random numbers as per configuration and pushes the results
     * (including duplicates) into a result array.
     *
     * @private
     */
    function _getRandomNumbersWithDuplicates() {

        for(var i = 0; i < randomNumberLimit; i++) {

            var random = _generateRandomNumber();

            numbersWithDuplicates.push(random);
        }
    }

    /**
     * Generates n amount of random numbers as per configuration and pushes the results (without duplicates)
     * into a result array.
     *
     * @private
     */
    function _getRandomNumbersWithOutDuplicates() {
       var length = numbersWithoutDuplicates.length,
            random;


        while (length < randomNumberLimit) {
            length = numbersWithoutDuplicates.length;
            random = _generateRandomNumber();

            if(_hasBeenChosen(random)) {
                _getRandomNumbersWithOutDuplicates();
            } else {
                numbersWithoutDuplicates.push(random);
            }
        }
    }


    /**
     * Generates a random number including 1 within a range of 'randomNumberLimit' that is being
     * set within a configuration.
     *
     * @returns {number} Number returns a random number between 1 and 'randomNumberLimit'
     * @private
     */
    function _generateRandomNumber() {
        var random = (Math.random() * randomNumberLimit) + 1;

        random = Math.floor(random);

        return random;
    }

    /**
     * Checks if a given number is already within the result array 'numbersWithoutDuplicates'.
     *
     * @param number { Number } the number to be checked if already existing in result array 'numbersWithoutDuplicates'.
     * @returns {boolean} returns true if the number already exists within result array 'numbersWithoutDuplicates' else false.
     * @private
     */
    function _hasBeenChosen(number) {
        for(var i = 0, numbersWithoutDuplicatesLength = numbersWithoutDuplicates.length; i < numbersWithoutDuplicatesLength; i++) {
            if(number === numbersWithoutDuplicates[i]) {
                return true;
            }
        }

        return false;
    }

    /**
     * Updates the view with the results.
     *
     * @private
     */
    function _printResults() {
        limit.innerHTML = randomNumberLimit;
        randomWithDuplicates.innerHTML = numbersWithDuplicates;
        randomWithoutDuplicates.innerHTML = numbersWithoutDuplicates;
    }



})();