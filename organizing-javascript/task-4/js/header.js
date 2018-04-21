var Header = (function Header() {

    var $modal;

    window.EVT.on("evt:init", init);

    function init() {
        $modal = $('#modal');
        initHeader();
    }

    function initHeader() {
        $("[rel=js-header]").on('click', headerLinkClicks);
        $("[rel=js-modal-close]").on('click', closeModal);
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

    function closeModal() {
        $modal.hide();
    }

})();