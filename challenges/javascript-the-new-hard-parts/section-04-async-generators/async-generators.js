async function createFlow() {
	console.log("Me first");
	const data = await fetch("https://twitter.com/tweet/1");
	console.log(data);
}

createFlow();
console.log("Me second!");

// INFO
// Async/await simplifies and fixes the inversion of control problem of callbacks
// No need for a trigger function on the promise resolution, instead we auto trigger the resumption of the
// createFlow execution (this functionality is still added to the microtask queue though)

// await is throwing us out of the createFlow execution context

// Will print out
// "Me first"
// "Me second!"
// "Hi" - Message from twitter