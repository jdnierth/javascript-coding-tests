"use strict";

(function () {

    function intersection(a, b, c) {

        var input = [];
        input.push(b);
        input.push(c);

        return input.reduce(getIntersects, a);

    }

    function getIntersects(result, other) {
        return result.filter(function(element) {
            return find(other,element);
        });
    }

    function find(inputArray, number) {
        return (inputArray.includes(number));
    }

    console.log(intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]));

})();