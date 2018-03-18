/**
 * JavaScript code to solve the exercise number 40 within the book
 * 'JavaScript all beginning is easy.'
 *
 * @author: Jessica Nierth
 * @date: 2/27/2017
 */

(function () {

    "use strict";

    var ingredients = [
        "70ml Raps Oil",
        "1 isolated egg",
        "100 g sugar",
        "1tsp baking powder"
    ],
        method = "Melt the butter in a pan, add the oatmeal and mix well. Then remove" +
            "the mass from the oven and allow it to cool slightly. Then beat the egg" +
            "white with sugar and stir in the egg yolk, baking powder and flour. Now " +
            "mix the mixture with the cooled oat flakes. Place small dough piles on" +
            " a baking tray." +
            " The piles should not be too big, as the dough is slightly diverging when " +
            "baking. Bake in a pre-heated oven at 170 ° C for 15 minutes.";

    _addIngredientToIngredients('1tbsp flour');
    _addIngredientToFirstPos('100g oats');
    _replaceIngredient('70ml Raps Oil', '75g butter');
    _convertIngredientsArrayToString();
    _printMethodsOnPage();


    /**
     * Adds another ingredient to the list of ingredients.
     * @param { String } ingredient that needs to be added to the list of ingredients.
     * @private
     */
    function _addIngredientToIngredients(ingredient) {
        ingredients.push(ingredient);
    }

    /**
     * Adds another ingredient to the first position of the list of ingredients.
     * @param { String } ingredient that needs to be added to the list of ingredients.
     * @private
     */
    function _addIngredientToFirstPos(ingredient) {
        ingredients.splice(0,0,ingredient);
    }

    /**
     * Replaces a given old ingredient with a given new ingredient.
     *
     * @param {string} oldIngredient the ingredient to search for in the ingredients list and to substitute.
     * @param {string} newIngredient the ingredient to substitute for the old ingredient in the ingredients list.
     * @private
     */
    function _replaceIngredient(oldIngredient,  newIngredient) {
        var indexWithinIngredients;

        // Step 1: Search for the index of the existing ingredient in the ingredients array
        indexWithinIngredients = _getIngredientIndex(oldIngredient);

        // If the ingredient was found, continue
        if(indexWithinIngredients !== -1) {
            // Step 2: Replace the ingredient with the new one
            ingredients.splice(indexWithinIngredients,1,newIngredient);
        }
    }
    
    function _convertIngredientsArrayToString() {
        var ingredientsDom = document.getElementById('ingredients'),
            ingredientsList = '';

        _clearChildNodes(ingredientsDom);


        for(var i = 0, len = ingredients.length; i < len; i++) {

            ingredientsList += '<li>' + ingredients[i] + '</li>';

        }

        ingredientsDom.innerHTML = ingredientsList;

    }

    /**
     * Clears all children of a DOM node.
     *
     * @param {object} node DOM node of which to delete all children.
     * @private
     */
    function _clearChildNodes(node) {
        while(node.hasChildNodes()) {
            node.removeChild(node.firstChild);
        }
    }

    /**
     * Searches for a given ingredient within an ingredient array and returns its index.
     *
     * @param {string} ingredient that needs to be searched for within the ingredients array.
     * @returns {number} if -1 no item was found else it returns the index of the found ingredient in the ingredients
     * array.
     * @private
     */
    function _getIngredientIndex(ingredient) {
        return ingredients.indexOf(ingredient);
    }
    
    function _printMethodsOnPage() {
        var methodDom = document.getElementById('method');

        methodDom.innerHTML = method;
    }

})();