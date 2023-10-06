const express = require('express');
const mongoose = require('mongoose');

const authRouter = require("./routes/auth");

// Init
const PORT = 3000;
const app = express();
const DB = "mongodb+srv://siddhant:siddhant1@cluster0.pfmzwwe.mongodb.net/?retryWrites=true&w=majority";

// Middleware
app.use(authRouter);

// Connections
mongoose
    .connect(DB)
    .then(() => {
        console.log("Connection Successful");
    })
    .catch((e) => {
        console.log(e);
    });

// Creating an API

app.listen(PORT, () => {
    console.log(`connected at port ${PORT}`);
});