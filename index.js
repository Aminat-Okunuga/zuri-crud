const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const port = process.env.port || 22100;
// db url
const database =
  "mongodb+srv://AminatOkunuga:AminatOkunuga@cluster0.l0t8b.mongodb.net/school?retryWrites=true&w=majority";

// server declaration
const app = express();
app.use(express.json);

// connect to db
mongoose
  .connect(database, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Connection Established!");
  });
  
// use cors
app.use(cors());
app.use("/", require("./controller/controller"));

// listen to port
app.listen(port, () => {
  console.log(`${port}`);
});
