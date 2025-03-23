const {Router} = require('express')
const indexRouter = Router()

let messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date(),
      id:1
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date(),
      id:2
    }
  ]

indexRouter.get("/", (req, res) => {
    res.render("index", { title: "Mini Messageboard", messages: messages });
});

indexRouter.get("/new", (req, res) => {
    res.render("form");
});

indexRouter.get("/message/:messageId/details", (req, res) => {
    const messageId = req.params.messageId;
    const messageDetails = messages.find(message => message.id === Number(messageId));
    if (!messageDetails) {
        res.status(404).send("Message not found");
    }
    res.render("messageDetails", { message: messageDetails });
});

let nextid = 3;
indexRouter.post("/new", (req, res) => {
    const messageText = req.body.text;
    const messageUser = req.body.user;
    messages.push({ text: messageText, user: messageUser, added: new Date(), id: nextid++ });
    res.redirect("/");
});

module.exports = indexRouter;