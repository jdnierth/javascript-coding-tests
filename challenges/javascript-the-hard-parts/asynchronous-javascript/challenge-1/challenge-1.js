"use strict";

(function () {
    function printHello(){
        console.log('Hello');
    }

    setTimeout(printHello, 1000);

    console.log("Me first!");

    // Me first
    // Hello

})();