"use strict";

(function() {

    function mapWith(arrayOfNumbers,cb){
        var newMap = [];

        var t = arrayOfNumbers.forEach(function(e) {
            newMap.push(multiplyByTwo(e));
        });

        if(typeof cb === 'function') {
            cb(newMap);
        }
    }

    function multiplyByTwo(x) {
        console.log('x: ',x);
        return x * 2;
    }

    mapWith([1,2,3,4,5], function(res) {
        console.log('mapWith([1,2,3,4,5]): ', res);
    });

})();