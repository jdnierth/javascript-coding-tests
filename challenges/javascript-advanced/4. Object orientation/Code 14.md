#What would the below code print out?
```
     function Device(kind) {
       this.kind =  kind;
       this.printKind = function () {
         console.log(kind)
       }
     }
     var product = new Device("music player");
     product.kind = "radio";
     product.printKind();
```
* `music player`
* The `printKind` function is a closure and refers to the variable kind passed in the constructor.