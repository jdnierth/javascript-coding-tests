#What does the code below print out?
```
"use strict";
function sayHello(last_name) {
  console.log("Hello " + this + " " + last_name);
}
sayHello("Nierth");
```
* "Hello undefined Nierth"
* If `use strict` was not added the code would print out "Hello [[object window]] Nierth" 