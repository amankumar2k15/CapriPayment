const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
require("dotenv").config()

const app = express();
const user = require('./routes/user')
const contactUser = require('./routes/contact')

app.use(bodyParser.json({ extended: true, limit: "5mb" }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json({ extended: true, limit: "5mb" }));

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



