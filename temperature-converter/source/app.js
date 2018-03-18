/**
 * Calculates temperature unit of Celsius into Fahrenheit.
 *
 * @author: Jessica Nierth
 * @date: 2/26/2017
 */

(function () {

    "use strict";

    var celsiusDom = document.getElementById('celsius'),
        fahrenheitDom = document.getElementById('fahrenheit');

    _init();

    function _init() {
        _bindEvents();
    }

    function _getValue(e) {
        var trigger = e.currentTarget,
            name = trigger.getAttribute('name'),
            value = trigger.value;

        switch (name) {
            case 'celsius':
                value = _convertCelsiusToFahrenheit(value);
                value = parseFloat(value).toFixed(2);
                _showResultMessage('fahrenheit', value);
                break;

            case 'fahrenheit':
                value = _convertFahrenheitToCelsius(value);
                value = parseFloat(value).toFixed(2);
                _showResultMessage('celsius', value);
                break;
            default:
        }

    }

    /**
     * Converts temperature from Celsius into Fahrenheit.
     *
     * Fahrenheit = Celsius * 9 / 5 + 32
     * @return { Number | null } The temperature in fahrenheit or null if input wasn't of type number.
     * @private
     */
    function _convertCelsiusToFahrenheit(celsiusVal) {

        var result;

        celsiusVal = parseFloat(celsiusVal);

        if (typeof celsiusVal === 'number') {
            result = celsiusVal * 9 / 5 + 32;
        } else {
            result = null;
        }

        return result;
    }

    /**
     * Converts the Fahrenheit value to Celsius or null.
     *
     * @param { String } fahrenheitVal the fahrenheit value.
     * @returns { Number | null } returns the celsius representation of the fahrenheit value or null.
     * @private
     */
    function _convertFahrenheitToCelsius(fahrenheitVal) {

        var result;

        fahrenheitVal = parseFloat(fahrenheitVal);

        if(typeof fahrenheitVal === 'number') {
            result = (fahrenheitVal - 32) * 5 / 9;
        } else {
            result = null;
        }

        return result;
    }

    /**
     * Event registration.
     *
     * @private
     */
    function _bindEvents() {
        celsiusDom.addEventListener('input', _getValue);
        fahrenheitDom.addEventListener('input', _getValue);
    }

    /**
     * Shows the results on the page
     *
     * @param { String } field the name of the field that needs to be updated with the value.
     * @param { Number } value the value that needs to be entered in the given field.
     * @private
     */
    function _showResultMessage(field, value) {

        switch (field) {
            case 'celsius':
                celsiusDom.value = value;
                break;
            case 'fahrenheit':
                fahrenheitDom.value = value;
                break;
            default:
        }
    }
})();