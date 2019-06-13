/**
 * Write a function that generates all combinations of a set of characters based on a given string.
 * Assume that all characters will be capitalized.
 *
 * @param {string} word
 */
function generateAnagrams(word) {
    var characters = word.split("");
    var len = characters.length;
    var result = {};

    if (!len) {
        return [""];
    }

    for (var i = 0; i < len; i++) {
        var l = characters[i];

        // Make sure to provide a copy of the input
        var firstLetter = characters.slice(0, i);

        // Push a certain character from index i to the word array
        var remaining = firstLetter.concat(characters.slice(i + 1)).join("");

        generateAnagrams(remaining).forEach(function (anagram) {
            result[l + anagram] = true;
        });

    }

    return Object.keys(result);
}


// Test cases
// ""   > ""
// A    > A
// AB   > AB
//      > BA
// ABC  > ABC
//      > ACB
//      > BAC
//      > BCA
//      > CAB
//      > CBA

// Pseudocode
// 1. Get a list of characters
// 2. Loop through the list of characters with an incrementing index by using the following action
// 3. Create an overall result array anagrams
// 4. Copy the input array cpInput
// 5. Loop through the cpInput array until it is empty doing the following actions
// 5.1 Create a result array
// 5.2 Take out one character of the cpInput starting with the index of zero
// 5.3 Push the character taken out into the new array
// 5.4 Increment the index
// 5.5 Continue action 5.1 - 5.4 until the cpInput array is empty
console.log(generateAnagrams("ABC"));