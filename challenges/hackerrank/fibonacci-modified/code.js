/**
 * Given 3 integers t1, t2 and n, compute and print th nth term of a modified Fibonacci sequence
 *
 * t1: given, eg. 0
 * t2: given, eg. 1
 * t3: ti+2 = ti + (ti + 1)^2, 0 + 1 = 1
 * t4: t2+2 = 1 + (1)^2, 2
 * t5: t3+2 = 1 + (2)^2, 5
 *
 */

function longestWord(sentence) {
    // Step 0: Remove all special characters
    sentence = sentence.replace(/,/g, '');

    // Step 1: split up the sentence into an array of words
    var words = sentence.split(' ');
    // Option 1: Transform the array into an array of objects where the key is the length of the word and the value is
    // an array of words that match the length
    // Option 2: Loop through the array, check each words length and always keep the longest by comparing the next value

    var longestWord = words.reduce(returnLongestWord, []);

    if (longestWord.length > 1) {
        return longestWord;
    } else {
        return longestWord[0];
    }
}

function returnLongestWord(acc, word) {
    console.log('word: ', word, ' acc: ', acc);
    // transform word
    word = word.toLowerCase();

    if (acc.length === 0) {
        acc.push(word);
    } else if (acc.length > 0 && acc[0].length == word.length) {
        acc.push(word);
    } else if (acc.length > 0 && acc[0].length < word.length) {
        console.log("acc: ", acc[0], ' w: ', word);
        acc = [];
        acc.push(word);
    }


    return acc;
}

console.log(longestWord('Hello, my name is Brad'));
console.log(longestWord('Hello there, my name is Brad'));