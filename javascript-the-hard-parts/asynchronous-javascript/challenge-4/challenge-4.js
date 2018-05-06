"use strict";

(function () {


    function addByX(x) {
        var startValue = x;

        return function add(y) {
            return startValue + y;
        }
    }

    var addByTwo = addByX(2);

    // now call addByTwo with an input of 1
    console.log(addByTwo(1)); // 3

    // now call addByTwo with an input of 2
    console.log(addByTwo(2)); // 4

})();