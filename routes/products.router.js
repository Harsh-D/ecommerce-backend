const express = require("express");
const router = express.Router();
const {extend} = require("lodash");
const { Product } = require("../models/product.model")


router.route("/")
  .get(async (req, res) => {
    try {
      const products = await Product.find({});
      res.json({ success: true, products })
    } catch (err) {
      res.status(500).json({ success: false, message: "unable to get products", errorMessage: err.message })
    }

  })
  .post(async (req, res) => {
    try {
      const product = req.body;
      const NewProduct = new Product(product);
      const savedProduct = await NewProduct.save();
      res.json({ success: true, product: savedProduct })
    } catch (err) {
      res.status(500).json({ success: false, message: "unable to add products", errorMessage: err.message })
    }
  })


router.param("productId", async (req, res, next, id) => {
  try {
    const product = await Product.findById(id);
    if (!product) {
      return res.status(400).json({ success: false, message: "product not found"})
    } 
    req.product = product;
    next()
  } catch {
    res.status(400).json({ success: false, message: "could not retrieve product "})
  }
})

router.route("/:productId")
  .get((req, res) => {
    product.__v = undefined;
    res.json({ success: true, product })
  })
  .post(async (req, res) => {
    const productUpdates = req.body;
    let {product} = req;

    product = extend(product, productUpdates);
    // product.__v = undefined;
    product = await product.save();
    res.json({success:true, product})

  })
  .delete(async (req, res) => { 
    let {product} = req;
    // product.__v = undefined;
    product = await product.remove()
    res.json({success:true, product})
  })


module.exports = router