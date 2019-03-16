var UI = (function() {

	var projectTemplate = "<div class='project-entry'><h3 class='project-description' rel='js-project-description'></h3><ul class='work-entries' rel='js-work-entries'></ul><span class='work-time' rel='js-work-time'></span></div>";
	var workEntryTemplate = "<li class='work-entry'><span class='work-time' rel='js-work-time'></span><span class='work-description' rel='js-work-description'></span></li>";

	var helpers = new Helpers();

	var maxVisibleWorkDescriptionLength = 20;

	var $workEntryForm;
	var $workEntrySubmit;
	var $totalTime;
	var $projectList;

	var $workEntrySelectProject;
	var $workEntryDescription;
	var $workEntryTime;

	function initUI() {
		$workEntryForm = $("[rel*=js-work-entry-form");
		$workEntrySelectProject = $workEntryForm.find("[rel*=js-select-project]");
		$workEntryDescription = $workEntryForm.find("[rel*=js-work-description]");
		$workEntryTime = $workEntryForm.find("[rel*=js-work-time]");
		$workEntrySubmit = $workEntryForm.find("[rel*=js-submit-work-entry]");
		$totalTime = $("[rel*=js-total-work-time]");
		$projectList = $("[rel*=js-project-list]");

		$workEntrySubmit.on("click",submitNewWorkEntry);
	}

	function submitNewWorkEntry() {
		var projectId = $workEntrySelectProject.val();
		var description = $workEntryDescription.val();
		var minutes = $workEntryTime.val();

		if (!helpers.validateWorkEntry(description,minutes)) {
			alert("Oops, bad entry. Try again.");
			$workEntryDescription[0].focus();
			return;
		}

		$workEntryDescription.val("");
		$workEntryTime.val("");
		addWorkToProject(Number(projectId),description,Number(minutes));
		$workEntryDescription[0].focus();
	}

	function addProjectToList(projectEntryData) {
		var $project = $(projectTemplate);
		$project.attr("data-project-id",projectEntryData.id);
		$project.find("[rel*=js-project-description]").text(projectEntryData.description);
		$projectList.append($project);

		projectEntryData.$element = $project;
	}


	function addProjectSelection(projectEntryData) {
		var $option = $("<option></option>");
		$option.attr("value",projectEntryData.id);
		$option.text(projectEntryData.description);
		$workEntrySelectProject.append($option);
	}

	function addWorkEntryToList(projectEntryData,workEntryData) {
		var $projectEntry = projectEntryData.$element;
		var $projectWorkEntries = $projectEntry.find("[rel*=js-work-entries]");

		// create a new DOM element for the work entry
		var $workEntry = $(workEntryTemplate);
		$workEntry.attr("data-work-entry-id",workEntryData.id);
		$workEntry.find("[rel*=js-work-time]").text(helpers.formatTime(workEntryData.time));
		setupWorkDescription(workEntryData,$workEntry.find("[rel*=js-work-description]"));

		workEntryData.$element = $workEntry;

		// multiple work entries now?
		if (projectEntryData.work.length > 1) {
			{ var entryIdx;
				// find where the entry sits in the new sorted list
				for (var i = 0; i < projectEntryData.work.length; i++) {
					if (projectEntryData.work[i] === workEntryData) {
						entryIdx = i;
						break;
					}
				}

				// insert the entry into the correct location in DOM
				if (entryIdx < (projectEntryData.work.length - 1)) {
					projectEntryData.work[entryIdx + 1].$element.before($workEntry);
				}
				else {
					projectEntryData.work[entryIdx - 1].$element.after($workEntry);
				}
			}
		}
		// otherwise, just the first entry
		else {
			$projectEntry.addClass("visible");
			$projectWorkEntries.append($workEntry);
		}
	}

	function updateProjectTotalTime(projectEntryData) {
		var $projectEntry = projectEntryData.$element;
		$projectEntry.find("> [rel*=js-work-time]").text(helpers.formatTime(projectEntryData.time)).show();
	}

	function updateWorkLogTotalTime() {
		if (projects.time > 0) {
			$totalTime.text(helpers.formatTime(projects.time)).show();
		}
		else {
			$totalTime.text("").hide();
		}
	}

	function setupWorkDescription(workEntryData,$workDescription) {
		$workDescription.text(helpers.formatWorkDescription(workEntryData.description));

		if (workEntryData.description.length > maxVisibleWorkDescriptionLength) {
			$workDescription
				.addClass("shortened")
				.on("click",function onClick(){
					$workDescription
						.removeClass("shortened")
						.off("click",onClick)
						.text(workEntryData.description);
				});
		}
	}

	var publicAPI = {
		init: initUI,
		addProjectToList: addProjectToList,
		addProjectSelection: addProjectSelection,
		addWorkEntryToList: addWorkEntryToList,
		updateProjectTotalTime: updateProjectTotalTime,
		updateWorkLogTotalTime: updateWorkLogTotalTime
	};

	return publicAPI;
});

