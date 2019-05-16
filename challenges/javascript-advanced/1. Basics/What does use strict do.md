#What does `use strict` do?
* Allows you to place a program into a strict operating context
* It makes debugging easier
* Error that would have been ignored or would have failed silently will trigger errors now

#How do you activate it?
* Add "use strict" as a string to global or within a function

#Why is it a string?
* When it was introduced the older browser would have failed. As a string the older browsers would have ignored it an
 the newer ones would have interpreted the browser into strict mode
 
#What errors will "use strict" mode catch?

## Forgetting var keyword
* Using a variable before it is defined now causes an error `ReferenceError: myVar is not defined`. Without using it it 
would have automatically turned into a global variable
 ```
 myVar = 1;
 ```
 * would have created window.myVar = 1 in the browser
 * programs would overwrite their values depending on the order of inclusion of those scripts.
 
## Prevents you from using words that are preserved for future versions of JavaScript
* var let = 1: `Unexpected strict mode reserved word`
* currently used in EcmaScript 6

## 
* you can not delete variables, functions or function arguments in use strict mode
```
"use strict";

var foo = 1;
delete foo; // Delete of an unqualified identifier in strict mode 

function moo() {}
delete moo;  // Delete of an unqualified identifier in strict mode

function bar(arg) {
  delete arg; // Delete of an unqualified identifier in strict mode
}
```

## Keyword eval
```
"use strict"
var eval = 1; //Unexpected eval or arguments in strict mode. Without use strict

// WITHOUT USE STRICT
var a = 2;
eval("var a = 1;") // expression will leak out to a=1;
console.log(a) // 1;

// WITH USING STRICT
"use strict"
var a = 2;
eval("var a = 1;") // Any variables used within the eval code will not leak out overwriting other variables 
console.log(a);     // 2

```

