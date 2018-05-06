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
                desc: 'isNaN(3)',
                calc: isNaN(3)
            },
            {
                desc: 'isNaN(-42)',
                calc: isNaN(-42)
            },
            {
                desc: 'isNaN("34")',
                calc: isNaN("34")
            },
            {
                desc: 'isNaN(7.1)',
                calc: isNaN(7.1)
            },
            {
                desc: 'isNaN("Hello")',
                calc: isNaN("Hello")
            },
            {
                desc: 'isNaN(NaN)',
                calc: isNaN(NaN)
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
     * @param tr { object } DOM object table row dom object.
     * @private
     */
    function _addNewTableRow(tr) {
        var cloneTR = tr[1].cloneNode(true);

        tbody[0].appendChild(cloneTR);

        return cloneTR;

    }

})();