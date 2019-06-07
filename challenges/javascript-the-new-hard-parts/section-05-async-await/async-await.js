function doWhenDataReceived(value) {
	returnNextElement.next(value);
}

function *createFlow() {
	const data = yield fetch("https://twitter.com/will/tweets");
	console.log(data);
}

const returnNextElement = createFlow();
const futureData = returnNextElement.next();

futureData.then(doWhenDataReceived);

// INFO
// We can use the ability to pause createFlow's running and then continue it only when our data returns
// We get to control when we return back to createFlow and continue executing - by setting up the trigger to do so
// (returnNextElement.next()) to be run by our function that was triggered by the promise resolution (when the value
// returned from twitter).

// Note: this will automated by async await