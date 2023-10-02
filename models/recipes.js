const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  mealName: String,
  description: String,
  area: String, // Greek, Italian, Chinese etc.
  category: String, // Vegetarian, Vegan, etc.
  ingredients: Array, // {"1": "oil", "2": "salt", etc}
  measures: Array, // same as above, but with amounts
  instructions: Array, // same again but with instructions in each number
  tags: Array, // Broken record here
  image: {
    source: String, //URL
    description: String,
  },
});

const recipe = mongoose.model("recipeSchema", recipeSchema);

module.exports = recipe;
