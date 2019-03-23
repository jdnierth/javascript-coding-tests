/**
 * Write a function merge that takes a variable list of objects and merges them into one
 *
 * @author: Jessica Nierth
 * @date: 23.03.2019
 */
var myObjectMerge = (function () {

    function mergeObject(object) {
        // starting at 1 as the first is already part of the object
        for(var i = 1; i < arguments.length; i++) {
            for(var key in arguments[i]) {
                object[key] = arguments[i][key];
            }
        }

        return object;
    }

    var result = mergeObject(
        {
            "name": "Babara",
            "age": "19"
        },
        {   "height": "169"
        },
        {
            "birthday": "01.02.1959",
            "eyes": "blue"
        });

    console.log(result);

});
