function fakeAjax(url,cb) {
	var fake_responses = {
		"file1": "The first text",
		"file2": "The middle text",
		"file3": "The last text"
	};
	var randomDelay = (Math.round(Math.random() * 1E4) % 8000) + 1000;

	console.log("Requesting: " + url);

	setTimeout(function(){
		cb(fake_responses[url]);
	},randomDelay);
}

function output(text) {
	console.log(text);
}

// **************************************
// The old-n-busted callback way
var responses = {};

function getFile(file, cb) {
	fakeAjax(file,function(text){
		orderResponses(file, text);
	});
}

function orderResponses(filename, content) {

	// Add all fake responses to a variable for reference
	if(!responses[filename]) {
		responses[filename] = content;
	}

	// The order in which the files have to be render with
	var order = ["file1", "file2", "file3"];

	for(var i = 0, len = order.length; i < len; i++) {

		// If the response has been found in the order array, print it.
		if(order[i] in responses) {
			if(responses[order[i]] !== true) {
				// Print the file.
				output(responses[order[i]]);
				// Set a flag to differentiate if a file has been rendered
				responses[order[i]] = true;
            }
		} else {
			return;
		}
	}

	output('Complete!');
}

// request all files at once in "parallel"
getFile("file1");
getFile("file2");
getFile("file3");