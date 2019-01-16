(function () {

    var _ = {};

    _.forEachRight = function(inputArray, func) {
        for(var i = inputArray.length; i >= 0; i--) {

            func(inputArray[i]);
        }
    };

    function printNext(value) {
        console.log(value);
    }

    _.forEachRight([1,2,3,4,5], printNext);

})();