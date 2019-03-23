/**
 * Create a function multiMax that will take the first argument and multiplies it with the result
 * of the Math.max() function.
 * 3,1,2,3 > 9
 * 3,1,2,6 > 18
 *
 * @author: Jessica Nierth
 * @date: 23.03.2019
 */
var myMultiply = (function myMultiply() {

    function multiMax(multi) {
        // Array.prototype.slice.call slices the arguments array into a real array.
        return multi * Math.max.apply(Math, Array.prototype.slice.call(arguments,1));
    }

    multiMax(3,1,2,3);
})();
