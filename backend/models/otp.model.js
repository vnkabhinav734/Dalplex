/*Author: Sumit Kumar B00904097*/
const mongoose = require("mongoose");

const verificationSchema = new mongoose.Schema({
  userid: { type: String, required: true },
  email: { type: String, required: true },
  otp: { type: String, required: true },
  expdate: { type: String, required: true },
  updatedat: { type: Date, default: Date.now },
  createdat: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Verification", verificationSchema);
