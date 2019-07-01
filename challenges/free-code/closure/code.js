/**
 * Write a function that will loop through a list of integers and print the index of each element after a 3 second delay.
 */
function printMe(numbers) {
    for(var i = 0; i < numbers.length; i++) {

        // Alternative solution: Use let to provide a block scoped i variable
        (function(j) {
            setTimeout(function() {
                console.log("i: ", j,  " value: ", numbers[j]);
            }, 3000);
        })(i);
    }
}

printMe([3,4,5,6,7,8,9,10]);
