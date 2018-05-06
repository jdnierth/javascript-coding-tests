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
                desc: '3 > 5',
                calc: 3 > 5
            },
            {
                desc: '19 >= 19',
                calc: 19 >= 19
            },
            {
                desc: '19 >= 19.2',
                calc: 19 >= 19.2
            },
            {
                desc: '5 * 7 === 36 - 1',
                calc: 5 * 7 === 36 - 1
            },
            {
                desc: '3 + 3 !== 2 * 3',
                calc: 3 + 3 !== 2 * 3
            },
            {
                desc: '"42" === 42',
                calc: "42" === 42
            },
            {
                desc: '"42" + 1 === 43',
                calc: "42" + 1 === 43
            },
            {
                desc: '4567 === 4567',
                calc: 4567 === 4567
            },
            {
                desc: '4567 !== 4567',
                calc: 4567 !== 4567
            },
            {
                desc: '"Ladislaus" !== "Ladislaus"',
                calc: "Ladislaus" !== "Ladislaus"
            },
            {
                desc: '"Oswine" === "Ladislaus"',
                calc: "Oswine" === "Ladislaus"
            },
            {
                desc: '"Oswine" == "Ladislaus"',
                calc: "Oswine" == "Ladislaus"
            },
            {
                desc: '321 <= 253',
                calc: 321 <= 253
            },
            {
                desc: '321 >= 253',
                calc: 321 >= 253
            },
            {
                desc: '5 === 5',
                calc: 5 === 5
            },
            {
                desc: '5 === "5"',
                calc: 5 === "5"
            },
            {
                desc: '"5" === 5',
                calc: "5" === 5
            },
            {
                desc: '0 == false',
                calc: 0 == false
            },
            {
                desc: '"0" == false',
                calc: "0" == false
            },
            {
                desc: '0 === false',
                calc: 0 === false
            },
            {
                desc: '0 == ""',
                calc: 0 == ""
            },
            {
                desc: '"0" == ""',
                calc: "0" == ""
            },
            {
                desc: '"Computer" === "Probleme"',
                calc: "Computer" === "Problemea"
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