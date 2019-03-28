/**
 * SOME DESCRIPTION
 *
 * @author: Jessica Nierth
 * @date: 17.03.2019
 */

function getPermutations(word) {
    var results = [],
        strLength = word.length;

    if(strLength <= 0) {
        return [];
    }

    // If the length of a word
    if (strLength === 1)
    {
        results.push(word);
    }

    for (var i = 0; i < strLength; i++)
    {
        var firstChar = word[i];
        var otherChar = word.substring(0, i) + word.substring(i + 1);
        var otherPermutations = getPermutations(otherChar);

        for (var j = 0; j < otherPermutations.length; j++) {
            results.push(firstChar + otherPermutations[j]);
        }
    }

    return results;
}

var permutation = getPermutations('YES');
console.log("Total permutation: "+permutation.length);
console.log(permutation);

