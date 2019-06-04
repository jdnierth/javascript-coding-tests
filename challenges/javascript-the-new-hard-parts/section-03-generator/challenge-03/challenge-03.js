// Challenge 3
// Write code to iterate through an entire array using your nextIterator and sum the values.

function nextIterator(arr) {
    var i = 0;

    return {
        next: function () {
            var elem = arr[i];
            i++;

            if (elem > 0) {
                return {
                    value: elem,
                    done: true,
                };
            } else {
                return {
                    value: undefined,
                    done: false
                }
            }
        }
    }
}

function sumArray(arr) {
    var sum = 0,
        iterator = nextIterator(arr),
        nextElem = iterator.next();

    while (iterator.next().done == true) {
        sum += nextElem.value;
    }
}


const array4 = [1, 2, 3, 4];
console.log(sumArray(array4)); // -> should log 10
