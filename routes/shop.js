const path = require("path");

const express = require("express");

const productsController = require("../controllers/products");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.send("<h1>Hello from Express!</h1>");
});
router.get("/", productsController.getProducts);

module.exports = router;
