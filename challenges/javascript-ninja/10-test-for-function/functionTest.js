/**
 * Add several functions that will test if a given parameter is of type function
 *
 * @author: Jessica Nierth
 * @date: 24.03.2019
 */
var functionTests = (function functionTests() {

    /**
     * Checks whether a given parameter is a function.
     * Works in most cases. Edge cases:
     * - FF: if typeof will e used on a HTML element of type object this will return 'function'
     * - IE: if you try to check a function which belongs to another window e.g. iframe, 'unknown' will be returned
     * - Safari: Returns 'function' for Dom-NodeLists: typeof document.body.childNodes == "function"
     * @param {string} fn the name of the function to be checked for being a function
     * @returns {boolean} true if it is a function else false.
     */
    function isFunctionA(fn) {
        return (typeof fn == "function");
    }

    /**
     * Checks whether a given parameter is a function.
     * Edge cases:
     * - IE returns 'object' for all DOM nodes.
     *
     * @param {string} fn the name of the function to be checked for being a function
     * @returns {boolean} true if it is a function else false.
     */
    function isFunctionB(fn){
        return Object.prototype.toString.call(fn) === "[object Function]";
    }
})();