#Why doesn't a callback inside a loop behave as expected?
* Because at the time of when the callback function is being executed it references the current value of the 
variables at the time of execution not the time of creation.
* To fix this the variable can be put inside a closure with an IIFE or the use of the let keyword within the loop.