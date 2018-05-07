"use strict";

(function () {
	var count = 0;
	var max = 3;

    var customInterval = setInterval(function() {
		console.log('Interval Hello');
		
		setTimeout(function() {
			clearAllIntervals();
		},10000) 
		
	},2000);
	
	
	function clearAllIntervals() {
	  for (let i = 0; i < 1000; i++) {
		clearInterval(i);
	  }
	}

})();