$(document).ready(function(){

	var $items = $("[rel=js-carousel] > [rel=js-content] > [rel=js-items]");
	var $content = $("[rel=js-details]");

	// on click of a carousel item, do an Ajax request for
	// the "details/2.html" (or whatever) file for the person
	// clicked, and load those contents into the `$content` div.
	$items.on('click', loadContent);

	// hint: you will probably want to use "event propagation"
	// (aka "event delegation"), by attaching a single event
	// handler the `$content` element rather than individual
	// event handlers to each item in the carousel.


	function loadContent(e) {
		var $trigger = $(e.target);

		var classname = $trigger.attr('rel');

		var number = getNumber(classname);

		$.ajax({
			url: 'details/' + number + '.html',
			dataType: 'text'
		}).then(function(content) {
			console.log('content');
			$content.html(content);
		}, function(e) {
			console.log('error: ', e);
		});
	}

	function getNumber(classname) {
        var classnameLength = classname.length;
        var number = classname.substring(classnameLength - 1, classnameLength);
        return number;
	}
});
