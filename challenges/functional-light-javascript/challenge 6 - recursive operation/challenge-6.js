var MyMultRec = (function MyMultRec() {

    function MyMultRec() {}

    MyMultRec.prototype.multRec = function(product, nums) {
        console.log('product: ', product, 'nums: ', nums);

        // base case
        if (nums.length === 0) {
            return product;
        } else {
            var head = nums[0];
            return product * MyMultRec.prototype.multRec(nums[0],nums.slice(1));
        }
    };

    return MyMultRec;

}());