const ticketModel = require("../Models/ticketModel");

const createTicket = async (ticketObj) => {
  try {
    await ticketModel.create(ticketObj);
    return "Created!";
  } catch (error) {
    return "Failed to create :(";
  }
};

const getAllTickets = async () => {
  try {
    const tickets = await ticketModel.find({});
    return tickets;
  } catch (error) {
    throw error;
  }
};

const getTicketByID = async (id) => {
  try {
    const ticket = await ticketModel.findById(id);
    return ticket;
  } catch (error) {
    throw error;
  }
};

const getTicketByTitle = async (title) => {
  try {
    const ticket = await ticketModel.find({ title: title });
    return ticket;
  } catch (error) {
    throw error;
  }
};

const updateTicket = async (id, ticketObj) => {
  try {
    await ticketModel.findByIdAndUpdate(id, ticketObj);
    return "Updated!";
  } catch (error) {
    throw error;
  }
};

const deleteTicket = async (id) => {
  try {
    await ticketModel.findByIdAndDelete(id);
    return "Deleted!";
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createTicket,
  getAllTickets,
  getTicketByID,
  getTicketByTitle,
  updateTicket,
  deleteTicket,
};
