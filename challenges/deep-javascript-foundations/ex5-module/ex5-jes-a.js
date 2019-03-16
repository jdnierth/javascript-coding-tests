var App = (function(UI) {
	var projects = [];

	initUI();

// hard coding some initial data
	addProject("client features");
	addProject("overhead");
	addProject("backlog");

// **************************

	function addProject(description) {
		var projectEntryData;

		{ var projectId;
			projectId = Math.round(Math.random()*1E4);
			projectEntryData = { id: projectId, description: description, work: [], time: 0 };
		}
		projects.push(projectEntryData);

		addProjectToList(projectEntryData);
		addProjectSelection(projectEntryData);
	}

	function findProjectEntry(projectId) {
		for (var i = 0; i < projects.length; i++) {
			if (projects[i].id === projectId) {
				return projects[i];
			}
		}
	}

	function addWorkToProject(projectId,description,minutes) {
		projects.time = (projects.time || 0) + minutes;

		var projectEntryData = findProjectEntry(projectId);
		projectEntryData.time = (projectEntryData.time || 0) + minutes;

		// create a new work entry for the list
		var workEntryData = { id: projectEntryData.work.length + 1, description: description, time: minutes };
		projectEntryData.work.push(workEntryData);

		// multiple work entries now?
		if (projectEntryData.work.length > 1) {
			// sort work entries in descending order of time spent
			projectEntryData.work = projectEntryData.work.slice().sort(function sortTimeDescending(a,b){
				return b.time - a.time;
			});
		}

		addWorkEntryToList(projectEntryData,workEntryData);
		updateProjectTotalTime(projectEntryData);
		updateWorkLogTotalTime();
	}

	var publicAPI = {
		addProject: addProject,
		addWorkToProject: addWorkToProject
	};

	return publicAPI;
});
