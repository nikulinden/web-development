import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    // console.log(req.rawHeaders);
    res.send("<h1>Hi</h1>")
});

app.get("/about", (req, res) => {
    // console.log(req.rawHeaders);
    res.send("<h1>About me</h1><p>My name is Cornelius</p>")
});

app.get("/contact", (req, res) => {
    // console.log(req.rawHeaders);
    res.send("<h1>Contact Me</h1><p>Phone:123-456-7788<p>")
});

app.listen(port, () => {
    console.log(`The Server is running on port ${port}.`);
});

