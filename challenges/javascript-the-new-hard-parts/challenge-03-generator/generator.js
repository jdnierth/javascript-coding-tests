function *createFlow() {
	yield 4
	yield 5
	yield 6
}

var returnNextElement = createFlow();
var elem1 = returnNextElement.next();
var elem2 = returnNextElement.next();

// INFO:
// As opposed to the JavaScript built in iterator the generators don't provide an object with the method "next" on
// them that return an object with the next element but rather provide a function

// call to createFlow does not create a new execution context but instead it returns out a special generator object
// with the next function on it.

// Once returnNextElement.next() in line 8 is been called, a new execution context will be created.

// yield is a keyword that is like return that exits out of a function but it just suspends the execution context.

// the next call to returnNextElement.next() will use the same execution context from the previous call.