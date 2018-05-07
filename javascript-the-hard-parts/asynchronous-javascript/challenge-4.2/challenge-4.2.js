"use strict";

(function () {

    var customInterval = setInterval(function() {
		console.log('Interval Hello');
		
		setTimeout(function() {
			clearInterval(customInterval);
		},10000) 
		
	},2000);
	

})();