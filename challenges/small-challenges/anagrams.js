/**
 * Write a function that generates all combinations of a set of characters based on a given string.
 * Assume that all characters will be capitalized.
 *
 * - 3 characters = 3! Permutations = 3 * 2 * 1 = 6 combinations
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
console.log(generateAnagrams("ABCD"));


function getUniquePermutations(characters) {
    var results = [];

    if (characters.length === 1) {
        results.push(characters);
        return results;
    }

    for (var i = 0; i < characters.length; i++) {
        var firstChar = characters[i];

        // All other characters without the first character
        var remainingChars = characters.substring(0, i) + characters.substring(i + 1),
            innerPermutations = getUniquePermutations(remainingChars);

        for (var j = 0; j < innerPermutations.length; j++) {
            results.push(firstChar + innerPermutations[j]);
        }
    }
    return results;
}

console.log(getUniquePermutations("ABCD"));

// Pseudocode
// ===========
// function getAllPermutations (string)
// define results
// if string is a single character
//  add the character to results
//  return results
//for each char in string
//  define innerPermutations as a char of string
//  set innerPermutations to getAllPermutations (without next char)
//  foreach string in innerPermutations
//    add defined char and innerPermutations char
//  return results


//TODO: CHECK THIS SOLUTION, DOESNT SEEM TO BE RIGHT
/*function getPermutationsOfString(inputString) {

    let permutations = [];

    for(let i = 0; i < inputString.length; i++) {
        const startLetter = inputString[i];
        const remainingChars = inputString.substring(0,i) + inputString.substring(i + 1);
        let remainingCharsArray = remainingChars.split("");

        for(let j = 0; j<remainingCharsArray.length; j++) {
            permutations.push(startLetter + remainingCharsArray.join(""));
            remainingCharsArray.unshift(remainingCharsArray.pop());
        }
    }
    return permutations;
}

console.log(getPermutationsOfString("ABCD"));
*/