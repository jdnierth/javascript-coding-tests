"use strict";

(function () {

console.log('I am at the beginning of the code');

setTimeout(print,0);

function print() {
	console.log('I am in the setTimeout callback function');
}

console.log('I am at the end of the code');

})();