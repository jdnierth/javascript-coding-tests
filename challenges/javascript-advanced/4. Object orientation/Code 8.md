#What does the code below print out?
```
"use strict";
function sayHello(last_name) {
  console.log("Hello " + this + " " + last_name);
}
sayHello.apply("Jessica",["Nierth"]);
```
* "Hello Jessica Nierth"
* The first param to the apply function is used as the "this" variable, the array is then used for each of the params to the function being called
