(function () {

    var suspects = [
        {
            name: "Angela",
            color: "red"
        },
        {
            name: "John",
            color: "blue"
        }
    ];

    // ES6 Destructuring - Option 1
    var a,b;

    [a,b] = [suspects[0].color,suspects[1].color];

    console.log('a: ', a, ' b: ', b);

    // ES6 Destructuring - Option 2

    var [{color:firstColor}, {color:secondColor}] = suspects;

    console.log('FirstColor: ', firstColor, ' SecondColor: ', secondColor);

})();