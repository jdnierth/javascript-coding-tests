// Challenge 2
// Create an iterator with a next method that returns each value of the array when .next is called.
function nextIterator(arr) {
    var i = 0;
    return {
        next: function() {
            var elem = arr[i];
            i++;
            return elem;
        }
    }
}

const array3 = [1, 2, 3];
const iteratorWithNext = nextIterator(array3);
console.log(iteratorWithNext.next()); // -> should log 1
console.log(iteratorWithNext.next()); // -> should log 2
console.log(iteratorWithNext.next()); // -> should log 3

