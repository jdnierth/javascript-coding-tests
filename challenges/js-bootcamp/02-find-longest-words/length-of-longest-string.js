// Given a string, find the length of the longest word in a string
// - for
// - if
// - string.split
var result = {},
    max = 0;

function convertTxtToArrayOfWords(text) {
    return text.split(' ');
}

function sortByLength(item) {
    var length = item.length;

    // Keep track of the max length word
    max = (max > length) ? max : length;

    if(!result[length]) {
        result[length] = [];
    }

    result[length].push(item);
}

function countWords(arrayOfWords) {
    return arrayOfWords.map(sortByLength);
}

function getMaxWords() {
    return result[max];
}

var split = convertTxtToArrayOfWords('Hello my name is Geena');
countWords(split);
console.log(getMaxWords());