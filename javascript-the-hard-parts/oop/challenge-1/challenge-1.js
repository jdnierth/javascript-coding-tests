"use strict";

(function () {

    function userCreator(name, score) {
        var newUser = {};

        newUser.name = name;
        newUser.score = score;

        newUser.increment = function() {
            newUser.score++;
        };

        return newUser
    }

    var user1 = userCreator('Will', 3);
    var user2 = userCreator('Sam', 12);

    user1.increment();
    user2.increment();

    // The drawback of this approach is that everytime a new user is being created with userCreator the data and function will be copied in memory. Having a large number of users won't be an efficient use of memory space.

})();