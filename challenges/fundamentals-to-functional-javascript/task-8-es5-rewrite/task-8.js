(function () {
    var add = function (a, b) {
        b = b || 2;

        console.log(arguments);
        return a + b;
    };

    add(3);
})();