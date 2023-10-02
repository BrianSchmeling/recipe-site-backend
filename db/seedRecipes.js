const recipes = require("../models/recipes");

const recipesList = [
  {
    mealName: "Recipe One",
    description: "Describes Recipe One ...",
    area: "Greek",
    category: "Meat",
    ingredients: [
      {
        1: "first",
        2: "second",
        3: "third",
      },
    ],
    measures: [],
    instructions: [
      {
        1: "Step one",
        2: "Step two",
        3: "Step three",
        4: "Step four",
        5: "Step five",
        6: "Step seven",
      },
    ],
    tags: [
      {
        1: "Spicey",
        2: "salty",
      },
    ],
    image: {
      source: "something.com",
      description: "describes the img",
    },
  },
  {
    mealName: "Recipe Two",
    description: "Describes Recipe Two ...",
    area: "Greek",
    category: "Meat",
    ingredients: [
      {
        1: "first",
        2: "second",
        3: "third",
        4: "fourth",
        5: "fifth",
        6: "sixth",
      },
    ],
    measures: [],
    instructions: [
      {
        1: "Step one",
        2: "Step two",
        3: "Step three",
        4: "Step four",
        5: "Step five",
      },
    ],
    tags: [
      {
        1: "Spicey",
        2: "salty",
        3: "sweet",
      },
    ],
    image: {
      source: "something.com",
      description: "describes the img",
    },
  },
  {
    mealName: "Recipe Three",
    description: "Describes Recipe Three ...",
    area: "Greek",
    category: "Meat",
    ingredients: [
      {
        1: "first",
        2: "second",
        3: "third",
        4: "fourth",
        5: "fifth",
      },
    ],
    measures: [],
    instructions: [
      {
        1: "Step one",
        2: "Step two",
        3: "Step three",
      },
    ],
    tags: [
      {
        1: "Spicey",
        2: "sweet",
      },
    ],
    image: {
      source: "something.com",
      description: "describes the img",
    },
  },
];

const writeItems = () => {
  recipes.deleteMany({}).then(() => {
    recipesList.map((sku) => {
      recipes.create(sku).then((newSku) => {
        console.log(newSku);
      });
    });
  });
};

writeItems();
