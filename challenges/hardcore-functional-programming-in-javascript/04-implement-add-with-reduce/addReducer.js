var inputList = [2,4,5];

function add(a,b) {
    return a + b;
}

function addReducer(list) {
    return list.reduce(add);
}

console.log('Input: ', inputList, ' Output: ', addReducer(inputList)); // 11;

////////////////////////////////////

function double(a) {
    return a * 2;
}

function doubleMap(list) {
    return list.map(double);
}

console.log('Input: ', inputList, ' Output: ', doubleMap(inputList)); // [4, 8, 10]