/**
 * JavaScript code to solve the exercise number 43 within the book
 * 'JavaScript all beginning is easy.'
 *
 * @author: Jessica Nierth
 * @date: 2/28/2017
 */

(function () {

    "use strict";

    var productList = "3Doodler 3D Printing Pen, Game of Thrones Wax Seal Coasters, 10th Doctor Sonic Screwdriver Exclusive Programmable TV Remote, Electronic Butterfly in a Jar, Aquafarm: Aquaponics Fish Garden, Cassette Adapter Bluetooth, Marvel Comics Lightweight Infinity Scarf, Ollie - The App Controlled Robot, Sound Splash Bluetooth Waterproof Shower Speaker, PowerCube, Backpack of Holding, Retro Duo Portable NES/ SNES Game System, Universal Gadget Wrist Charger, USB Squirming Tentacle, USB Fishquarium, Space Bar Keyboard Organizer &amp; USB Hub Pop, USB Pet Rock, Powerstation 5- E. Maximus Chargus, Dual Heated Travel Mug, Crosley Collegiate Portable USB Turntable, Meh Hoodie, Magnetic Accelerator Cannon, 8-Bit Legendary Hero Heat-Change Mug";

     _initHandleCSV();

    /**
     * Main entry point of this function.
     * @private
     */
    function  _initHandleCSV() {

        var productArray = _convertCSVToArray(productList);
        var sortedProductArray = _orderArray(productArray);

        _printMethodsOnPage('result-1',sortedProductArray)
    }

    function _convertCSVToArray(productList) {

        var productArray = productList.split(',');

        return productArray;
    }

    function  _orderArray(productList) {
        return productList.sort();
    }


    function _printMethodsOnPage(dom, result) {
        var methodDom = document.getElementById(dom),
            busList = '';

        for(var i = 0, len = result.length; i < len; i++) {
            busList += '<li>' + result[i] + '</li>';
        }

        methodDom.innerHTML = busList;
    }

})();