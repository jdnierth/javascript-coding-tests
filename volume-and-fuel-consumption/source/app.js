/**
 * Immediately invoked function that contains the logic for the
 * volume-and-fuel-consumption.
 *
 * @author: Jessica Nierth
 * @date: 2/19/2017
 */
(function() {
    "use strict";

    var distance = document.getElementById('distance'),
        fuel = document.getElementById('fuel'),
        tankSize = document.getElementById('tankSize'),
        consumption = document.getElementById('consumption'),
        maxDistance = document.getElementById('maxDistance'),
        dataModel = {
            distance: 0,
            fuel: 0,
            tankSize: 0
        };

    _initValues();
    _calculateAndPrintConsumption();
    _bindEvents();

    /**
     * Initializes the form fields with values from the data model.
     *
     * @private
     */
    function _initValues() {
        dataModel['distance'] = distance.value;
        dataModel['fuel'] = fuel.value;
        dataModel['tankSize'] = tankSize.value;
    }

    /**
     * Function that registers event handler for this tool
     *
     * @private
     */
    function _bindEvents() {
        distance.addEventListener('change', _changeEventHandler);
        fuel.addEventListener('change', _changeEventHandler);
        tankSize.addEventListener('change', _changeEventHandler);
    }

    /**
     * Event handler that will update the data model with the input form fields.
     *
     * @param event { object } Change event object.
     * @private
     */
    function _changeEventHandler(event) {

        if (!event.target.value) {
            return;
        }

        var value = event.target.value;

        switch (event.target.getAttribute('name')) {
            case 'distance':
                dataModel['distance'] = value;
                break;
            case 'fuel':
                dataModel['fuel'] = value;
                break;
            case 'tankSize':
                dataModel['tankSize'] = value;
                break;
        }

        _calculateAndPrintConsumption(value);
    }

    /**
     * Takes the data from the data model and calculates the consumption value and
     * max distance value. Once calculated the values will be printed out in the view.
     *
     * @private
     */
    function _calculateAndPrintConsumption() {

        var consumptionVal = 0,
            maxDistanceVal = 0;

        if (dataModel['distance'] !== 0) {
            consumptionVal = dataModel['fuel'] / dataModel['distance'] * 100;
        } else {
            consumptionVal = 0;
        }
        
        if(dataModel['tankSize'] !== 0 && consumptionVal !== 0) {
            maxDistanceVal = dataModel['tankSize'] / consumptionVal;
        } else {
            maxDistanceVal = 0;
        }

        consumption.innerHTML = consumptionVal.toFixed(2);
        maxDistance.innerHTML = maxDistanceVal.toFixed(2);
    }

})();