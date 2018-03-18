/**
 * Immediately invoked function that does a number of calculations
 * and prints the results out on a table in the view.
 *
 * @author: Jessica Nierth
 * @date: 2/19/2017
 */
(function() {
    "use strict";

    var tr = document.querySelectorAll('tr'),
        tbody = document.getElementsByTagName('tbody'),
        calcs = [
            {
                desc: 'Math.round(3.1)',
                calc: Math.round(3.1)
            },
            {
                desc: 'Math.round(3.5)',
                calc: Math.round(3.5)
            },
            {
                desc: 'Math.floor(3.7)',
                calc: Math.floor(3.7)
            },
            {
                desc: 'Math.ceil(3.1)',
                calc: Math.ceil(3.1)
            },
            {
                desc: '13.4567.toFixed(3)',
                calc: 13.4567.toFixed(3)
            },
            {
                desc: 'Number(10).toFixed(2)',
                calc: Number(10).toFixed(2)
            }
        ];

    _updateTable();

    function _updateTable() {

        for(var i = 0, calcsLength = calcs.length; i < calcsLength; i++) {

            var currentTR = tr[i + 1],
                selectedTR,
                calcDesc = calcs[i].desc,
                calcResult = calcs[i].calc;

            if(currentTR) {

                selectedTR = currentTR;

            } else {

                selectedTR = _addNewTableRow(tr);
            }

            // get the first column
            selectedTR.cells[0].innerHTML = calcDesc;
            selectedTR.cells[1].innerHTML = calcResult;
            selectedTR.cells[2].innerHTML = typeof(calcResult);
        }
    }

    /**
     * Copies an existing table row and adds another one within the tbody tag.
     *
     * @param tr { DOM } table row dom object.
     * @private
     */
    function _addNewTableRow(tr) {
        var cloneTR = tr[1].cloneNode(true);

        tbody[0].appendChild(cloneTR);

        return cloneTR;

    }

})();