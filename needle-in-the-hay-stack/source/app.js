/**
 * Immediatly called function that will checke whether or not a given
 * value is a leap year or not.
 *
 * @author: Jessica Nierth
 * @date: 2/24/2017
 */

(function() {

    "use strict";

    var copyDom = document.getElementById('copy'),
        needlePositionsDom = document.getElementById('needlePositions'),
        needlesDom = document.getElementById('needles');

    _init();

    function _init() {
        var copy = copyDom.innerHTML,
            newCopy,
            numberOfNeedles,
            allNeedlePos;

        newCopy = _markNeedle(copy);

        allNeedlePos = _findNeedlesRecursive(copy, 'needle', 0, 0);

        numberOfNeedles = _getNumberOfNeedles(allNeedlePos);

        _showResultMessage(newCopy, allNeedlePos, numberOfNeedles);

    }

    /**
     * Recursive function to find the
     * @param { String } copy in which to find everything.
     * @param { String } needle the name to search for in the copy
     * @param { Number } pos the index from which to search off from.
     * @param  { Number } iter the number of iteration.
     * @returns { Array } an empty array if nothing found otherwise array containing the indexes of found needles.
     * @private
     */
    function _findNeedlesRecursive(copy, needle, pos, iter) {

        var newPos = _findNeedle(copy, needle, pos),
            posArray = [], otherPos;

        if (newPos != -1) {

            console.log("\t".repeat(iter), 'Starting at: ', pos, ' Interim result at: ', newPos, ', continue searching ...');
            otherPos = _findNeedlesRecursive(copy, needle, newPos + 1, iter + 1);

            console.log("\t".repeat(iter), 'Interim result at: ', newPos, ', further results: ', otherPos);
            posArray.push(newPos);
            posArray = posArray.concat(otherPos);

        } else {

            console.log("\t".repeat(iter), 'End reached, return: ', posArray)
        }

        return posArray;

    }

    /**
     * Highlights the needle work in a given copy.
     *
     * @param { String } copy in which to find / mark the needle.
     * @returns { String } the new copy containing highlighted found needles.
     * @private
     */
    function _markNeedle(copy) {
        return copy.replace(/needle/g, '<span style="background-color:yellow;">needle</span>');
    }

    /**
     * Find a needle
     * @param { String } copy in which to find the needle
     * @param { String } needle to search for in the copy.
     * @param { Number } index from wich to search from in the copy for the needle.
     * @returns { Number } returns -1 if needle wasn't found else the position of the found needles.
     *
     * @private
     */
    function _findNeedle(copy, needle, index) {
        return copy.indexOf(needle, index);
    }

    /**
     * Returns how many needles have been found in the haystack.
     *
     * @param { Array } needleIndexes
     * @returns {number}
     * @private
     */
    function _getNumberOfNeedles(needleIndexes) {
        return needleIndexes.length;
    }

    /**
     * Shows the results on the page
     *
     * @private
     */
    function _showResultMessage(highlighted, needlePositions, numberOfNeedles) {
        copyDom.innerHTML = highlighted;
        needlePositionsDom.innerHTML = needlePositions;
        needlesDom.innerHTML = numberOfNeedles;

    }
})();