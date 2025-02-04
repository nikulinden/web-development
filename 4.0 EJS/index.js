import express from "express";

const app = express();
const port = 3000;


app.get("/", (req, res) => {
    const today = new Date();
    const day = today.getDay();

    let type = "a weekday";
    let advice = "it is time to work hard";

    if (day === 0 || day === 6){
        let type = "the weekend";
        let advice = "it is time to have some fun";
    }

    res.render("index.ejs", {
        dayType: "a weekday",
        advice: "it is time to work hard",
    });
    // if (day === 0 || day === 6){
    //     res.send("<h1>Today is weekend");
    // } else {
    //     res.send("<h1>Today is weekday</h1>");
    // }
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });