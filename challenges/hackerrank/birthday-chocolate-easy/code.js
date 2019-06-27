// Complete the birthday function below.
function birthday(s, d, m) {
    var results = [],
        len = s.length;

    // Base Case: if s < m return an empty array
    if (len < m) {
        return results;
    }

    // Loop through s: take succeeding numbers of size m, 
    for (var i = 0; i < len; i++) {

        // get next m numbers
        var tupel = _getNextNNumbers(s, i, m);

        // If not enough digits, return the result you got so far
        if (tupel.length != 0) {

            // Sum numbers up
            var sum = tupel.reduce(_mySum);
            // If the sum matches, put the tupal to the list of results
            if (sum == d) {
                results.push(tupel);
            }
        }
    }

    // Else move on with the next succeeding m digits
    return results.length;

}

function _mySum(total, a) {
    return total + a;
}

function _getNextNNumbers(s, i, m) {
    var tmp = [];

    var count = m;

    while (count != 0) {

        if (!s[i+(count-1)]) {
            // clear
            tmp = [];
            return tmp;
        } else {
            tmp.push(s[i+(count-1)]);
            count = count - 1;
        }
    }


    return tmp;
}


console.log(birthday([1,2,1,3,2], 3, 2));
console.log(birthday([4], 4, 1));
