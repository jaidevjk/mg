const ProductsCategories = require("../models/ProductsCategories.js");
const mongoose = require("mongoose");

exports.createCategory = async (req, res) => {
  // console.log("this is calling");
  // console.log(req.body);

  const category = req.body;
  //   const data = req.user;
  // console.log('User Data', data);

  const newCategory = new ProductsCategories(category);

  try {
    await newCategory.save();
    res.status(201).json(newCategory);
  } catch (error) {
    console.log(error);
    res
      .status(409)
      .json("Some thing went wrong in creating new Products Category");
  }
};

exports.fetchCategory = async (req, res) => {
  const category = await ProductsCategories.find();
  try {
    res.status(200).send(category);
  } catch (error) {
    console.log(error);
    res.status(409).send("Some thing went wrong in fetching Categories");
  }
};
