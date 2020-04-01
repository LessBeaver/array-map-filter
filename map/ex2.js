/* Array.prototype.map - Exercise 2

Sample foods array, i.e. INPUT:
  [
    {
      food: 'Bacon',
      isVegetarian: false
    },
    {
      food: 'Sausage',
      isVegetarian: false
    },
    {
      food: 'Tofu',
      isVegetarian: true
    },
    {
      food: 'Chick Pea',
      isVegetarian: true
    }
  ]

Expected OUTPUT for this sample
  [
    'Bacon is not suitable for vegetarians',
    'Sausage is not suitable for vegetarians',
    'Tofu is suitable for vegetarians',
    'Chick Pea is suitable for vegetarians'
  ]

*/

/* * Write the CONTENTS of the `getFoodCategories` function
* It receives an array of OBJECTS as an argument
* Each object in this array has two attributes:
    `food` is the name of a food product
    `isVegetarian` is a boolean, indicating if this product is suitable for vegetarians
* Using map, `getFoodCategories` must return an array of STRINGS.
* For each element (object) of the input `foods` array, the corresponding element in the
  output array can be computed this way:
    * "FOOD is suitable for vegetarians" if the `isVegetarian` attribute is true
    * "FOOD is not suitable for vegetarians" if the `isVegetarian` attribute is false
    (replace FOOD with the `food` attribute) */

/* function getFoodCategories(foods) {
  return foods.map(isVeg => {
    if(isVeg.isVegetarian) {
      return `${isVeg.food} is suitable for vegetarians`;
    } else {
      return `${isVeg.food} is not suitable for vegetarians`;
    }
  });
}; */

function getFoodCategories(foods) {
  return foods.map(isVeg => isVeg.isVegetarian ? `${isVeg.food} is suitable for vegetarians` : `${isVeg.food} is not suitable for vegetarians`)
}

// DON'T TOUCH THIS!
module.exports = getFoodCategories;
