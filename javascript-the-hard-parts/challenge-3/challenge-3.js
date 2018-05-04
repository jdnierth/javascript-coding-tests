"use strict";

(function() {

    function _map(arrayOfNumbers,cb){
        var newMap = [];

        for(var i = 0; i < arrayOfNumbers.length; i++) {
            newMap.push(multiplyByTwo(arrayOfNumbers[i]));
        }

        return newMap;
    }

    function multiplyByTwo(x) {
        return x * 2;
    }

    console.log('_map([1,2,3,4,5]): ',_map([1,2,3,4,5]));

})();