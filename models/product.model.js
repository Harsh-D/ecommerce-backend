const mongoose = require("mongoose");
require('mongoose-type-url');

const ProductSchema = new mongoose.Schema({   
  name: {
    type: String,
    required: "Cannot enter a product without name, please enter product name"
  }, 
  price: {
    type: Number,
    required: "Cannot enter a product without price, please enter price of the product"
  },
  // modelNo:{
  //   type: Number,
  //   required: "Cannot enter a product without modelNo, please enter modelNo of the product",
  //   unique: true
  // },
  url:{
    type: mongoose.SchemaTypes.Url,
    required: "Cannot enter a product without URL, please enter URL of the product",
  },
  description:{
    type: String,
    minLength: [100, "Description must be 150 characters or more"]
  },
  quantity:{
    type: Number,
    required: "Quantity of product is required"
  },
  image:{
    type: String,
    required: "Please add an image"
  },
  inStock:{
    type:Boolean,
    required:"Please enter whether product is in stock or not"
  },
  fastDelivery:{
    type:Boolean,
    required:"Please enter whether product is fast deliverable or not"
  }}, {
  timestamps: true,
});

const Product = mongoose.model("Product", ProductSchema);


module.exports = { Product }