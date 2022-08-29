const mongoose = require("mongoose");

const FertilizerProducts = require("../models/FetlizerModels.js");
const BioProducts = require("../models/BioModels.js");
const SeedsProducts = require("../models/SeedsModels.js");
const SprayersProducts = require("../models/SprayersModels.js");
const AdjuvantsProducts = require("../models/AdjuvantsModels.js");
const PesticidesProducts = require("../models/PesticidesModels.js");
const GrowthProducts = require("../models/GrowthModels.js");
const Pheromones = require("../models/PheromonesModels.js");

exports.createFetlizer = async (req, res) => {
  //   console.log("this is calling");
  // console.log(req.body);

  const product = req.body;
  const newProduct = new FertilizerProducts(product);

  try {
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    console.log(error);
    res.status(409).json("Some thing went wrong in creating new Products");
  }
};

exports.createPheromones = async (req, res) => {
  //   console.log("this is calling");
  // console.log(req.body);

  const product = req.body;
  const newProduct = new Pheromones(product);

  try {
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    console.log(error);
    res.status(409).json("Some thing went wrong in creating new Products");
  }
};

exports.createBioProducts = async (req, res) => {
  //   console.log("this is calling");
  // console.log(req.body);

  const product = req.body;

  const newProduct = new BioProducts(product);

  try {
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    console.log(error);
    res.status(409).json("Some thing went wrong in creating new Products");
  }
};

exports.createSeedsProducts = async (req, res) => {
  //   console.log("this is calling");
  // console.log(req.body);
  const product = req.body;
  const newProduct = new SeedsProducts(product);
  try {
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    console.log(error);
    res.status(409).json("Some thing went wrong in creating new Products");
  }
};

exports.createSprayersProducts = async (req, res) => {
  //   console.log("this is calling");
  // console.log(req.body);
  const product = req.body;
  const newProduct = new SprayersProducts(product);
  try {
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    console.log(error);
    res.status(409).json("Some thing went wrong in creating new Products");
  }
};

exports.createAdjuvantsProducts = async (req, res) => {
  //   console.log("this is calling");
  // console.log(req.body);
  const product = req.body;
  const newProduct = new AdjuvantsProducts(product);
  try {
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    console.log(error);
    res.status(409).json("Some thing went wrong in creating new Products");
  }
};

exports.createPesticidesProducts = async (req, res) => {
  //   console.log("this is calling");
  // console.log(req.body);
  const product = req.body;
  const newProduct = new PesticidesProducts(product);
  try {
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    console.log(error);
    res.status(409).json("Some thing went wrong in creating new Products");
  }
};

exports.createGrowthProducts = async (req, res) => {
  //   console.log("this is calling");
  // console.log(req.body);
  const product = req.body;
  const newProduct = new GrowthProducts(product);
  try {
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    console.log(error);
    res.status(409).json("Some thing went wrong in creating new Products");
  }
};

exports.fetchFertilizers = async (req, res) => {
  // res.redirect("https://" + req.headers.host + req.url);
  const category = await FertilizerProducts.find();
  try {
    res.status(200).send(category);
  } catch (error) {
    console.log(error);
    res.status(409).send("Some thing went wrong in fetching Categories");
  }
};

exports.fetchSingleFertilizer = async (req, res) => {
  const post = req.params.id;
  const getPost = await FertilizerProducts.findById(post);

  try {
    res.status(200).send(getPost);
  } catch (error) {
    console.log(error);
    res.status(409).send("Some thing went wrong in fetching Product");
  }
};

exports.fetchSinglePheromones = async (req, res) => {
  const post = req.params.id;
  const getPost = await fetchSinglePheromones.findById(post);

  try {
    res.status(200).send(getPost);
  } catch (error) {
    console.log(error);
    res.status(409).send("Some thing went wrong in fetching Product");
  }
};

exports.fetchPheromones = async (req, res) => {
  const category = await Pheromones.find();
  try {
    res.status(200).send(category);
  } catch (error) {
    console.log(error);
    res.status(409).send("Some thing went wrong in fetching Categories");
  }
};

// exports. fetchSingleFertilizer = async (req, res) => {
//   const post = req.params.id;
//   const getPost = await FertilizerProducts.findById(post);

