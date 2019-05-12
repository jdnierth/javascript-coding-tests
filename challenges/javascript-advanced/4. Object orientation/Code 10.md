#What does the code below print out?
```
"use strict";

var sayHello = function(last_name) {
  console.log("Hello " + this + " " + last_name);
}.bind("Nierth");

sayHello("Jessica");
```

* "Hello Jessica Nierth"