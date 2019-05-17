#What is the classical and the advanced module pattern in JavaScript
1. The classical module pattern
```
var foo = (function foo() {
    var o =  { bar: "bar"; }
    
    return {
        bar: function bar() {
            console.log(o);
        }
    }
})(),
```

2. The advanced module pattern
```
var foo = (function foo() {
    var o =  { bar: "bar"; }
    
    var publicAPI =  {
        bar: function bar() {
                console.log(o);
            }
    }
    
    return publicAPI
})(),
```

#What are the pros of the advanced module pattern vs the classical module pattern?
1. You can update the publicAPI of the advanced module pattern at run time since you are keeping a reference to it 
whereas this is not possible with the classical module pattern
2. Opinionated: The advanced module pattern is easier to read in regards of identifying the public API.