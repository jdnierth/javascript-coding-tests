/**
 * JavaScript code to use a higher order function in order to
 * filter a list of products
 *
 * @author: Jessica Nierth
 * @date: 3/07/2017
 */

(function () {

    "use strict";

    var products = [
            " 3Doodler 3D Printing Pen",
            "Game of Thrones Wax Seal Coasters",
            "10th Doctor Sonic Screwdriver Exclusive Programmable TV Remote",
            "Electronic Butterfly in a Jar",
            "Aquafarm: Aquaponics Fish Garden",
            "Cassette Adapter Bluetooth",
            "Marvel Comics Lightweight Infinity Scarf",
            "Ollie - The App Controlled Robot",
            "Sound Splash Bluetooth Waterproof Shower Speaker",
            "PowerCube",
            "Backpack of Holding",
            "Retro Duo Portable NES/ SNES Game System",
            "Universal Gadget Wrist Charger",
            "USB Squirming Tentacle",
            "USB Fishquarium",
            "Space Bar Keyboard Organizer & USB Hub Pop",
            "USB Pet Rock",
            "Powerstation 5- E. Maximus Chargus",
            "Dual Heated Travel Mug",
            "Crosley Collegiate Portable USB Turntable",
            "Meh Hoodie",
            "Magnetic Accelerator Cannon",
            "8-Bit Legendary Hero Heat-Change Mug"
        ],
        result1Dom = document.getElementById('result-1');

    _initExercise();

    /**
     * Main entry point of this function.
     * @private
     */
    function _initExercise() {
        var result = {};

        // Step 1: Get a list of characters of products that exist
        var chars = _getListOfExistingProductChars(products);

        // Step 2: Get a list of characters that the products start with excluding any duplicates.
        chars = _filterDuplicates(chars);

        // Step 3: Filter products by starting character
        for(var i = 0, len =  chars.length; i < len;i++ ) {
            var x = _filterProductsByStartingCharacter(chars[i]);

            console.log('RES: ', x);
            result[chars[i]] = x;
        }

        // Prints the result list on screen
        _printMethodsOnPage(result1Dom, result);
    }

    /**
     * Retrieves and array of characters that a list of products start with (including duplicates)
     * @param {Array} products list of products
     * @returns {Array} list of product names starting characters (including duplicates)
     * @private
     */
    function _getListOfExistingProductChars(products) {
        return products.map(_getStartingChar);
    }


    /**
     * Returns the first character of a given product name
     *
     * @param {String} product name of which the first character is searched for.
     * @returns {string} the first character of a given product.
     * @private
     */
    function _getStartingChar(product) {

        // Remove all empty spaces
        product = product.trim();

        return product.charAt(0);

    }

    /**
     * Filters an array of items and removes the duplicates by first sorting it alphabetically then
     * removing the duplicates.
     *
     * @param {Array} list of characters
     * @returns {Array} alphabetically ordered list with unique characters
     * @private
     */
    function _filterDuplicates(list) {
        return list.sort().filter(function (item, pos, ary) {
            return !pos || item != ary[pos - 1];
        });
    }

    function _filterProductsByStartingCharacter(letter) {
        console.log('LETTER: ', letter);
        return products.filter(function(product) {
            return !!_startsWith(letter,product);
        });
    }

    /**
     * Checks wether a given item starts with a given letter.
     *
     * @param {String} letter a character that will be checked for whether the string starts with it or not.
     * @param {String} item to be check if it starts with a given letter.
     * @returns {boolean} true if the the item starts with a given letter, else returns false.
     * @private
     */
    function _startsWith(letter, item) {
        item = item.trim();

        return item.charAt(0) === letter;
    }
    /**
     * Prints a given result into a given dom element
     * @param {object} dom element that the result needs to be appended to.
     * @param {object} result the result array of sorted products.
     * @private
     */
    function _printMethodsOnPage(dom, result) {

        var res = '';

        for(var key in result) {

            if(result.hasOwnProperty(key)) {
                res += '<ul><li class="lv-0">'+ key +'</li>';


                for(var i = 0, len = result[key].length; i < len; i++) {

                    if(i === 0) {
                        res += '<li><ol>';
                    }

                    res += '<li>' + result[key][i]+ '</li>';

                    if(i == result[key].length) {
                        res += '</li></ol>';
                    }
                }

                res += '</ul>';
            }
        }

        dom.innerHTML = res;
    }

})();