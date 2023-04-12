/*Author: Sumit Kumar B00904097*/
const mongoose = require("mongoose");

const userProfileSchema = new mongoose.Schema({
  userid: { type: String, requird: true },
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  dob: { type: String, required: true },
  sex: { type: String, required: true },
  about: { type: String, required: true },
  updatedat: { type: Date, default: Date.now },
  createdat: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Profile", userProfileSchema);
