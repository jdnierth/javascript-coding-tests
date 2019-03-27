var divs = document.getElementsByTagName('div');

for (var i = 0; i < divs.length; i++) {
    (function (i) {
        divs[i].addEventListener('click', function () {
            alert("Div " + i + " was clicked.")
        }, false)
    })(i);
}

/*
* - The variable i is always in the same scope as the event handler.
* - The anonymous function within the click event handler will only be triggered once the click happens but at that time the for loop is already finished with the index of 4, hence 'i' will always alert with 4 unless the scope of i is not being protected.
*
* Solutions:
* 1. substituted var with let
* 2. wrap the anonymous function in an immediately called function
* */