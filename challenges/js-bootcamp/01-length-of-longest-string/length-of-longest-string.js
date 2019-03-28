// Given a string, find the length of the longest word in a string
// - for
// - if
// - string.split
function findLongestWord(text) {
    var words = text.split(" ");
    return words.sort(sortTextByLengthDesc)[0];
}

function sortTextByLengthDesc(a, b) {
    return b.length - a.length;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog."));