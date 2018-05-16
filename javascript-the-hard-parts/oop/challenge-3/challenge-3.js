"use strict";

(function () {

    function User(name, score) {
        this.name = name;
        this.score = score;
    }

    User.prototype.increment = function() {
        this.score++;
        console.log(this.score);
    };

    var user1 = new User('Will', 3);
    var user2 = new User('Sam', 12);

    console.log(user1.increment());
    console.log(user2.increment());

})();