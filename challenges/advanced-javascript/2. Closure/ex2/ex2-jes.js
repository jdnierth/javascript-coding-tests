var NotesManager = (function NotesManager() {

	var publicAPI = {
		init: init,
		setData: setNotes
	},
	options,
	notes = [];

	function addNote(note) {
		options.notes.prepend(
			$("<a href='#'></a>")
				.addClass("note")
				.text(note)
		);
	}

	function addCurrentNote() {
		console.log('options: ', options);
		var current_note = options.newNotes.val();

		if (current_note) {
			notes.push(current_note);
			addNote(current_note);
			options.newNotes.val("");
		}
	}

	function showHelp() {
		$("#help").show();

		document.addEventListener("click",function __handler__(evt){
			evt.preventDefault();
			evt.stopPropagation();
			evt.stopImmediatePropagation();

			document.removeEventListener("click",__handler__,true);
			hideHelp();
		},true);
	}

	function hideHelp() {
		$("#help").hide();
	}

	function handleOpenHelp(evt) {
		if (!$("#help").is(":visible")) {
			evt.preventDefault();
			evt.stopPropagation();

			showHelp();
		}
	}

	function handleAddNote(evt) {
		addCurrentNote();
	}

	function handleEnter(evt) {
		if (evt.which == 13) {
			addCurrentNote();
		}
	}

	function handleDocumentClick(evt) {
		$("#notes").removeClass("active");
		$("#notes").children(".note").removeClass("highlighted");
	}

	function handleNoteClick(evt) {
		evt.preventDefault();
		evt.stopPropagation();

		options.notes.addClass("active");
		options.notes.children(".note").removeClass("highlighted");
		$(evt.target).addClass("highlighted");
	}

	function init(options) {
		setOptions(options);

		// build the initial list from the existing `notes` data
		var html = "";
		for (i=0; i<notes.length; i++) {
			html += "<a href='#' class='note'>" + notes[i] + "</a>";
		}
		options.notes.html(html);

		// listen to "help" button
		options.helperNotes.bind("click",handleOpenHelp);

		// listen to "add" button
		options.addNotes.bind("click",handleAddNote);

		// listen for <enter> in text box
		options.newNotes.bind("keypress",handleEnter);

		// listen for clicks outside the notes box
		$(document).bind("click",handleDocumentClick);

		// listen for clicks on note elements
		options.notes.on("click",".note",handleNoteClick);
	}

	function setNotes(notes) {
		notes = notes.concat(notes);
	}

	function setOptions(options) {
		options = options;
		console.log(' set options: ', options);
	}

	return publicAPI;

})();

// Assuming this data is coming from database
var notes = [
	"This is the first note I've taken!",
	"Now is the time for all good men to come to the aid of their country.",
	"The quick brown fox jumped over the moon."
];

NotesManager.setData(notes);
$(document).ready(function() {
	NotesManager.init({
		notes: $('#notes'),
		helperNotes: $('#open_help'),
		addNotes: $('#add_note'),
		newNotes: $('#new_note')
	})
});
