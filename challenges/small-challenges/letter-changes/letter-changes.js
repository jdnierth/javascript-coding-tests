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
    var tmp = currentValue.toLowerCase();

    switch(tmp) {
        case 'a':
            currentValue = 'b';
            break;
        case 'b':
            currentValue = 'c';
            break;
        case 'c':
            currentValue = 'd';
            break;
        case 'd':
            currentValue = 'E';
            break;
        case 'e':
            currentValue = 'f';
            break;
        case 'f':
            currentValue = 'g';
            break;
        case 'g':
            currentValue = 'h';
            break;
        case 'h':
            currentValue = 'I';
            break;
        case 'i':
            currentValue = 'j';
            break;
        case 'j':
            currentValue = 'k';
            break;
        case 'k':
            currentValue = 'l';
            break;
        case 'l':
            currentValue = 'm';
            break;
        case 'm':
            currentValue = 'n';
            break;
        case 'n':
            currentValue = 'O';
            break;
        case 'o':
            currentValue = 'p';
            break;
        case 'p':
            currentValue = 'q';
            break;
        case 'q':
            currentValue = 'r';
            break;
        case 'r':
            currentValue = 's';
            break;
        case 's':
            currentValue = 't';
            break;
        case 't':
            currentValue = 'U';
            break;
        case 'u':
            currentValue = 'v';
            break;
        case 'v':
            currentValue = 'w';
            break;
        case 'w':
            currentValue = 'x';
            break;
        case 'x':
            currentValue = 'y';
            break;
        case 'y':
            currentValue = 'z';
            break;
        case 'z':
            currentValue = 'A';
            break;
    }

    return currentValue;
}

console.log(letterChange('hello there'));