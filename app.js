const express = require('express')
const app = express()
const path = require("node:path");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date()
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date()
    }
  ];

app.get("/", (req, res) => {
    res.render("index", { messages: messages });
});

app.get("/new", (req, res) => {
    res.render("index", { message: "EJS rocks!" });
});

const PORT = 3000
app.listen(PORT, () => {
  console.log(`My first Express app - listening on port http://localhost:${PORT}`)
})