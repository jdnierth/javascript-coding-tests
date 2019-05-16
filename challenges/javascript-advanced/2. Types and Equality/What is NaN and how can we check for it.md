#What is NaN?
* NaN stands for `Not a Number` but is of type `Number`
* It is used to define a number that isn`t a number, for example a result of a bad calculation `"hello" / 2`

#How can we check for NaN?
* Given that `NaN == NaN // false` and that it implicitly coerced, `isNaN` is not very reliable

##Option 1: Using JavaScript function isNaN
```
isNaN(NaN); // true
```
* `isNaN` is implicitly coerced e.g. `isNumber(Number("A"));`

##Option 2: Most reliable
```
var a = NaN;
a !== a; // true since NaN !== NaN - VALID test to check for NaN

var b = 1;
b !== b; // false  
```