/**
 * Immediately invoked function that prints out the net price
 * of 150 with a value added tax of 22 percent.
 *
 * @author: Jessica Nierth
 * @date: 2/18/2017
 */
(function() {
    "use strict";

    const VAT_PERCENTAGE = 22;

    var domNetPrice = document.getElementById('netPrice'),
        price = 150,
        percentOfGross = (150 * VAT_PERCENTAGE) / 100,
        netPrice = price + percentOfGross;

    domNetPrice.innerHTML = netPrice;

})();