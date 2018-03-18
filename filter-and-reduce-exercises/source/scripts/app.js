/**
 * JavaScript code for exercise 49 of the book 'JavaScript all beginning is easy'
 * Requires knowledge about sort, map, filter, reduce, etc.
 *
 * @author: Jessica Nierth
 * @date: 3/07/2017
 */

(function () {

    "use strict";

    var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        copy = "Hi this is a short text",
        names = [" Heribert", "Friedlinde", "Tusnelda", "Oswine", "Ladislaus"],
        result1Dom = document.getElementById('result-1');

    _initExercise();

    /**
     * Main entry point of this function.
     * @private
     */
    function _initExercise() {

        var odds = _getOdds(numbers);
        var lowest = _getLowest(numbers);
        var sum = _getSumOfNumbers(numbers);
        var product = _getProductOfNumbers(numbers);
        var longestWord = _getLongestWordLength(copy);
        var longestWordLength = _getWordLength(longestWord);
        var averageWordLength = _getAverageWordLength(copy);
        var sortBy3rdLetter = _sortByThirdLetter(names);
        var moreThan8Words = _isWordWithMoreThan8LettersAvailable(names);
        var everyWord = _areAllWordsLongerThan8Letters(names);

        // Prints the result list on screen
        _printMethodsOnPage('result-1', odds);
        _printMethodsOnPage('result-2', lowest);
        _printMethodsOnPage('result-3', sum);
        _printMethodsOnPage('result-4', product);
        _printMethodsOnPage('result-5', longestWord);
        _printMethodsOnPage('result-6', longestWordLength);
        _printMethodsOnPage('result-7', averageWordLength);
        _printMethodsOnPage('result-8', sortBy3rdLetter);
        _printMethodsOnPage('result-9', moreThan8Words);
        _printMethodsOnPage('result-10', everyWord);
    }

    /**
     * Filters all odd numbers and returns a new array with the result.
     *
     * @param { Array } numbers that need to be filtered for odd numbers
     * @returns {Array} empty array if no odd numbers else returns an array containing odd numbers.
     * @private
     */
    function _getOdds(numbers) {
        return numbers.filter(_isOdd);
    }

    /**
     * Returns true if a number is odd else it returns false.
     *
     * @param {Number} number that needs to be checked for oddness.
     * @returns {boolean} returns true if the number is odd else false.
     * @private
     */
    function _isOdd(number) {
        return (number % 2 !== 0);
    }

    /**
     * Returns the lowest number of a given list of numbers. Or returns 'Array is empty' if no numbers were given.
     *
     * @param {Array} numbers to be searched for the lowest number.
     * @returns {String | Array} Returns a text message if input array was empty or the lowest number of the input array.
     * @private
     */
    function _getLowest(numbers) {

        var result,
            sortedNumbers;

        if (numbers.length > 0) {

            sortedNumbers = numbers.sort(_sortNumbersAscendingly);
            result = sortedNumbers[0];

        } else {

            result = 'Array is empty';
        }

        return result;
    }

    /**
     * Sorts an array of numbers by number
     * @param {Number} a comparator 1
     * @param {Number} b comparator 2
     * @returns {number} returns -1 if a is smaller than b, returns +1 if a is bigger than b and 0 if a and b are equal.
     * @private
     */
    function _sortNumbersAscendingly(a, b) {
        var res = 0;

        if (a < b) {
            res = -1;
        } else {
            res = 1;
        }

        return res;
    }

    /**
     * Returns the sum of an array of numbers.
     * @param {Array} numbers to be summed up.
     * @returns {Number} returns the sum of all numbers in the given array.
     * @private
     */
    function _getSumOfNumbers(numbers) {
        return numbers.reduce(_add);
    }

    /**
     * Adds 2 numbers.
     * @param {Number} a addend 1
     * @param {Number} b addend 2
     * @returns {Number} the sum of a and b
     * @private
     */
    function _add(a, b) {
        return a + b;
    }

    /**
     * Returns the product of all items within a given array of numbers.
     * @param {Array} numbers that should be multiplied to produce an overall product.
     * @returns {Number} the product of all items of the provided numbers array.
     * @private
     */
    function _getProductOfNumbers(numbers) {
        return numbers.reduce(_product);
    }

    /**
     * Multiplies 2 multipliers a and b.
     * @param {Number} a multiplier 1
     * @param {Number} b multiplier 2
     * @returns {number} the product of a and b.
     * @private
     */
    function _product(a, b) {
        return a * b;
    }

    /**
     * Returns the length of a string
     * @param {String} copy of which the length is requested
     * @returns {Number} the length of the given copy.
     * @private
     */
    function _getLongestWordLength(copy) {
        var words = copy.split(' '),
            longestWord = words.reduce(_returnLongerWord);

        return longestWord;
    }

    /**
     * Given 2 words, returns the longer word.
     * @param {String} a word 1
     * @param {String} b word 2
     * @returns {String} the word that contains more characters.
     * @private
     */
    function _returnLongerWord(a, b) {
        return (a.length > b.length) ? a : b;
    }

    /**
     * Returns the average length of words within a given sentence.
     * @param {String} copy sentence
     * @returns {number} the average length of a word within the given sentence.
     * @private
     */
    function _getAverageWordLength(copy) {
        var words = _getWords(copy),
            arrayOfWordLength = words.map(_getWordLength),
            totalCharacterLength = arrayOfWordLength.reduce(_add),
            averageLength = totalCharacterLength / words.length;

        return averageLength;
    }

    function _sortByThirdLetter(words) {
        return words.sort(_sortBy3rdLetter);
    }

    /**
     * Sorts 2 words by their 3rd letter.
     *
     * @param {String} a 1st word
     * @param {String} b 2nd word
     * @returns {boolean} returns true if a's 3rd letter comes after the 3rd letter of the 2nd word otherwise false.
     * @private
     */
    function _sortBy3rdLetter(a, b) {
        a = a.trim();
        b = b.trim();

        return a.charAt(2) > b.charAt(2);
    }

    /**
     * Returns true if one word will be longer than 8 letters in a given array of words.
     * @param {Array} words that should be checked for whether there is at least one word that has 8 letters.
     * @returns {boolean} returns true if there is at least one word that has more than 8 letters.
     * @private
     */
    function _isWordWithMoreThan8LettersAvailable(words) {
        return words.some(_isLongerThan8Letters);
    }

    /**
     * Returns true if the given word has more than 8 letters else it returns false.
     * @param {String} word that is to be checked for whether or not it'll be longer than 8 letters.
     * @returns {boolean} returns true if the given word is longer than 8 letters otherwise it returns false.
     * @private
     */
    function _isLongerThan8Letters(word) {
        return word.length > 8;
    }

    /**
     * Given a sentence, this function returns an array of words.
     * @param {String} copy of which all words need to be returned from.
     * @returns {Array} list of words found in the given copy (sentence)
     * @private
     */
    function _getWords(copy) {
        return copy.split(" ");
    }

    /**
     * Returns the length of a word.
     *
     * @param {String} word of which the length is requested.
     * @returns {Number} the length of a given word
     * @private
     */
    function _getWordLength(word) {
        return word.length;
    }

    /**
     * Checks if all words within an array of words have more than x letters.
     *
     * @param {Array} words to check for whether every single word has more than 8 letters.
     * @returns {boolean} true if all words within the given array are longer than 8 letters else returns false.
     * @private
     */
    function _areAllWordsLongerThan8Letters(words) {

        return words.every(_isLongerThan8Letters);
    }

    /**
     * Prints a given result into a given dom element
     * @param {String} domID id of the dom element that the result needs to be appended to.
     * @param {object} result the result array of sorted products.
     * @private
     */
    function _printMethodsOnPage(domID, result) {

        var dom = document.getElementById(domID);

        if (dom) {
            dom.innerHTML = result;
        }
    }

})();