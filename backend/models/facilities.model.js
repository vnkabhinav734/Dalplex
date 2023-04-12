// Author : Venkata Vijaya Rama Raju Mandapati
const mongoose = require("mongoose");

const facilitiesSchema = new mongoose.Schema({
  title: { type: String, requird: true },
  subtitle: { type: String, required: true },
  occ: { type: String, required: true },
  state: { type: String, required: true },
  desc: { type: String, required: true },
  foot: { type: String, required: true },
  img: { type: String, required: true },
  w: { type: Array, required: true },
  slots: { type: Array, required: true },
  updatedat: { type: Date, default: Date.now },
  createdat: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Facilities", facilitiesSchema);
