const bcrypt = require('bcrypt');
const jws = require('jsonwebtoken');
const User = require('../models/Users.js');
const dotenv = require('dotenv');
const Logins = require('../models/LoginModels.js');

dotenv.config({ path: './config/config.env' });

const secret = process.env.SECRET;

exports.signup = async (req, res, cb) => {
  const { email, password, name } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json(`User Already Exist With this email: ${email}`);
    }
    const user = await new User({ email, password, name });
    const salt = await bcrypt.genSalt(12);
    user.password = await bcrypt.hash(password, salt);
    user.save();
    const token = jws.sign({ email: user.email, password: user.password }, secret);
    res.status(201).json({ user, token });
    cb(null, user);
  } catch (error) {
    console.log(error);
    res.status(409).send('Some thing went wong in creating new user');
  }
};

exports.signin = async (req, res) => {
  console.log(req.body);
  const { email, password, name } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res.status(400).json(`User Does Not Exist With this email: ${email}`);
    }
    const passwordCompare = await bcrypt.compare(password, existingUser.password);
    if (!passwordCompare) {
      return res.status(400).send('Password Incorrect.');
    }
    const token = jws.sign({ email: existingUser.email, password: existingUser.password }, secret);
    res.status(200).send({ token });
  } catch (error) {
    console.log(error);
    res.status(409).send('Some thing went wong in Signup user');
  }
};

exports.loginAttempt = async (req, res) => {
  const testimonials = req.body;
  console.log('calling');

  try {
    const newTestimonials = new Logins(testimonials);
    newTestimonials.save();
    res.status(201).json(newTestimonials);
  } catch (error) {
    console.log(error);
    res.status(409).send('Some thing went wrong in adding data');
  }
};

exports.fetchLoginAttempt = async (req, res) => {
  const data = await Logins.find();
  try {
    res.status(200).send(data);
  } catch (error) {
    console.log(error);
    res.status(409).send('Some thing went wrong in fetching Login details');
  }
};
