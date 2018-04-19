var Details = (function Details() {

    var $content;

    function init() {
        $content = $("[rel=js-details]");
    }

    function loadPerson(e) {
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
        return classname.substring(classnameLength - 1, classnameLength);
    }

    return {
    	init: init,
        loadPerson: loadPerson

	}
})();