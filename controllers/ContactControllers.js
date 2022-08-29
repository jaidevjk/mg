const Contact = require("../models/ContactModels.js");
const nodemailer = require("nodemailer");

const dotenv = require("dotenv");
const { google } = require("googleapis");

const oAuth2Client = new google.auth.OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  process.env.REDIRECT_URL
);
oAuth2Client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN });
dotenv.config({ path: "./config/config.env" });

exports.createContact = async (req, res) => {
  const enquiry = req.body;
  const { email } = req.body;
  //   console.log(enquiry);

  try {
    const existingUser = await Contact.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json(`User Already Exist With this email: ${email}`);
    }
    const newEnquiry = new Contact(enquiry);

    // mail sending through nodemailer
    // const accessToken = await oAuth2Client.getAccessToken();

    // const transporter = nodemailer.createTransport({
    //   service: "gmail",
    //   auth: {
    //     type: "OAUTH2",
    //     user: "info.multiplexgroup@gmail.com",
    //     clientId: process.env.CLIENT_ID,
    //     clientSecret: process.env.CLIENT_SECRET,
    //     refreshToken: process.env.REFRESH_TOKEN,
    //     accessToken: accessToken,
    //   },
    // });

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

    var sendTo = "";
    var title = "";
    switch (enquiry.department) {
      case "Dealership":
        sendTo = "mis@multiplexgroup.com";
        title = "New Dealership Enquiry";
        break;
      case "Technical":
        sendTo = "hotechnical@multiplexgroup.com";
        title = "New Technical Enquiry";
        break;
      case "Human Resources":
        sendTo = "hr@multiplexgroup.com";
        title = "New HR Enquiry";
        break;

      default:
        sendTo = "enquiry@multiplexgroup.com";
        title = "New Enquiry";
        break;
    }

    // console.log(sendTo);

    const options = {
      from: process.env.EMAIL,
      to: `${sendTo}, analysis@multiplexgroup.com`,
      subject: title,
      text: `Multiplex Group Of Companies | ${title}`,
      html: `<h2>Multiplex Group Of Companies</h2><br/> <h3>${title}</h3> <p>Name: ${enquiry.name}</p> <p>Department: ${enquiry.department}</p> <p>Email Id: ${enquiry.email}</p> <p>Mobile Number: ${enquiry.mobile}</p> <p>State: ${enquiry.state}</p> <p>Address: ${enquiry.address}</p> <p>Message: ${enquiry.message}</p> <b>Thankyou!</b>`,
    };
    transporter.sendMail(options, function (err, info) {
      if (err) {
        console.log(err);
        return;
      }
      console.log("Sent: " + info.response);
    });

    // Mail sent ends

    newEnquiry.save();
    res.status(201).json(newEnquiry);
  } catch (error) {
    console.log(error);
    res.status(409).send("Some thing went wong in creating new user");
  }
};

exports.fetchContact = async (req, res) => {
  const enquiry = await Contact.find();
  try {
    res.status(200).send(enquiry);
  } catch (error) {
    console.log(error);
    res.status(409).send("Some thing went wrong in fetching Enquires");
  }
};

exports.deleteContact = async (req, res) => {
  const id = req.params.id;
  try {
    await Contact.findByIdAndRemove(id);
    res.send("User Deleted Successfully");
  } catch (error) {
    console.log(error);
  }
};
