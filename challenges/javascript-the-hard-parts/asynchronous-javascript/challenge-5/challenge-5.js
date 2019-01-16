"use strict";

(function () {

    function everyXsecsForYsecs(cb, intervalSecs, totalSecs) {
		var inter = setInterval(function() {
			cb();
			
			setTimeout(function() {
				clearInterval(inter);
			},totalSecs);
		},intervalSecs);
	}
	
	function sayHowdy() {
		console.log('Howdy');
	}

	everyXsecsForYsecs(sayHowdy, 1, 5);
})();