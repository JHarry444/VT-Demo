const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();


app.use(cors({
  origin: 'http://127.0.0.1:5500',
  credentials: true, 
  optionsSuccessStatus: 200 
}));
app.use(bodyParser.json());



app.get("/", (req, res) => {
    res.send("Hello, World!");
});

const authRouter = require("./routes/auth");
app.use("/auth", authRouter);

const trainerRouter = require("./routes/trainers");

app.use("/trainers", trainerRouter);

app.use((err, req, res, next) => {
    res.status(err.status || 500).send(err.msg || err);
})


const server = app.listen(8080, () => {
    console.log(`Server started successfully on port ${server.address().port}`);
});

module.exports = server;