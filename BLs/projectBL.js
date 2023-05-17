const projectModel = require("../Models/projectModel");

const createProject = async (projectObj) => {
  try {
    await projectModel.create(projectObj);
    return "Created!";
  } catch (error) {
    return "Failed to create :(.";
  }
};

const getAllProjects = async () => {
  try {
    const projects = await projectModel.find({});
    return projects;
  } catch (error) {
    throw error;
  }
};

const getProjectByID = async (id) => {
  try {
    const project = await projectModel.findById(id);
    return project;
  } catch (error) {
    throw error;
  }
};

const getProjectByTitle = async (title) => {
  try {
    const project = await projectModel.find({ title: title });
    return project;
  } catch (error) {
    throw error;
  }
};

const updateProject = async (id, projectObj) => {
  try {
    await projectModel.findByIdAndUpdate(id, projectObj);
    return "Updated!";
  } catch (error) {
    throw error;
  }
};

const deleteProject = async (id) => {
  try {
    console.log(id);
    await projectModel.findByIdAndDelete(id);
    return "Deleted!";
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createProject,
  getAllProjects,
  getProjectByID,
  getProjectByTitle,
  updateProject,
  deleteProject,
};
