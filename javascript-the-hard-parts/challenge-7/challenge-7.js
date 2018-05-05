"use strict";

(function () {

    function union(a, b, c) {

        var input = [];
        input.push(b);
        input.push(c);

        return input.reduce(getIntersects, a);

    }

    function getIntersects(result, other) {
        var t = other.filter(function(element) {
            return find(result,element);
        });
        result = result.concat(t);
        return result;
    }

    function find(inputArray, number) {
        // console.log(inputArray,  '#' ,number);
        if(!(inputArray.includes(number))) {
            console.log('couldn\'t find:', number ,' in ', inputArray);
        }
        return !(inputArray.includes(number));
    }

    console.log(union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]));
    // should log: [5, 10, 15, 88, 1, 7, 100]

})();