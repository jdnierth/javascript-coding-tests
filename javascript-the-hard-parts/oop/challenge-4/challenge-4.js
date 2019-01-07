"use strict";

(function () {

    class User{
        constructor(name, score) {
            this.name = name;
            this.score = score;
        }

        increment() {
            this.score++;
        }
    }

    var user1 = new User("Eva", 9);

    console.log(user1.increment());

})();