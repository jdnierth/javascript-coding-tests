var Header = (function () {

    var $modal;

    function init() {
        $modal = $('#modal');
        initHeader();
    }

    function initHeader() {
        $("[rel=js-header]").on('click', headerLinkClicks);
    }

    function headerLinkClicks(e) {
        e.preventDefault();

        var $anchor = $(e.target);

        var file = $anchor.attr('href');

        loadFile(file);
    }

    function loadFile(fileName) {

        $.ajax({
            url: fileName,
            dataType: 'text'
        }).then(setModal);
    }

    function setModal(content) {
        $modal.html(content).show();
    }

    return {
        init: init
    }

})();

$(document).ready(Header.init);
