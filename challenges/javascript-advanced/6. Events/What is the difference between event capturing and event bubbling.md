#What is the difference between event capturing and event bubbling?

* User clicks, the event is fired by the root object which is window and then travels down to the button, touching 
every element on its way. Then it bubbles back up to the top again.
* Phase root to target: Event capturing phase
* target back to root: Event bubbling phase

* If you add an event listener you can define to which phase you want to listen to. By default it will listen to the 
event bubbling phase.
<element>.addEventListener("click", function() {}) // bubbling phase
<element>.addEventListener("click", function() {}, false) // bubbling phase
<element>.addEventListener("click", function() {}, true) // capturing phase