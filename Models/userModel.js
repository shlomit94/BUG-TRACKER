const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  fname: { type: String, required: true },
  lname: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  userProjects: [{ type: mongoose.Schema.Types.ObjectId, ref: "Project" }],
  userTickets: [{ type: mongoose.Schema.Types.ObjectId, ref: "Ticket" }],
});

const userModel = mongoose.model("User", UserSchema);

module.exports = userModel;
