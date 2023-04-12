/*Author: Sumit Kumar B00904097*/
const mongoose = require("mongoose");

const invoiceSchema = new mongoose.Schema({
  userid: { type: String, requird: true },
  // invoiceno: { type: String, requird: true },
  date: { type: String, required: true },
  total: { type: String, required: true },
  paid: { type: String, required: true,index:false},
  owing: { type: String, required: true },
  // updatedat: { type: Date, default: Date.now },
  createdat: { type: Date, default: Date.now },
  subTotal:{ type: Number, default:0 },
  tax:{ type: Number, default:0},
  discount:{ type: Number, default:0 },
  items:[{
    court_id:{ type: String, required: true },
    court_img:{ type: String, required: true },
    program:{ type: String, required: true },
    interval: { type: String, required: true },
    price: { type: String, required: true },
    bookingstatus: { type: String, required: true },
    bookingdate:{ type: Date, default: Date.now }
  }],
  billingAddress:{
    name:{ type: String, requird: true },
    street:{ type: String, requird: true },
    apt:{ type: String, requird: true },
    city:{ type: String, requird: true },
    province:{ type: String, requird: true },
    postal:{ type: String, requird: true },
  },
  card:{ type: String, requird: true }
});

module.exports = mongoose.model("Invoice", invoiceSchema);
