/**
 * Return true if anagram and false if not
 * ex. 'elbow' === 'below'
 * ex. 'Dormitory' === 'dirty room##'
 */

function isAnagram(word1, word2) {

    // Step 1: Transform input for comparison
    word1 = unifyWord(word1);
    word2 = unifyWord(word2);

    // Step 2: If after unifying the 2 strings by removing any special character and spaces the length is different,
    // it can not be an anagram any more
    if(word1.length !== word2.length) {
        return false;
    }

    // Step 3: Loop through word1 character by character and check against all characters of word2
    // If there is a character in word1 that couldn't be found in word2, return false (is not an anagram)
    var w1 = word1.split("");

    // Step 4 - Solution 1: Result will contain any characters that were found within word 2
    var result = w1.filter(findCharacter(word2));

    // Step 4 - Solution 2: sort characters of each word alphabetically after unifying them and
    // compare word1 and word2, if they are different, it is not an anagram.

    // Step 5: If the result array doesn't have the same length than word1, it can't be an anagram
    return (result.length == w1.length);

}
function findCharacter(wordToCompare) {
    return function(element) {
        return wordToCompare.indexOf(element) > -1;
    }
}

function unifyWord(word) {
    // Remove empty spaces
    word = word.replace(/[^\w]/g,'');

    // Transform all characters to lower case
    word = word.toLowerCase();

    return word;
}

console.log(isAnagram('elbow','below'));
console.log(isAnagram('Dormitory','dirty room##'));
console.log(isAnagram('elbow1','1 elbow'));
console.log(isAnagram('ball','ball room'));