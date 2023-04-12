// Author : Venkata Vijaya Rama Raju Mandapati
const mongoose = require("mongoose");

const tournamentsSchema = new mongoose.Schema({
  tournamentname: { type: String, requird: true },
  updatedat: { type: Date, default: Date.now },
  createdat: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Tournaments", tournamentsSchema);