//   try {
//     res.status(200).send(getPost);
//   } catch (error) {
//     console.log(error);
//     res.status(409).send("Some thing went wrong in fetching Product");
//   }
// };

exports.fetchGrowthPromoters = async (req, res) => {
  const category = await GrowthProducts.find();
  try {
    res.status(200).send(category);
  } catch (error) {
    console.log(error);
    res.status(409).send("Some thing went wrong in fetching Categories");
  }
};

exports.fetchSingleGrowth = async (req, res) => {
  const post = req.params.id;
  const getPost = await GrowthProducts.findById(post);

  try {
    res.status(200).send(getPost);
  } catch (error) {
    console.log(error);
    res.status(409).send("Some thing went wrong in fetching Product");
  }
};

exports.fetchAdjuvants = async (req, res) => {
  const category = await AdjuvantsProducts.find();
  try {
    res.status(200).send(category);
  } catch (error) {
    console.log(error);
    res.status(409).send("Some thing went wrong in fetching Categories");
  }
};

exports.fetchSingleAdjuvants = async (req, res) => {
  const post = req.params.id;
  const getPost = await AdjuvantsProducts.findById(post);

  try {
    res.status(200).send(getPost);
  } catch (error) {
    console.log(error);
    res.status(409).send("Some thing went wrong in fetching Product");
  }
};

exports.fetchSeeds = async (req, res) => {
  const category = await SeedsProducts.find();
  try {
    res.status(200).send(category);
  } catch (error) {
    console.log(error);
    res.status(409).send("Some thing went wrong in fetching Categories");
  }
};

exports.fetchSingleSeeds = async (req, res) => {
  const post = req.params.id;
  const getPost = await SeedsProducts.findById(post);

  try {
    res.status(200).send(getPost);
  } catch (error) {
    console.log(error);
    res.status(409).send("Some thing went wrong in fetching Product");
  }
};

exports.fetchSprayers = async (req, res) => {
  const category = await SprayersProducts.find();
  try {
    res.status(200).send(category);
  } catch (error) {
    console.log(error);
    res.status(409).send("Some thing went wrong in fetching Categories");
  }
};

exports.fetchSingleSprayers = async (req, res) => {
  const post = req.params.id;
  const getPost = await SprayersProducts.findById(post);

  try {
    res.status(200).send(getPost);
  } catch (error) {
    console.log(error);
    res.status(409).send("Some thing went wrong in fetching Product");
  }
};

exports.fetchBioProducts = async (req, res) => {
  const category = await BioProducts.find();
  try {
    res.status(200).send(category);
  } catch (error) {
    console.log(error);
    res.status(409).send("Some thing went wrong in fetching Categories");
  }
};

exports.fetchSingleBioProduct = async (req, res) => {
  const post = req.params.id;
  const getPost = await BioProducts.findById(post);

  try {
    res.status(200).send(getPost);
  } catch (error) {
    console.log(error);
    res.status(409).send("Some thing went wrong in fetching Product");
  }
};

exports.fetchPesticides = async (req, res) => {
  const category = await PesticidesProducts.find();
  try {
    res.status(200).send(category);
  } catch (error) {
    console.log(error);
    res.status(409).send("Some thing went wrong in fetching Categories");
  }
};

exports.fetchSinglePesticide = async (req, res) => {
  const post = req.params.id;
  const getPost = await PesticidesProducts.findById(post);

  try {
    res.status(200).send(getPost);
  } catch (error) {
    console.log(error);
    res.status(409).send("Some thing went wrong in fetching Product");
  }
};

exports.updateFertilizer = async (req, res) => {
  const id = req.params.id;
  const updateProduct = req.body;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  try {
    await FertilizerProducts.findByIdAndUpdate(id, updateProduct, {
      new: true,
    });
    res.json(updateProduct);
  } catch (error) {
    console.log(error);
    res.status(400).send("Some thing went wrong in updating post");
  }
};

exports.updatePheromones = async (req, res) => {
  const id = req.params.id;
  const updateProduct = req.body;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  try {
    await Pheromones.findByIdAndUpdate(id, updateProduct, {
      new: true,
    });
    res.json(updateProduct);
  } catch (error) {
    console.log(error);
    res.status(400).send("Some thing went wrong in updating post");
  }
};

