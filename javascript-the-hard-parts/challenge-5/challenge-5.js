"use strict";

(function() {

   function _reduce(nums, acc, init, cb){

        acc = init;
        nums.forEach(function(num) {
            acc = getSum(acc, num);

        });

        if(typeof cb === 'function') {
            cb(acc);
        }
   }

    function getSum(a,b) {
        return a + b;
    }

    _reduce([1,2,3,4,5],getSum,0, function(res) {
        console.log('_reduce([1,2,3,4,5]): ', res)
    });


})();