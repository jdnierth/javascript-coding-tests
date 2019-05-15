#We want AppleProduct to inherit from Device. Whats the best method of setting the kind property?
```
     function Device(kind) {
       this.kind =  kind;
     }
     
     function AppleProduct(name,kind) {
       this.name = name;
     }
     
     //A)
     function AppleProduct(name,kind) {
       this.name = name;
       this.kind = kind;
     }
     
     //B)
     function AppleProduct(name,kind) {
       this.name = name;
       Device.call(this, kind);
     }
     
     //C)
     function AppleProduct(name,kind) {
       this.name = name;
       Device(kind);
     }
 ```
* `B` We "re-use" the Device function constructor