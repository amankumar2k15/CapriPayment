const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require("dotenv").config()
const compression = require("compression");

const app = express();

const user = require('./routes/user')
const contactUser = require('./routes/contact')

// ---------------------------------------------compression--------------------------------------------
app.use(compression());
// ---------------------------------------------compression--------------------------------------------

//Middlewares
app.use(bodyParser.json({ extended: true, limit: "5mb" }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json({ extended: true, limit: "5mb" }));

// Serve static files with Cache-Control header
const oneDayInSeconds = 86400;
app.use(express.static(path.join(__dirname, 'public'), {
    maxAge: oneDayInSeconds * 1000  // Cache for 1 day
}));

//Routes
app.use('/user', user)
app.use('/contact', contactUser)

// Connecting to Database
mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(process.env.PORT, function () {
            console.log(`Server is running on port ${process.env.PORT}`)
            console.log("Connected to Database")
        })
    }).catch((err) => console.log(err))



