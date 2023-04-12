/*Author: Sumit Kumar B00904097*/
const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  userid: { type: String, required: true },
  categoryid: { type: String, required: true },
  courtid: { type: String, required: true },
  program: { type: String, required: true },
  interval: { type: String, required: true },
  semester: { type: String, required: true },
  registeredon: { type: String, required: true },
  status: { type: String, required: true },
  updatedat: { type: Date, default: Date.now },
  createdat: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Booking", bookingSchema);
