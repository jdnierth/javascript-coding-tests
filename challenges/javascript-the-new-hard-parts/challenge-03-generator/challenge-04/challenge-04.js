// Challenge 4
// Create an iterator with a next method that returns each value of a set when .next is called
// @documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
function setIterator(set) {

    // Set contains an iterator
    var iter = set.values();

    return {
        next: function() {
            return iter.next().value;
        }
    }

}

const mySet = new Set('hey');
const iterateSet = setIterator(mySet);

console.log(iterateSet.next()); // -> should log 'h'
console.log(iterateSet.next()); // -> should log 'e'
console.log(iterateSet.next()); // -> should log 'y'