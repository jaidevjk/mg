const mongoose = require("mongoose");
const Careers = require("../models/CareerModels.js");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
const { google } = require("googleapis");

// const oAuth2Client = new google.auth.OAuth2(
//   process.env.CLIENT_ID,
//   process.env.CLIENT_SECRET,
//   process.env.REDIRECT_URL
// );
// oAuth2Client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN });

dotenv.config({ path: "./config/config.env" });

exports.createCareer = async (req, res) => {
  const careers = req.body;

  const newCareers = new Careers(careers);
  try {
    // mail sending through nodemailer
    // const accessToken = await oAuth2Client.getAccessToken();

    // const transporter = nodemailer.createTransport({
    //   service: "gmail",
    //   auth: {
    //     user: "info.multiplexgroup@gmail.com",
    //     pass: "Techraven",
    //   },
    // });

    var transporter = nodemailer.createTransport({
      host: "smtp-mail.outlook.com",
      secureConnection: false,
      port: 587,
      tls: {
        ciphers: "SSLv3",
      },
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS,
      },
    });

    const options = {
      from: process.env.EMAIL,
      to: `${req.body.adminEmail}, analysis@multiplexgroup.com`,
      subject: "Job Application | Multiplex Group of Companies Enquires",
      text: "Job Application | Multiplex Group Of Companies",
      html: `<h2>Multiplex Group Of Companies</h2><br/> <h3>Job Application</h3> <p><b>Name:</b> ${careers.name}</p> <p><b>Email Id:</b> ${careers.email}</p> <p><b>Mobile Number:</b> ${careers.mobile}</p> <p><b>Message:</b> ${careers.message}</p> <p><b>Resume:</b> <a href='${careers.resume}'>Click here to download</a></p> <b>Thankyou!</b>`,
    };
    transporter.sendMail(options, function (err, info) {
      if (err) {
        console.log(err);
        return;
      }
      console.log("Sent: " + info.response);
    });
    // Mail sent ends
    await newCareers.save();
    res.status(201).json(newCareers);
  } catch (error) {
    console.log(error);
    res.status(409).send("Some thing went wrong in creating new Career");
  }
};

exports.fetchCareer = async (req, res) => {
  const career = await Careers.find();
  try {
    res.status(200).send(career);
  } catch (error) {
    console.log(error);
    res.status(409).send("Some thing went wrong in fetching Career");
  }
};

exports.deleteCareer = async (req, res) => {
  const id = req.params.id;
  try {
    await Careers.findByIdAndRemove(id);
    res.send("User Deleted Successfully");
  } catch (error) {
    console.log(error);
  }
};

exports.updateCareers = async (req, res) => {
  const id = req.params.id;
  const updateCareer = req.body;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  try {
    await Careers.findByIdAndUpdate(id, updateCareer, {
      new: true,
    });
    res.json(updateCareer);
  } catch (error) {
    console.log(error);
    res.status(400).send("Some thing went wrong in updating career");
  }
};

exports.fetchSingleCareer = async (req, res) => {
  const post = req.params.id;
  const getPost = await Careers.findById(post);

  try {
    res.status(200).send(getPost);
  } catch (error) {
    console.log(error);
    res.status(409).send("Some thing went wrong in fetching Career");
  }
};

exports.getCareerBySearch = async (req, res) => {
  const { search } = req.query;
  try {
    const searchState = new RegExp(search, "i");
    const searchPosition = new RegExp(search, "i");
    const searchDepartment = new RegExp(search, "i");
    const posts = await Careers.find({
      $or: [
        { state: searchState },
        { position: searchPosition },
        { department: searchDepartment },
      ],
    });
    res.status(200).send(posts);
  } catch (error) {
    console.log(error);
    res.status(409).send("Some thing went wrong in Searching posts");
  }
};
