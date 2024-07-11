import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true}));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  const band_name = req.body.street + " " + req.body.pet;
  res.send(`<h1>${band_name}</h1>`);
  console.log(`band name: ${band_name}`);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
