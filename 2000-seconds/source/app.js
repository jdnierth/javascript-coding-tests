/**
 * Immediatly called function that will print out the number of minutes and number of seconds
 * of 2000 seconds.
 *
 * @author: Jessica Nierth
 * @date: 2/18/2017
 */

(function() {
    "use strict";
    
    // Get the dom node to show the result
    var domMinutes = document.getElementById('minutes'),
        domSeconds = document.getElementById('seconds'),
        seconds = 2000,
        result = seconds / 60,
        resultAsString = result.toString();

    domMinutes.innerHTML = result.toFixed(0);
    domSeconds.innerHTML = Math.round(resultAsString);

})();