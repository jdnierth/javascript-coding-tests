#We want AppleProduct to inherit from Device. How do we make the functions created for Device available to AppleProduct?
```
     function Device(kind) {
       this.kind =  kind;
     }
     
     Device.prototype.printKind = function () {
       console.log(this.kind);
     };
     
     function AppleProduct(name, kind) {
       this.name = name;
        Device.call(this, kind);
     }
     
     // A
     AppleProduct.prototype = Object.create(Device.prototype);
     
     // B
     AppleProduct.prototype.__proto__ = Device.prototype;
     
     // C
     Nothing the functions are already available!
 ```

* `A` 