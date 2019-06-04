// Challenge 5
// Create an iterator with a next method that returns an array with two elements (where the first element is the
// index and the second is the value at that index) when .next is called.

function indexIterator(arr) {
    var i = 0;

    return {
        next: function() {
            if(isNotEmpty(arr[i])) {
                var a = [];

                // push the key
                a.push(i);

                // push the value
                a.push(arr[i]);

                i++;

                return a;
            }
        }
    }
}

function isNotEmpty(value) {
    return Boolean(value);
}

const array5 = ['a', 'b', 'c', 'd'];
const iteratorWithIndex = indexIterator(array5);
console.log(iteratorWithIndex.next()); // -> should log [0, 'a']
console.log(iteratorWithIndex.next()); // -> should log [1, 'b']
console.log(iteratorWithIndex.next()); // -> should log [2, 'c']



