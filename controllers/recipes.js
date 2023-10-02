const recipes = require("../models/recipes");

module.exports = {
  index: (req, res) => {
    recipes.find().then((recipe) => {
      res.json(recipe);
    });
  },
  show: (req, res) => {
    recipes.findOne({ _id: req.params._id }).then((recipe) => {
      res.json(recipe);
    });
  },
  create: (req, res) => {
    recipes.create(req.body).then((recipe) => {
      res.json(recipe);
    });
  },
  edit: (req, res) => {
    recipes
      .findOneAndUpdate({ _id: req.params._id }, req.body, {
        new: true,
      })
      .then((recipe) => {
        res.json(recipe);
      });
  },
  delete: (req, res) => {
    recipes.findOneAndDelete({ _id: req.params._id }).then((recipe) => {
      res.json(recipe);
    });
  },
};
