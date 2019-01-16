var factorial = (function factorial() {

    var n = 15;

    facIter(n);
    facRecursive(n);


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

    return {
        facIter: facIter,
        facRecursive: facRecursive
    }

}());