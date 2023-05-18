const mongoose = require("mongoose");

const TicketSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  status: { type: String, required: true },
  priority: { type: String, required: true },
  type: { type: String, required: true },
  assignedDevs: [{ type: String, required: true }],
});

const ticketModel = mongoose.model("Ticket", TicketSchema);

module.exports = ticketModel;
