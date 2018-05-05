"use strict";

(function () {
    var function1 = function createFunction() {
        return sayHello();
    };

    function sayHello() {
        console.log('hello');
    }

    function1();

})();