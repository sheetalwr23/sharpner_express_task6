const path = require("path");

const express = require("express");

const productsController = require("../controllers/products");

const router = express.Router();

router.get("/add-product", (req, res, next) => {
  res.send(
    '<form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>'
  );
});
// /admin/add-product => GET
router.get("/add-product", productsController.getAddProduct);

router.post("/add-product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});
// /admin/add-product => POST
router.post("/add-product", productsController.postAddProduct);

module.exports = router;
