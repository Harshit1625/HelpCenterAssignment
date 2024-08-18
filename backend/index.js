const express = require("express");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv");
const { mongoose } = require("mongoose");
const Card = require("./dbModel/db");
dotenv.config();

app.use(express.json());

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

// ---------------------------- Routes ----------------------------------

app.get("/ping", (req, res) => {
  console.log("Server is running !!");
});

//--------------------- Route to get all cards ---------------------------
app.get("/cards", async (req, res) => {
  try {
    const cardData = await Card.find({});
    console.log(cardData);
    console.log(cardData);
    res.status(200).json(cardData);
  } catch (error) {
    req.status(500).json({ msg: "Internal Server Error" });
  }
});

//--------------------- Route to post cards ---------------------------
app.post("/cards", async (req, res) => {
  try {
    const { id, title, description } = req.body;
    console.log(id, title, description);
    const idPresent = await Card.findOne({ id: id });
    const titlePresent = await Card.findOne({ title: title });
    if (idPresent || titlePresent) {
      return res.status(400).json({ msg: "Already Present" });
    }
    const card = await Card.create({
      id,
      title,
      description,
    });
    console.log(card);
    res.status(200).json(card);
  } catch (error) {
    res.status(500).json(error);
  }
});

//--------------------- Route to get cards on the basis of title ---------------------------
app.get("/cards/:title", async (req, res) => {
  const title = req.params.title;
  const idPresent = await Card.findOne({ title: title });
  if (!idPresent) {
    res.status(400).json({ msg: "Card Not Present" });
  }
  res.status(200).json(idPresent);
});

//---------------------- Server Instantiation ---------------------------
app.listen(4000, async () => {
  const connection = await mongoose.connect(process.env.MONGO_URI);
  if (connection) console.log("Server Instantiated");
});
