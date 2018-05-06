/**
 * JavaScript code to solve the exercise number 41 within the book
 * 'JavaScript all beginning is easy.'
 *
 * @author: Jessica Nierth
 * @date: 2/27/2017
 */

(function () {

    "use strict";

    const BUSSTOPS = [
        "Nordostbahnhof",
        "Theresienkrankenhaus",
        "Teutoburger Str.",
        "Leipziger Str.",
        "Dresdener Str.",
        "Spitalhof",
        "Hubertusstr.",
        "Tattersall",
        "Martha-Maria-Krkhs."
    ];

    _init();

    /**
     * Main entry point of this function.
     * @private
     */
    function _init() {
        var indexOfStop = _getPositionOfStation('Hubertusstr.'),
            middleBusstops;

        if(indexOfStop !== -1) {

            _removeBusStops(indexOfStop, BUSSTOPS.length);
            _printMethodsOnPage('result-1', BUSSTOPS);

            middleBusstops = _getBusStations('Nordostbahnhof', 'Dresdener Str.');
            _printMethodsOnPage('result-2', middleBusstops);

        }
    }

    /**
     * Searches for the index of a given busstop within the busstops array. If available it returns
     * its index otherwise returns -1.
     *
     * @param stationName
     * @returns {number} -1 if the busstop couldn't be found otherwise returns the index of the existing bus stop.
     * @private
     */
    function _getPositionOfStation(stationName) {
        return BUSSTOPS.indexOf(stationName);
    }

    /**
     * Removes bus stops from the global busstops constant.
     * @param {number} from the index from which items need to be removed.
     * @param {number} to the index to which the items in the busstop array need to be removed.
     * @private
     */
    function _removeBusStops(from,to) {
        BUSSTOPS.splice();
    }

    /**
     * Returns all busstop from a given busstop to a given bus stop.
     * @param {string} fromBusstation the busstation from which all stations have to be retrieved from.
     * @param {string} toBusstation the busstation to which all stations have to be retrieved.
     * @return {object} array of bus stops. Returns all if the given bus stops couldn't be found otherwise returns an
     * array of bus stops from the given bus stops to a given bus stop.
     * @private
     */
    function _getBusStations(fromBusstation, toBusstation) {
        var indexFrom = _getPositionOfStation(fromBusstation),
            indexTo = _getPositionOfStation(toBusstation);

        if(indexFrom !== -1 && indexTo !== -1) {
            // To include the toBusStation include its index
            return BUSSTOPS.slice(indexFrom, indexTo + 1);
        } else {
            return BUSSTOPS;
        }
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