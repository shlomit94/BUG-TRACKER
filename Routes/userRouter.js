const express = require("express");
const router = express.Router();
const userBL = require("../BLs/userBL");

router.post("/register", async (req, res) => {
  try {
    const obj = req.body;
    const newUser = await userBL.createUser(obj);
    res.status(200).json(newUser);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/login", async (req, res) => {
  try {
    const obj = req.body;
    const user = await userBL.loginUser(obj);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/", async (req, res) => {
  try {
    const users = await userBL.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/userid/:userid", async (req, res) => {
  try {
    const { userid } = req.params;
    const user = await userBL.getUserByID(userid);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/fname/:fname", async (req, res) => {
  try {
    const { fname } = req.params;
    const user = await userBL.getUserByFirstName(fname);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/lname/:lname", async (req, res) => {
  try {
    const { lname } = req.params;
    console.log(lname);
    const user = await userBL.getUserByLastName(lname);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.put("/:userid", async (req, res) => {
  try {
    const { userid } = req.params;
    const userObj = req.body;
    const updatedUser = await userBL.updateUser(userid, userObj);
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.delete("/:userid", async (req, res) => {
  try {
    const { userid } = req.params;
    const deletedUser = await userBL.deleteUser(userid);
    res.status(200).json(deletedUser);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
