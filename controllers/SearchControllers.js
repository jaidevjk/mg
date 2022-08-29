const Search = require("../models/SearchRoutes.js");

exports.createSearch = async (req, res) => {
  const search = req.body;

  const newSearch = new Search(search);
  try {
    await newSearch.save();
    res.status(201).json(newSearch);
  } catch (error) {
    console.log(error);
    res.status(409).send("Some thing went wrong in creating new Search");
  }
};

// exports.deleteSearch = async (req, res) => {
//   const id = req.params.id;
//   console.log("delete");
//   try {
//     await Search.findByIdAndRemove(id);
//     res.send("User Deleted Successfully");
//   } catch (error) {
//     console.log(error);
//   }
// };

exports.fetchSearch = async (req, res) => {
  const posts = await Search.find();
  try {
    res.status(200).send(posts);
  } catch (error) {
    console.log(error);
    res.status(409).send("Some thing went wrong in fetching Testimonial");
  }
};
