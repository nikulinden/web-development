import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const today = new Date();
const dayOfWeek = today.getDay();
var msg = ""

function messageToYou() { // just trying out the switch statement in JS
  switch (dayOfWeek){
    case 0:
    case 6:
      msg = "Hey! It is a weekend, it's time to have fun!";
      break;
    case 1:
    case 2:
    case 3:
    case 4:
      msg = "Hey! It is a weekend, it's time to have fun!"; // he-he-he
      break;
    case 5:
      msg = "Hey! It is a weekday, it is time to work hard!";
      break;
    default:
      msg = "Error";
  }  
}

messageToYou();

const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.set('index.ejs', path.join(__dirname, '/views/index.ejs'));

app.get("/", (req, res) => {
  res.render('index.ejs', { title: 'Home Page', message:`${msg}`});
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});