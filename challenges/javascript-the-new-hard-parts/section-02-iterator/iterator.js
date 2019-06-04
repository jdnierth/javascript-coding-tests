function createFunction(list) {
	var i = 0;

	function inner() {
		var element = list[i];
		i++;
		return element;
	}

	return inner;
}

var returnNextElement = createFunction([4,5,6]);
var elem1 = returnNextElement.next();
var elem2 = returnNextElement.next();

// INFO:
// JavaScripts built in iterators are actually objects with a next method that when called returns the next element
// from the "stream" or "flow"
// Uses closure to keep track of the index and close over the list variable.
// The built in iterators actually produce the next element in the format:
// {
//    value: 4,
//	  done: false
// }
//  or
// {
//    value: undefined,
//	  done: true
// }

