#What is the difference between `stopPropagation` and `preventDefault`
* `stopPropagation` stops the event to either proceeding the event capturing phase or event bubbling phase
* `preventDefault` doesn't stop the event propagation but stops the browsers native behavior, e.g. following an anchor 
tag to redirect to the link or preventing a checkbox of getting checked.