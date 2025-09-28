const express = require("express");
const cors = require("cors");
const app = express();
const contactsRouter = require("./app/routers/contactrouter");

app.use(cors());
app.use(express.json()); //content-type la json thi okie
app.use("/api/contacts", contactsRouter);
app.get("/", (req, res) => {
    res.json({
        message: "welcome to contact book application."
    });
})

app.get("/hello", (req, res) => {
    res.json({
        message: "welcpplication."
    });
})
app.get('/sayhi/:name', function (req, res) {
    const name = req.params.name;
    res.send(`hello ${name}`);
})
app.post('/sayhi', function (req, res) {
    const body = req.body;
    const name = body.name;
    const age = body.age;
    const address = body.address;
    res.send(`${name} ${age} year olds, your address is ${address}`);
})
module.exports = app;

