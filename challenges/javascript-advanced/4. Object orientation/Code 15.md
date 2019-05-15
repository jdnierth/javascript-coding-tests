#What would the below code print out?
```
     function Device(kind) {
       this.kind =  kind;
     }
     
     Device.prototype.printKind = function () {
       console.log(this.kind);
     };
     
     var product = new Device("music player");
     product.printKind();
 ```
 * `music player`
 * Javascript looks for the printKind function and finds it on the prototype of the product object.