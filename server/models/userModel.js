const mongoose = require('mongoose');
const { Schema, model } = require('mongoose');
require("dotenv").config();
// URI to connect to database
const MONGO_URI = process.env.MONGODB_URI;

// actual connection to the database, upon successful connection, log connected
mongoose.connect(MONGO_URI);

// schema for users
const userSchema = new Schema({
	username: { type: String, required: true },
	password: { type: String, required: true },
	currentLocation: String,
	notes: Array
});

// create a user model based off the user schema
const userModel = model('user', userSchema);

module.exports = userModel;
