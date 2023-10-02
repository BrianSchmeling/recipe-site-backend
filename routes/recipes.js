const express = require("express");
const router = express.Router();

const recipeController = require("../controllers/recipes");

router.get("/", recipeController.index);
router.get("/:_id", recipeController.show);
router.post("/add", recipeController.create);
router.put("/:_id", recipeController.edit);
router.delete("/:_id", recipeController.delete);

module.exports = router;
