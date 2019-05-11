#Q: What will the following code print out and why?

```
var person = {
    name:"Jessica",
    sayHello: function() {
        console.log(this); // 1.
        
        function checkMe() {
            this.foo = 1; 
            console.log(this); // 2. 
        }
        
        checkMe();
        
        console.log(this.foo) // 3.
    }
}

person.sayHello();
```
* The value of `this` within the first `console.log` will be the object `person`
* The value of `this` within the second `console.log` will be the global scope (window).
* The value of `this` of the third `console.log` will be undefined because `this.foo` within `checkMe` will be put on the
 global object (window) but the third `console.log` will request the variable `foo` on the `person` object.
 
#Q: How can you prevent the `this` keyword being the global object?

## Solution 1: Make sure the code runs in the `use strict` mode.
```
var person = {
    name:"Jessica",
    sayHello: function() {
        "use strict";
        
        console.log(this); // 1.
        
        function checkMe() {
            console.log(this); // 2. 
            this.foo = 1; 
        }
        
        checkMe();
        
        console.log(this.foo) // 3.
    }
}

person.sayHello();
```
* In this scenario the code in line 40 `this.foo = 1` will fail with a `TypeError: Cannot set property foo of 
undefined` since the `use strict` mode will prevent the keyword `this` to be set on the global object.

## Solution 2: Use self
```
var person = {
    name:"Jessica",
    sayHello: function() {
        var self = this;
        
        console.log(self); // 1.
        
        function checkMe() {
            console.log(self); // 2. 
            self.foo = 1; 
        }
        
        checkMe();
        
        console.log(self.foo) // 3.
    }
}

person.sayHello();
```
* In this scenario the code the property `foo` will be attached to what the value of the `this` keyword will be bound
 to which is the object `person`.  