#What does the code below print out?
```
"use strict";
function sayHello(last_name) {
  console.log("Hello " + this + " " + last_name);
}
sayHello.apply("Jessica",["Nierth"]);
```
* "Hello Jessica Nierth"
