(function () {

    // Implement a function add
    function add(n) {
        return n + n;
    }

    // Implement a function square
    function square(n) {
        return n * n;
    }

    function func(number, functionName) {
        return functionName(number);
    }

    var addRes = func(5,add);
    console.log(addRes);

    var squareRes = func(5,square);
    console.log(squareRes);

})();