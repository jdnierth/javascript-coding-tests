#Does JavaScript pass a variable by value or by reference?
* Primitive Types (strings, numbers, booleans) are passed by value
* Complex types such as object are passed by referenced

#What does pass by value mean?
* If you change a value of a primitive type inside a function, that will not change the value of the outer scope
* Passing a copy of the variable!

``` 
var a = 1;
function foo(a) {
    a = 2;    
}
foo(a);
console.log(a);
```
* `console.log` will print 1 since the assignment within the function foo will not affect the variable in the outer 
scope.

#What does pass by reference mean?
* No copy but a reference
* When passing a complex type, something that points to something such as an object it will change the object in the 
outer scope.

``` 
var a = {};
    
function foo(a) {
    a.foo = "Hello";
}

foo(a);

console.log(a);
```
* `console.log` will print `foo` as being a part of the variable a since it is being passed by reference and will 
change the variable in the outer scope.

#Gotcha!
```
var a = { "foo": "bar" };
    
function foo(a) {
    a = { "bar": "you" }
}

foo(a);

console.log(a);
```
* `console.log` will print out the outer a since it can not be re-assigned in the outer scope, only the content of 
the object it points to can be changed. Add a property or change a property of an object.