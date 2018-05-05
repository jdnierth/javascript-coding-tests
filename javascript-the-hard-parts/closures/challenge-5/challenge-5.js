"use strict";

(function () {

    function once(func) {
        var res = 0,
            isCalled;

        return function func(x) {

            if (!isCalled) {
                res = x + 2;
                isCalled = true;
            }

            return res;
        }
    }

    function addByX(x) {
        var startValue = x;

        return function add(y) {
            return startValue + y;
        }
    }

    var addByTwo = addByX(2);

    var onceFunc = once(addByTwo);

// UNCOMMENT THESE TO TEST YOUR WORK!
console.log(onceFunc(4));  //should log 6
console.log(onceFunc(10));  //should log 6
console.log(onceFunc(9001));  //should log 6


})();