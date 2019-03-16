"use strict";

var MyDataStructures = (function MyDataStructures() {

    function MyDataStructures() {
    }

    // 1.1
    MyDataStructures.prototype.foo = function () {
        return 3;
    };

    // 1.2.
    MyDataStructures.prototype.bar = function () {
        return 5;
    };

    // 2.
    MyDataStructures.prototype.add = function (a, b) {
        return a + b;
    };

    // 3. Will reduce the functions to a numeric value (unlift it)
    MyDataStructures.prototype.add2 = function (fn1, fn2) {
        return MyDataStructures.prototype.add(fn1(), fn2());
    };

    // 4.
    MyDataStructures.prototype.constant = function (n) {
        return function () {
            return n;
        };
    };

    // 5.1
    // MyDataStructures.prototype.addn = function (numbers) {
    //     return MyDataStructures.prototype.add2.apply(null, numbers);
    // };

    // 5.2
    MyDataStructures.prototype.addn = function (fns) {
        // Avoid array mutation by
        fns = fns.slice();

        // Keep reducing the list and composing
        while(fns.length > 2) {

        }

        // Base condition
        return MyDataStructures.prototype.add2(fns[0], fns[1]);

    };


    return MyDataStructures;

}());