const ticketModel = require("../Models/ticketModel");
const userModel = require("../Models/userModel");
const projectModel = require("../Models/projectModel");

const createTicket = async (ticketObj, userId, projectId) => {
  try {
    ticketObj.authorId = userId;
    ticketObj.projectId = projectId;
    console.log(ticketObj);
    const newTicket = await ticketModel.create(ticketObj);
    const insert_ticketId_to_user_doc = await userModel.findByIdAndUpdate(
      userId,
      {
        $push: {
          userTickets: newTicket._id,
        },
      }
    );

    const insert_ticketId_to_project_doc = await projectModel.findByIdAndUpdate(
      projectId,
      {
        $push: {
          ticketsId: newTicket._id,
        },
      }
    );

    return "created";
  } catch (err) {
    return "Failed to create";
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
