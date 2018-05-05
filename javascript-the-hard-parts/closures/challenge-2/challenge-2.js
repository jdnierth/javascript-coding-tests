"use strict";

(function () {

    function createFunctionPrinter(input) {

        function print() {
            console.log(input);
        }

        return print;
    }


    var printSample = createFunctionPrinter('sample');
    printSample();

    var printHello = createFunctionPrinter('hello');
    printHello();

    // should print 'sample' and 'hello'
})();