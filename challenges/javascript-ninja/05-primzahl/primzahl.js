/**
 * A prime number is a natural number with the following characteristics:
 * - > 1
 * - > only divided by itself and 1
 *
 * @author: Jessica Nierth
 * @date: 23.03.2019
 */
function isPrime(value) {
    // Function that uses memoiazation.
    if(!isPrime.answers) isPrime.answers = {};

    if(isPrime.answers[value] != null) {
        return isPrime.answers[value];
    }

    var prime = value != 1; // 1 can never be prime

    for(var i = 2; i < value; i++) {
        if(value % i == 0) {
            prime = false;
            break;
        }
    }

    return isPrime.answers[value] = prime;
}

isPrime(5);