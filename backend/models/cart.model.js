const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  userid: { type: String, required: true },
  username:{ type: String, required: true },
  items:[{
    court_id:{ type: String, required: true },
    court_img:{ type: String, required: true },
    categoryid: { type: String, required: true },
    program:{ type: String, required: true },
    interval: { type: String, required: true },
    price: { type: String, required: true },
    bookingstatus: { type: String, required: true },
    bookingdate:{ type: Date, default: Date.now }
  }],
  status:{ type: String, required: true },
  updatedat: { type: Date, default: Date.now },
  createdat: { type: Date, default: Date.now },
  subTotal:{ type: Number, default:0 },
  tax:{ type: Number, default:0},
  discount:{ type: Number, default:0 },
  total:{ type: Number, default: 0 },
});

module.exports = mongoose.model("Cart", cartSchema);