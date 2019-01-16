"use strict";

(function () {

    function delay(func, wait) {

        var adds = Array.prototype.slice.call(arguments, 2);

        return setTimeout(function () {
            var params = adds.reduce(function (total, e) {
                return total + e;
            });
            console.log('time: ',params);

            return func(params);

        }, wait);
    }

    function add(x) {
        console.log(x+2);
        return x + 2;
    }

    console.log(delay(add, 300, 4, 3, 1));
})();