/**
 * Immediately invoked function that prints a meal and drink that has
 * been chosen by the user
 *
 * @author: Jessica Nierth
 * @date: 2/18/2017
 */
(function() {
    "use strict";

    var domMeal = document.getElementById('favMeal'),
        domDrink = document.getElementById('favDrink'),
        domFinalSentence = document.getElementById('finalSentence'),
        meal,
        drink;

    meal = _prompt('meal');

    domMeal.innerHTML = meal;

    drink = _prompt('drink');

    domDrink.innerHTML = drink;

    _printSentenceInDom(meal,drink);

    function _prompt(item) {
        return window.prompt('What is your most favourite ${item}?');
    }

    function _printSentenceInDom(meal,drink) {
        domFinalSentence.innerHTML = `I like to eat ${meal} and my most favourite drink is: ${drink}`;
    }
})();