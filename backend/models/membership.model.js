/*Author: Sumit Kumar B00904097*/
const mongoose = require("mongoose");

const membershipSchema = new mongoose.Schema({
  userid: { type: String, requird: true },
  type: { type: String, required: true },
  startdate: { type: Date, required: true },
  enddate: { type: Date, required: true },
  renew: { type: String, required: true },
  cardinfo: { type: String, required: true },
  updatedat: { type: Date, default: Date.now },
  createdat: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Membership", membershipSchema);
