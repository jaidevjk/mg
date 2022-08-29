const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const enforce = require("express-sslify");

const path = require ("path");

const postRouter = require("./routes/ProductRoutes.js");
const categoryRoutes = require("./routes/CategoryRoutes.js");
const userRoutes = require("./routes/Users.js");
const SubscribeRoutes = require("./routes/subscribe.js");
const EnquiryRoutes = require("./routes/EnquiryRoutes.js");
const testimonialRoutes = require("./routes/testimonialRoutes.js");
const articleRoutes = require("./routes/articleRoutes.js");
const welcomeRoutes = require("./routes/welcomeRoutes.js");
const visitorRoutes = require("./routes/visitorRoutes.js");
const searchRoutes = require("./routes/searchingRoutes.js");
const careerRoutes = require("./routes/CareerRoutes.js");
const careerVacancy = require("./routes/CareersVacancyRoutes.js");
const contactRoutes = require("./routes/contactRoutes.js");
const galleryRoutes = require("./routes/GalleryRoutes.js");
const uploads = require("./routes/uploadImages");

dotenv.config({ path: "./config/config.env" });
const app = express();

app.use(cors());
app.use(morgan("combined"));

const fileUpload = require("express-fileupload");
app.use(fileUpload());

app.use(
  bodyParser.json({
    limit: "3mb",
    extended: true,
  })
);
app.use(bodyParser.urlencoded({ limit: "3mb", extended: true }));

// mongoose.connect(process.env.MONGODB_URL);

mongoose.connect(
  "mongodb://Techraven:Techraven@cluster0-shard-00-00.na664.mongodb.net:27017,cluster0-shard-00-01.na664.mongodb.net:27017,cluster0-shard-00-02.na664.mongodb.net:27017/MultiplexGroup?ssl=true&replicaSet=atlas-4iu2t3-shard-0&authSource=admin&retryWrites=true&w=majority"
);

// app.use(enforce.HTTPS({ trustProtoHeader: true }));

app.use("/products", postRouter);
app.use("/category", categoryRoutes);
app.use("/user", userRoutes);
app.use("/subscribe", SubscribeRoutes);
app.use("/enquiry", EnquiryRoutes);
app.use("/testimonial", testimonialRoutes);
app.use("/article", articleRoutes);
app.use("/welcome", welcomeRoutes);
app.use("/visitor", visitorRoutes);
app.use("/search", searchRoutes);
app.use("/career", careerRoutes);
app.use("/vacancy", careerVacancy);
app.use("/contacts", contactRoutes);
app.use("/gallery", galleryRoutes);
app.use("/upload", uploads);

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }

app.use(express.static(__dirname + "/client"));
if (process.env.NODE_ENV === "production") {
  // Express will serve up production assets
  // lik our main.js file or main.css file
  app.use(express.static("client/build"));
  // Express will serve up the index.html file
  // if it doesn't recognize the route
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT);
