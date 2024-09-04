const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const multer = require("multer");
const bodyParser = require("body-parser");
const Routes = require("./routes/route");
const { exec } = require("child_process");
const modelController  = require('./controller/Model-controller')
const MONGO_URL = "mongodb://127.0.0.1:27017/DecentralisedAIMART";
const PORT = 5000;
const path = require("path");


app.use(express.json());
app.use(cors());





mongoose
  .connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB", err));



app.use("/", Routes);
app.use(bodyParser.json());



const scriptPath =
  "C:/Users/PC/Desktop/hackfolder/ServerSide/facedetection/webcam.py";

app.post("/start-webcam", (req, res) => {
  exec(`python "${scriptPath}"`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing script: ${error}`);
      return res.status(500).json({ message: "Failed to start the script" });
    }
    res.json({
      message: "Webcam script started",
      output: stdout,
      error: stderr,
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server started at port no. ${PORT}`);
});

console.log("MongoDB URL:", MONGO_URL);
