(function factorial() {

    var n = 5;
    var result = facIter(3);
    var result2 = facRecursive(3);

    console.log('The factorial of: ' + n + '(' + n + ') is: ' + result);
    console.log('The factorial of: ' + n + '(' + n + ') is: ' + result2);

    ///////////////////////////////

    /**
     * Iterative approach to calculate the factorial of a number
     *
     * @param {number} n input number
     * @returns {number} result of the factorial calcultion.
     */
    function facIter(n) {
        var result = 1;

        for (var i = 0; i <= n; i++) {
            if (i === 0) {
                result = 1;
            } else {
                result = result * i;
            }
        }

        return result;
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