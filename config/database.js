const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://Admin:Admin123@devserver.ohritct.mongodb.net/TicketsDB?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to MongoDB!");
  })
  .catch((error) => {
    console.log(error);
  });
