#What is the result of the code below?
```
a;              //1
b;              //2
var a = b;
var b = 2;
b;              //3
c;              //4
```
* 1: undefined
* 2: undefined
* 3: 2
* 4: undefined in non strict mode and ReferenceError in strict mode with c is not defined
* Hoisting happens at compile time
* Let isn't hoisted

#How does the compiler actually read the code
* The engine will compile the code first before it executes it
```
var a;
var b;
a;
b;
a = b;
var b = 2;
b;
c;
```
