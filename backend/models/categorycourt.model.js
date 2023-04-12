/*Author: Sumit Kumar B00904097*/
const mongoose = require("mongoose");

const categoriesCourtSchema = new mongoose.Schema({
  categoryid: { type: String, required: true },
  court: { type: String, requird: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: String, required: true },
  updatedat: { type: Date, default: Date.now },
  createdat: { type: Date, default: Date.now }
});

module.exports = mongoose.model("CategoriesCourt", categoriesCourtSchema);
