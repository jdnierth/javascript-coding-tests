#What does the code below print out?
```
// What does the below code print out?
"use strict";
var animal = {
  kind: "Cow"
  which: function () {
    console.log(this.kind);
  }
};
var animalFunc = animal.which;
animalFunc();
```
* Because of `use strict` and not calling the function directly from the animal object, `this` is now undefined. The 
code will throw an error `Unexpected identifier`. 