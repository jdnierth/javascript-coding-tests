/**
 * Lorem ipsum
 */

function smallestSubstring(word) {

    // Step 0: Base case
    if(word.trim().length == 0) {
        return 0;
    }

    // Step 1: Turn word into an array of characters
    var characters = word.split("");

    // Step 2: Get all the unique characters
    var uniqueLetters = getUniqueCharacters(characters);

    // Step 3: Get smallest Substring
    var result = findSmallestSubstring(characters, uniqueLetters);

    return "Result: Minimum length: " + result.length + " words: " + result.words.join(", ")
}

function getUniqueCharacters(characters) {
    var uniqueLetters = {};

    for(var i = 0; i < characters.length; i++) {
        uniqueLetters[characters[i]] = false;
    }

    return uniqueLetters;
}

function findSmallestSubstring(characters, uniqueLetters) {

    // Copy uniqueLetters (shallow copy is enough)
    var tmpUniqueLetterList = Object.assign({}, uniqueLetters),
        lowestLength = characters.length,
        word = "",
        shortestWord = {};

    for(var i = 0; i < characters.length; i++) {

        var isEmpty = hasUniqueLetter(characters[i], tmpUniqueLetterList);

        word +=characters[i];

        if(isEmpty) {

            // Keep track of the shortest word to not have to traverse through results again
            if(word.length < lowestLength) {
                lowestLength = word.length;
                shortestWord["words"] = [];
                shortestWord["words"].push(word);
                shortestWord["length"] = lowestLength;

            } else if(word.length == lowestLength) {
                shortestWord["words"].push(word);
            }

            // Reset word
            word = "";
            tmpUniqueLetterList = Object.assign({}, uniqueLetters);

        }
    }

    return shortestWord;
}

function hasUniqueLetter(character, uniqueLetters) {
    var check = true;

    if(uniqueLetters.hasOwnProperty(character)) {
        uniqueLetters[character] = true;
    }

    // If there is any key signed as false, it is not done yet, return false
    for (var key in uniqueLetters) {
        if(uniqueLetters[key] == false) {
            check = false;

            return check;
        }
    }

    return check;
}

//console.log("input: #" + "#");
//console.log(smallestSubstring(''));
console.log("input: #bab#");
console.log(smallestSubstring('bab'));
console.log("input: #bcaacbc#");
console.log(smallestSubstring('bcaacbc'));

