#What does the code below print out?
```
"use strict";
var animal = {
  kind: "Cow"
  which: function () {
    console.log(this.kind);
  }
};
animal.which();
```
* `"Cow"`. 