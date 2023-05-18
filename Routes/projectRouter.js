const express = require("express");
const router = express.Router();
const projectBL = require("../BLs/projectBL");

router.post("/:userid", async (req, res) => {
  try {
    const { userid } = req.params;
    console.log(userid);
    const projectObj = req.body;
    console.log(projectObj);
    const newProject = await projectBL.createProject(projectObj, userid);
    res.status(200).json(newProject);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/", async (req, res) => {
  try {
    const projects = await projectBL.getAllProjects();
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/projectid/:projectid", async (req, res) => {
  try {
    const { projectid } = req.params;
    const project = await projectBL.getProjectByID(projectid);
    res.status(200).json(project);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/:title", async (req, res) => {
  try {
    const { title } = req.params;
    const project = await projectBL.getProjectByTitle(title);
    res.status(200).json(project);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.put("/:projectid", async (req, res) => {
  try {
    const { projectid } = req.params;
    const projectObj = req.body;
    const updatedProject = await projectBL.updateProject(projectid, projectObj);
    res.status(200).json(updatedProject);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.delete("/:projectid", async (req, res) => {
  try {
    const { projectid } = req.params;
    const deletedProject = await projectBL.deleteProject(projectid);
    res.status(200).json(deletedProject);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
