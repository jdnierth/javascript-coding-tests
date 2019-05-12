#What is the result of the following code?

```
"use strict";
function sayHello(last_name) {
  console.log("Hello " + this + " " + last_name);
}.bind("Jessica");

sayHello("Nierth");
```
* `bind` can only be used on functions after they have been created and assigned to a variable
* `Uncaught Syntax Error: Unexpected token`