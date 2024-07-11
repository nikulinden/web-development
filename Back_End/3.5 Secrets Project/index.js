//The password is ILoveProgramming
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
var pswd = "";

app.use(bodyParser.urlencoded({ extended: true}));

function passwordCheck(req, res, next) {
    // console.log(req.body);
    pswd = req.body["password"];
    next();
}

app.use(passwordCheck);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/check", (req, res) => {
    if (pswd === "ILoveprogramming") {
        res.sendFile(__dirname + "/public/secret.html");
    } else {
        res.redirect("/")
    }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
