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
                desc: '"Ladislaus" > "Oswine"',
                calc: "Ladislaus" > "Oswine"
            },
            {
                desc: '"Anton" > "Alan"',
                calc: "Anton" > "Alan",
                comment: "n comes after l in the alphabet."
            },
            {
                desc: '"5" < "a"',
                calc: "5" < "a",
                comment: "Numbers are sorted in before characters"
            },
            {
                desc: '"3" < "4"',
                calc: "3" < "4"
            },
            {
                desc: '300 < 4',
                calc: 300 < 4
            },
            {
                desc: '"300" < 4',
                calc: "300" < 4,
                comment: "JS compares first the first character where 3 is smaller than 4. 00 will not be looked at any more."
            },
            {
                desc: '"23" < 37',
                calc: "23" < 37,
                comment: "Interpreter does 23 < 37"
            },
            {
                desc: '"300" < 4',
                calc: "300" < 4,
                comment: "Interpreter does 300 < 4"
            },
            {
                desc: '"4" < 300',
                calc: "4" < 300,
                comment: "Interpreter does 4 < 300"
            },
            {
                desc: '2 < "3 Autos"',
                calc: 2 < "3 Autos",
                comment: "Interpreter does 2 < NaN = false"
            },
            {
                desc: '"3 Autos" < 2',
                calc: "3 Autos" < 2
            },
            {
                desc: 'NaN < 2',
                calc: NaN < 2
            },
            {
                desc: '2 < NaN',
                calc: 2 < NaN
            },
            {
                desc: '19 <= NaN',
                calc: 2 < NaN
            },
            {
                desc: '"seven" < "nine"',
                calc: "seven" < "nine"
            },
            {
                desc: '"nine" < "seven"',
                calc: "nine" < "seven"
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
            selectedTR.cells[2].innerHTML = (calcs[i].comment && calcs[i].comment !== '') ? calcs[i].comment : "" ;
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