// Option 1: Ineffcient as the addEventListener callback function will be copied and attached to every single li element
var todoList = document.getElementById("todo-list");
var listItems = todoList.getElementsByTagName("li");


for(var i = 0; i < listItems.length; i++) {
	listItems[i].addEventListener("click", callItem);
}

// Option 2: More efficient way of attaching event handlers since only one node will be registered and the capturing / bubbling phase will trigger the callback function
var todoList2 = document.getElementById("todo-list-2");
todoList2.addEventListener("click", callParent)

function callItem(e) {
	console.log("Event:", e.target);
	console.log("Event:", e.target.nodeName);
	console.log("Event:", e);
}


function callParent(e) {
	console.log("Event:", e.target);
	console.log("Event:", e.target.nodeName);
	console.log("Event:", e);
	
	if(e.target.nodeName == "A") {
		console.log("Link: ", e.target.href);
	}
}

