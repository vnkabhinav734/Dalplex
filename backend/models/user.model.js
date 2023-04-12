/*Author: Sumit Kumar B00904097*/
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  role: { type: String, enum: ["admin", "user"], default: "user" },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  updatedat: { type: Date, default: Date.now },
  createdat: { type: Date, default: Date.now },
});

userSchema.methods.verifyPassword = function (password, cb) {
  bcrypt.compare(password, this.password, function (err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

module.exports = mongoose.model("User", userSchema);
