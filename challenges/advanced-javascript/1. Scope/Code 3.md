#What is the result of the code below?
```
var a = b();
var c = d();

a;                  // 1
c;                  // 2

function b() {
    return c;
}

var d = function() {
    return b();
} 
```

* The code below shows how the compiler will read the code
* 1 undefined
* 2 undefined is not a function

```
function b() {
    return c;
}

var a;
var c;
var d;

a = b();
c = d();

a;
c;

d = function() {
    return b();
}
```