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
var elem1 = returnNextElement();
var elem2 = returnNextElement();

// Uses closure to keep track of the index and close over the list variable.


