var factorial = (function factorial() {

    /**
     * Multiply 2 values.
     *
     * @param {Number} n
     * @param {Number} m
     * @returns {number} the product of 2 inputs
     */
    function multiply(n,m) {
        return n * m;
    }

    /**
     * Checks if a value can be coerced into a Number.
     *
     * @param {Number} n input number to check.
     * @returns {boolean} true if value can not be coerced into a number otherwise false.
     */
    function isNaN(n) {
        var reg = /^\d+$/;
        return !reg.test(n);
    }

    /**
     * Calculates the factorial of a given value.
     *
     * @param {Number} n The input to calculate the factorial of.
     * @returns {number} The factorial of the input (n!).
     */
    function factorial(n) {

        var result = 1;

        n = Number(n);

        if(n < 0) {
            throw new Error('Number has to be > 0');
        } else if(isNaN(n)) {
            throw new Error('Number expected but character given')
        }

        for(var i = n; i >= 1; i--) {
            result = multiply(i, result);
        }

        return result;
    }

    console.log(factorial(5));

    return {
        isNaN: isNaN,
        factorial: factorial,
        multiply: multiply
    }
})();