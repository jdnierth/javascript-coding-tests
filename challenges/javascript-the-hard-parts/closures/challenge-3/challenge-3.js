"use strict";

(function () {

    function outer() {
        var counter = 0; // this variable is outside incrementCounter's scope
        function incrementCounter () {
            counter ++;
            console.log('counter', counter);
        }
        return incrementCounter;
    }

    var willCounter = outer();
    var jasCounter = outer();

// Uncomment each of these lines one by one.
// Before your do, guess what will be logged from each function call.

willCounter(); // 1
willCounter(); // 2
willCounter(); // 3

jasCounter(); // 1
willCounter(); // 4

})();