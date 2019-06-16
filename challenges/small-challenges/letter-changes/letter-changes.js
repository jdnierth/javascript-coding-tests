/**
 * Change every letter of the string to the one that follows it and capitalize the vowels
 * Z should turn to A
 * ex. 'hello there' === 'Ifmmp UIfsf'
 */
function letterChange(sentence) {
    var string = sentence.split('');

    return string.map(letterTransformation).join('');
}

function letterTransformation(currentValue, index) {
    if (currentValue.trim() != '') {

        // Returns the character code of the current value
        var newCharCode = (currentValue.charCodeAt() + 1),
            newCharacter = String.fromCharCode(newCharCode);

        switch (newCharacter) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                newCharacter = newCharacter.toUpperCase();
                break;
        }
    } else {
        return currentValue;
    }
    return newCharacter;
}

console.log(letterChange('hello there'));