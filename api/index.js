const mongoose = require("mongoose");
const express = require("express");
const dotenv = require("dotenv");
const itemRoute = require("./routes/item");
const app = express();
const cors = require("cors");
dotenv.config();

// DB Connection
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("DB Connection Succesfull");
  })
  .catch((err) => {
    console.log(err);
  });

// App configuration
app.use(cors());
app.use(express.json());
app.use("/api/items", itemRoute);

app.listen(process.env.PORT || 5000, () => {
  console.log("Backend server is running");
});
