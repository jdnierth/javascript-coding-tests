"use strict";

(function () {

    function userCreator(name, score) {
        // Object.create creates an empty object but whatever is being passed in will create a special bond
        // to the newly created object.
        var newUser = Object.create(userFunctionStore);

        newUser.name = name;
        newUser.score = score;

        return newUser
    }

    var userFunctionStore = {
      increment:function() {
          this.score++;
          console.log(this.score);
      }
    };

    var user1 = userCreator('Will', 3);
    var user2 = userCreator('Sam', 12);

    console.log(user1.increment());
    console.log(user2.increment());

    // The drawback of this approach is that everytime a new user is being created with userCreator the data and function will be copied in memory. Having a large number of users won't be an efficient use of memory space.

})();