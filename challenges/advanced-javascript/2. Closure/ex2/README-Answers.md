# Instructions

1. In this exercise, you will modify existing code for a simple note taking app. You will not add/remove functionality per se, but instead organize the code into a more proper module design and make it more flexible/reusable.
* See code

2. Using what you learned about closure and the module pattern, modify your previous code to wrap all the functionality up into a simple object (call it "NotesManager" or something appropriate), with a simple API, consisting of:
  - an `init()` method, which you will call from the outside when jQuery's `document.ready` event is fired, and pass in the data from the "database".
  - a public method to add in notes "in bulk" after retrieval from the "database". hint: this can/should be called **before** you run the "init" method.
* See code 

3. Make sure you have a "private" storage of the `notes` data list inside your module. Why is it a good idea to keep the data "private" inside the module?
*

4. What do you notice about the structure of this code as it relates to the DOM access and the usage of jQuery? Would it make sense to "generalize" this code so that the module didn't have hardcoded into it the various DOM elements it would operate on? Explore how you would modify the code in this fashion. What are the benefits and tradeoffs?
* Downside of having the node references inside the module itself is that it then requires the HTML to have exactly 
those items in the DOM. Whenever the HTML changes, the inside of the module has to change
* When abstracting the the DOM access out of the module, only the instantiation of the module would have to update 
the DOM references without having to update the inside of the module code.
* Passing through the jQuery references also has the advantage that the dom traversal gets reduced