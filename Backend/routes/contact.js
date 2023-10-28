const express = require('express');
const bodyParser = require("body-parser");
const router = express.Router()

const { createContact } = require("../controller/contactController")

router.post("/create-contactUSer", createContact)

module.exports = router;
