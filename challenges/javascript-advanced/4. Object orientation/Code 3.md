#What does the code below print out?
```
"use strict";
(function() {
  console.log(this);
})();
```
* `undefined` because of `use strict`. 
* If `use strict` wouldn't be used it would log "window" 