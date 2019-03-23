/**
 * Write a method 'tweet' that is part of an object 'person'. The tween function expects a number
 * which will define how many tweets it will log on the console.
 *
 * @author: Jessica Nierth
 * @date: 23.03.2019
 */
var person = {
    tweet: function(n) {
        return (n > 1) ? this.tweet(n - 1) + '-tweet' : 'tweet';
    }
};

var person2 = {
    tweet: person.tweet
};

// this bezieht sich auf person!
person.tweet(4);
person = {};

// this bezieht sich auf person2!
person2.tweet(3);


/**
 * Ansatz als inline function
 */

var person3 = {
    //if you give an anonymous function a name it is called an inline function (named function 'tweetme')
    // and can be referenced for recursive calls.
    tweet: function tweetme(n) {
        return (n > 1) ? tweetme(n - 1) + '-tweet' : 'tweet';
    }
};

person3.tweet(2);

var person4 = {
    tweet: person3.tweet
};

person3 = {};
/**
 * Ansatz mit callee: Achtung arguments.callee wird in zukunft nicht mehr unterstuetzt und funktioniert nicht mehr bei der Nutzung von strict.
 */

var person5 = {
    //if you give an anonymous function a name it is called an inline function (named function 'tweetme')
    // and can be referenced for recursive calls.
    tweet: function tweetme(n) {
        // arguments.callee referenziert die aufrufende funktion.
        return (n > 1) ? arguments.callee(n - 1) + '-tweet' : 'tweet';
    }
};

person5.tweet(2);

var person6 = {
    tweet: person5.tweet
};

person5 = {};

person6.tweet(4);
