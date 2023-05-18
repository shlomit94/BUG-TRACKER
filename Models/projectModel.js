const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  teamMembers: [{ type: String, required: true }],
  ticketsId: [{ type: mongoose.Schema.Types.ObjectId, ref: "Ticket" }],
  authorId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

const projectModel = mongoose.model("Project", ProjectSchema);

module.exports = projectModel;
