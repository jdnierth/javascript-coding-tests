var MyReduceFunctions = (function MyReduceFunctions() {

    function MyReduceFunctions() {}

    MyReduceFunctions.prototype.myReduce = function(inputArray, func, seed) {
        seed = seed | 0;

        for(var i = 0, len = inputArray.length; i < len; i++) {

            seed += func(inputArray[i]);
            console.log(seed);
        }

        return seed;
    };

    MyReduceFunctions.prototype.addTogether = function(inputArray) {
        return MyReduceFunctions.prototype.myReduce(inputArray,_add,0);
    };

    MyReduceFunctions.prototype.concatenateStringsWithSpaces = function(inputArray) {
        return inputArray.reduce(_concatStrings);
    };

    MyReduceFunctions.prototype.squaresAndSubtracts = function(inputArray) {
        return inputArray.map(_square).reduce(_substract);
    };

    function _add(a,b) {
        a = a || 0;
        b = b || 0;

        return a + b;
    }

    function _concatStrings(a,b) {
        return a + ' ' + b;
    }

    function _square(a) {
        return a * a;
    }

    function _substract(a,b) {
        return a - b;
    }
  
    return MyReduceFunctions;
}());
