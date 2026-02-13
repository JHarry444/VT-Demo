const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());
app.use(express.json());



app.get("/", (req, res) => {
    res.send("Hello, World!");
});

const trainerRouter = require("./routes/trainers");

app.use("/trainers", trainerRouter);

app.use((err, req, res, next) => {
    res.status(err.status || 500).send(err.msg || err);
})


const server = app.listen(8080, () => {
    console.log(`Server started successfully on port ${server.address().port}`);
});

module.exports = server;