#What will the below code print out?

```
    "use strict";
    
    var a = 1;
    var b = {};
    
    function foo(x, y) {
        x = 2;
        y.moo = 3;
    }
     
    foo(a, b);
    console.log("a = " + a + "; b = " + JSON.stringify(b));
```
* `a = 1; b = { moo: 3 }`