/*Author: Sumit Kumar B00904097*/
const mongoose = require("mongoose");

const paymentMethodsSchema = new mongoose.Schema({
  userid: { type: String, requird: true },
  name: { type: String, required: true },
  cardnumber: { type: String, required: true },
  expirydate: { type: String, required: true, unique: true },
  cvv: { type: String, required: true },
  postalcode: { type: String, required: true },
  updatedat: { type: Date, default: Date.now },
  createdat: { type: Date, default: Date.now },
});

module.exports = mongoose.model("PaymentMethods", paymentMethodsSchema);
