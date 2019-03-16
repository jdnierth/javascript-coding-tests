"use strict";

var MyMultRec = (function MyMultRec() {

    function MyMultRec() {}

    MyMultRec.prototype.multRec = function(product, num, nums) {
        console.log('product: ', product, 'nums: ', nums);
        // sum.apply(null, nums)
        product *= num;

        // base case
        if (num === undefined || nums.length === 0) return product;

        // var head = nums[0] || 1;

        // Non PTC as there is a calculation to be done after the last function call.
        // return product * MyMultRec.prototype.multRec(head,nums.slice(1));

        // PTC call
        return MyMultRec.prototype.multRec.apply(product, nums);

    };


    return MyMultRec;

}());