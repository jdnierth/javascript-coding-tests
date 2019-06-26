/**
 * Nth Fibonacci
 * The Fibonacci sequence is defined as follows: the first number of the sequence is 0, the second number is 1, and
 * the nth number is the sum of the (n-1) and (n-2) number.
 *
 * Example
 * input: 6
 * output: 5 (0, 1, 1, 2, 3, 5)
 */

function getNthFib(n) {
    if(n == 0 || n == 1) {
        return 0;
    } else if( n == 2 ) {
        return 1;
    } else {
        return getNthFib(n - 1) + getNthFib(n - 2);
    }
}


console.log(getNthFib(0));
console.log(getNthFib(1));
console.log(getNthFib(2));
console.log(getNthFib(6));