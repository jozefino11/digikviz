require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { MongoClient, ObjectId } = require("mongodb");

const app = express();
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["POST", "GET"],
    credentials: true,
  }),
);

app.use(express.urlencoded({ extended: true }));

const url = process.env.MONGO_URL;

const PORT = process.env.PORT || 6001;
const client = new MongoClient(url);

let Points = 0;
const dbName = "digikviz";

async function main() {
  try {
    await client.connect();
    console.log("Connected succesfully to mongodb.");
    const db = client.db(dbName);

    app.listen(PORT, () => {
      console.log("App running at port 6001.");
    });

    app.post("/datas", async (req, res) => {
      const taskList = req.body.taskList;

      const collection = db.collection("digikviz" + taskList);

      const datas = await collection.find().toArray();

      return res.json({ allData: datas });
    });

    app.post("/kviz", async (req, res) => {
      try {
        const id = req.body.id;
        const userAnswer = req.body.userAnswer;
        const taskList = req.body.taskList;

        const collection = db.collection("digikviz" + taskList);
        const result = await collection.findOne({ _id: new ObjectId(id) });

        if (result.correct_answer === userAnswer) {
          Points = Points + 1;

          return res.status(200).json({ message: "Jó válasz" });
        } else {
          return res.status(200).json({ message: "Rossz válasz" });
        }
      } catch (error) {
        res.status(500).json({ errormessage: error.message });
      }
    });

    app.get("/points", (req, res) => {
      res.json({ points: Points });
      Points = 0;
    });
  } catch (err) {
    console.error(err);
  }
}

main();
