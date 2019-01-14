(function factorial() {

    var n = 15;
    var resultFac = facIter(n);

    var start = Date.now(); console.log(start);
    var resultRec = facRecursive(n);
    var end;
    var timerRec = setInterval(function() {
        if(resultRec) {
            end = Date.now();
            console.log('end: ',end);
            console.log('The factorial of: ' + n + '(' + n + '!) is: ' + resultRec + ' time for it to run: ' + (end - start));
            clearInterval(timerRec);
        }
    });

    console.log('The factorial of: ' + n + '(' + n + '!) is: ' + resultFac.result + ' time for it to run: ' + resultFac.time);

    ///////////////////////////////

    /**
     * Iterative approach to calculate the factorial of a number
     *
     * @param {number} n input number
     * @returns {number} result of the factorial calcultion.
     */
    function facIter(n) {
        var result = 1,
            end,
            start = Date.now();

        for (var i = 0; i <= n; i++) {
            if (i === 0) {
                result = 1;
            } else {
                result = result * i;
            }
        }

        end = Date.now();

        return {
            time: end - start,
            result: result,
        };
    }

    /**
     * Resursive approach to calculate the factorial of a number.
     *
     * @param {number} n input number.
     * @returns {number}
     */
    function facRecursive(n) {
        if(n <= 0) {
            return 1;
        } else {
            return n * facRecursive(n-1);
        }
    }

}());