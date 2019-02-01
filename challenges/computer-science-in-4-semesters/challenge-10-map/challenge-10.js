var MyMapFunctions = (function MyMapFunctions() {

    function MyMapFunctions() {}

    MyMapFunctions.prototype.myMap = function(inputArray, cb) {
        var result = [];

        for(var i = 0, len = inputArray.length; i < len; i++) {
            result.push(cb(inputArray[i]));
        }

        return result;
    };

    MyMapFunctions.prototype.doubleEach = function(inputArray) {
        // return inputArray.map(_double);
        return MyMapFunctions.prototype.myMap(inputArray,_double);
    };

    MyMapFunctions.prototype.squareEach = function(inputArray) {
        return inputArray.map(_squareEach);
    };

    MyMapFunctions.prototype.doubleAndSquare = function(inputArray) {
        return inputArray.map(_double).map(_squareEach);
    };

    function _double(num) {
        return 2 * num;
    }

    function _squareEach(num) {
        return num * num;
    }

    return MyMapFunctions;
}());
