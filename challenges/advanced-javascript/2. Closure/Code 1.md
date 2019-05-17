#Is the following Code a Closure?
```
var foo = (function() {
    var o = { bar: "bar" };
    
    return { obj: o};
})();

console.log(foo.obj.bar);
```
* No it is an object reference but not a closure
* It is not a closure since `foo` returns an `object` not a function (that should remember its lexical scope even when 
the function is executed outside its lexical scope).
* There is not a function being transported out