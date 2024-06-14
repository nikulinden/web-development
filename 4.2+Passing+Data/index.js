import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
var letters = "";

app.use(bodyParser.urlencoded({ extended: true }));

function numberLetters(req, res, next) {
  letters = req.body["fName"] + req.body["lName"];
  // console.log(letters.length);
  next();
};

app.use(numberLetters);

app.get("/", (req, res) => {
  res.render("index.ejs", {
    message: "Enter your name below 👇🏻"
  });
});

app.post("/submit", (req, res) => {
  res.render("index.ejs", {
    message: `Your name has ${letters.length} letters`
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
