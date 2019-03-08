var factorial = (function factorial() {

    // Multiply
    function multiply(n,m) {
        return n * m;
    }

    function factorial(n) {

        if(n < 0) {
            throw new Error('Number has to be > 0');
        }
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