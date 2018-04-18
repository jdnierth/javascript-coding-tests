$(document).ready(function() {

    var $modal = $('#modal');

    initHeader();
    
    function initHeader() {
        $('.js-header a').on('click', getFile);
    }

    function getFile(e) {
        e.preventDefault();

        var $anchor = $(e.currentTarget);

        var file = $anchor.attr('href');

        loadFile(file);
    }

    function loadFile(fileName) {

        $.ajax({
            url: fileName,
            dataType:'text'
        }).then(setModal);
    }

    function setModal(content) {
        $modal.html(content).show();
    }
});

