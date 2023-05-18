const userModel = require("../Models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const JWT_SECRET = "hjfhfhbvbnm()jhgjghjggcc?khjkh[]jjggv";

const createUser = async (userObj) => {
  const encriptedPassword = await bcrypt.hash(userObj.password, 10);

  const newUser = new userModel({
    fname: userObj.fname,
    lname: userObj.lname,
    email: userObj.email,
    password: encriptedPassword,
  });
  console.log(newUser);

  try {
    newUser.save();
    return "Created!";
  } catch (error) {
    throw "Failed to create :(";
  }
};

const loginUser = async (userObj) => {
  try {
    const { email, password } = userObj;
    const user = await userModel.findOne({ email });
    if (!user) {
      return "Incorrect email";
    }

    if (await bcrypt.compare(password, user.password)) {
      const token = jwt.sign({}, JWT_SECRET);
      return "Login successfully";
    } else {
      return "Incorrect password";
    }
  } catch (error) {
    throw "Failed to login";
  }
};

const getAllUsers = async () => {
  try {
    const users = await userModel.find({}).populate("userProjects");
    return users;
  } catch (error) {
    throw error;
  }
};

const getUserByID = async (id) => {
  try {
    const user = await userModel.findById(id);
    return user;
  } catch (error) {
    throw error;
  }
};

const getUserByFirstName = async (fname) => {
  try {
    const user = await userModel.find({ fname: fname });
    return user;
  } catch (error) {
    throw error;
  }
};

const getUserByLastName = async (lname) => {
  try {
    const user = await userModel.find({ lname: lname });
    return user;
  } catch (error) {
    throw error;
  }
};

const updateUser = async (id, userObj) => {
  try {
    await userModel.findByIdAndUpdate(id, userObj);
    return "Updated!";
  } catch (error) {
    throw error;
  }
};

const deleteUser = async (id) => {
  try {
    await userModel.findByIdAndDelete(id);
    return "Deleted!";
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createUser,
  loginUser,
  getAllUsers,
  getUserByID,
  getUserByFirstName,
  getUserByLastName,
  updateUser,
  deleteUser,
};
