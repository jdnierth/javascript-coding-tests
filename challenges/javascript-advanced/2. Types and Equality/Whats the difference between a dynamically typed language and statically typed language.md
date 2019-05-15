#What is the difference between a dynamically typed languange and a statically typed language?
* In a statically typed language like Java you have to declare the data type at the time of declaration
* You have to declare what each variable can hold
* The type of a variable is defined statically when the code is being written
* Pro: compiler catching issues earlier
```
String a = "Hello";
a = 1; // Will throw an error
```

* In a dynamically typed language like JavaScript
* The type of the variable are determined dynamically at run time
* The type of the variables are actually inverred by the value you assign to the variable
* Pro: Quicker to get up and running
* Con: Catching errors at run time
```
var a = "hello";
a = 1;
```