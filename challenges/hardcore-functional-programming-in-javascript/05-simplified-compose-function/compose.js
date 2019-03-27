/**
 * This function does not care what is inside g or f.
 * It produces a new function that pushes a value through.
 *
 * @param g
 * @param f
 * @returns {function(*=): *}
 */
function compose(g,f) {
    return function(x) {
        return g(f(x));
    }
}

function reverse(word) {
    var newWord = word.split('');
    newWord = newWord.reverse();

    return newWord;
}

/**
 * Capitalizes the first character in a string
 */
function properNoun(word) {
    return word.toUpperCase();
}

var word = 'hello';

console.log(compose(reverse(word), properNoun(word)));