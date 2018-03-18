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
                desc: '"5" * "4"',
                calc: "5" * "4"
            },
            {
                desc: '5 * "4"',
                calc: 5 * "4"
            },
            {
                desc: '"5" - "4"',
                calc: "5" - "4"
            },
            {
                desc: '"5" - 4',
                calc: "5" - 4
            },
            {
                desc: '5 - "4"',
                calc: 5 - "4"
            },
            {
                desc: '"5" / "4"',
                calc: "5" / "4"
            },
            {
                desc: '"5" / 4',
                calc: "5" / 4
            },
            {
                desc: '5 / "4"',
                calc: 5 / "4"
            },
            {
                desc: '"1.5" * 2',
                calc: "1.5" * 2
            },
            {
                desc: '"1,5" * 2',
                calc: "1,5" * 2
            },
            {
                desc: '"1.5" + 2',
                calc: "1.5" + 2
            },
            {
                desc: 'Number("1.5") * 2',
                calc: Number("1.5") * 2
            },
            {
                desc: 'Number("1,5") * 2',
                calc: Number("1,5") * 2
            },
            {
                desc: 'Number("3 Tage") * 7',
                calc: Number("3 Tage") * 7
            },
            {
                desc: 'Number("Seite 20") + 5',
                calc: Number("Seite 20") + 5
            },
            {
                desc: '"9,2" + Number("11.7")',
                calc: "9,2" + Number("11.7")
            },
            {
                desc: '(NaN - 2) * (4 / 2)',
                calc: (NaN - 2) * (4 / 2)
            },
            {
                desc: 'alert(Number(17 / 2 + 1.3))',
                calc: Number(17 / 2 + 1.3)
            },
            {
                desc: 'typeof 12.25',
                calc: 12.25
            },
            {
                desc: 'typeof typeof 12.25',
                calc: typeof 12.25
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