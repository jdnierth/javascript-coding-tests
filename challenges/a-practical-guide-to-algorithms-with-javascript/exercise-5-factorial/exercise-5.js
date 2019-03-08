var factorial = (function factorial() {

    // Multiply
    function multiply(n,m) {
        return n * m;
    }

    function factorial(n) {
        var result = 1;

        for(var i = n; i >= 1; i--) {
            result = multiply(i, result);
        }

        return result;
    }

    factorial(4);

    return {
        factorial: factorial,
        multiply: multiply
    }
})();