/**
 * SOME DESCRIPTION
 *
 * @author: Jessica Nierth
 * @date: 26.03.2019
 */
function curry(fn) {
    return function () {

        if (fn.length > arguments.length) {
            // Remember the given arguments and save them for later
            var slice = Array.prototype.slice;
            var args = slice.apply(arguments);


            return function () {
                return fn.apply(null, args.concat(slice.apply(arguments)));
            }
        } else {

            // If you got all the arguments you've needed, execute and return the value
            return fn.apply(null, arguments);
        }
    }
}

function add(a,b,c){
    return a + b + c;
}

curry(add(2)(3)(4));