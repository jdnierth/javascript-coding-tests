function *createFlow() {
	const num = 10;
	const newNum = yield num;
	yield 5 + newNum;
	yield 6;
}

var returnNextElement = createFlow();
var elem1 = returnNextElement.next(); // 10
var elem2 = returnNextElement.next(2); // 7

// INFO:
// Generators allow us to dynamically set what data flows to us (when we run returnNextElements function)

// call to returnNextElement.next() in line 9 will create a new execution context
// line 3 will return 10 right away, even before it will be stored in newNum.

// the call to returnNextElement.next(2) will commence at line 3 and what will be passed in (2) will be come the
// newly evaluated number of the newNum constant.

// If the code will call returnNextElement.next() it would return 6 of line 5.

// Note: Generator also return an object with the properties of value and done as with the iterator before.

// Why is a generator considered being powerful?
// you can potentially create a generator that is infinite (e.g. for calculating fibonnaci numbers) as long as it is
// yielding.