exports.deleteFertilizer = async (req, res) => {
  const id = req.params.id;
  try {
    await FertilizerProducts.findByIdAndRemove(id);
    res.send("Product Deleted Successfully");
  } catch (error) {
    console.log(error);
  }
};

exports.deletePheromones = async (req, res) => {
  const id = req.params.id;
  try {
    await Pheromones.findByIdAndRemove(id);
    res.send("Product Deleted Successfully");
  } catch (error) {
    console.log(error);
  }
};

exports.updateSeeds = async (req, res) => {
  const id = req.params.id;
  const updateProduct = req.body;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  try {
    await SeedsProducts.findByIdAndUpdate(id, updateProduct, {
      new: true,
    });
    res.json(updateProduct);
  } catch (error) {
    console.log(error);
    res.status(400).send("Some thing went wrong in updating post");
  }
};

exports.deleteSeeds = async (req, res) => {
  const id = req.params.id;
  try {
    await SeedsProducts.findByIdAndRemove(id);
    res.send("Product Deleted Successfully");
  } catch (error) {
    console.log(error);
  }
};

exports.updateAdjuvants = async (req, res) => {
  const id = req.params.id;
  const updateProduct = req.body;
  console.log("calling");
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  try {
    await AdjuvantsProducts.findByIdAndUpdate(id, updateProduct, {
      new: true,
    });
    res.json(updateProduct);
  } catch (error) {
    console.log(error);
    res.status(400).send("Some thing went wrong in updating post");
  }
};

exports.deleteAdjuvants = async (req, res) => {
  const id = req.params.id;
  try {
    await AdjuvantsProducts.findByIdAndRemove(id);
    res.send("Product Deleted Successfully");
  } catch (error) {
    console.log(error);
  }
};

exports.updateBio = async (req, res) => {
  const id = req.params.id;
  const updateProduct = req.body;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  try {
    await BioProducts.findByIdAndUpdate(id, updateProduct, {
      new: true,
    });
    res.json(updateProduct);
  } catch (error) {
    console.log(error);
    res.status(400).send("Some thing went wrong in updating post");
  }
};

exports.deleteBio = async (req, res) => {
  const id = req.params.id;
  try {
    await BioProducts.findByIdAndRemove(id);
    res.send("Product Deleted Successfully");
  } catch (error) {
    console.log(error);
  }
};

exports.updatePesticides = async (req, res) => {
  const id = req.params.id;
  const updateProduct = req.body;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  try {
    await PesticidesProducts.findByIdAndUpdate(id, updateProduct, {
      new: true,
    });
    res.json(updateProduct);
  } catch (error) {
    console.log(error);
    res.status(400).send("Some thing went wrong in updating post");
  }
};

exports.deletePesticides = async (req, res) => {
  const id = req.params.id;

  try {
    await PesticidesProducts.findByIdAndRemove(id);
    res.send("Product Deleted Successfully");
    // console.log("deleted");
  } catch (error) {
    console.log(error);
  }
};

exports.updateGrowth = async (req, res) => {
  const id = req.params.id;
  const updateProduct = req.body;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  try {
    await GrowthProducts.findByIdAndUpdate(id, updateProduct, {
      new: true,
    });
    res.json(updateProduct);
  } catch (error) {
    console.log(error);
    res.status(400).send("Some thing went wrong in updating post");
  }
};

exports.deleteGrowth = async (req, res) => {
  const id = req.params.id;

  try {
    await GrowthProducts.findByIdAndRemove(id);
    res.send("Product Deleted Successfully");
    // console.log("deleted");
  } catch (error) {
    console.log(error);
  }
};

exports.updateSprayers = async (req, res) => {
  const id = req.params.id;
  const updateProduct = req.body;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  try {
    await SprayersProducts.findByIdAndUpdate(id, updateProduct, {
      new: true,
    });
    res.json(updateProduct);
  } catch (error) {
    console.log(error);
    res.status(400).send("Some thing went wrong in updating post");
  }
};

exports.deleteSprayers = async (req, res) => {
  const id = req.params.id;

  try {
    await SprayersProducts.findByIdAndRemove(id);
    res.send("Product Deleted Successfully");
    // console.log("deleted");
  } catch (error) {
    console.log(error);
  }
};
