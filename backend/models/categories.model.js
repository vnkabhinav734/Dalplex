const mongoose = require("mongoose");

const categoriesSchema = new mongoose.Schema({
  categoryname: { type: String, requird: true },
  updatedat: { type: Date, default: Date.now },
  createdat: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Categories", categoriesSchema);
