"use strict";

(function () {

    function after(count, func) {
        var num = 1;

        return function () {
            if (num === count) {
                return func();
            } else {
                num++;
            }
        }
    }

    var called = function () {
        console.log('hello');
    };

    var afterCalled = after(3, called);

    afterCalled(); // -> nothing is printed
    afterCalled(); // -> nothing is printed
    afterCalled(); // -> 'hello' is printed

})();