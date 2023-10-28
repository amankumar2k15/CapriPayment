const express = require('express');
const bodyParser = require("body-parser");
const router = express.Router()

const { createUser, getAllUser } = require("../controller/userController")

router.post("/create-user", createUser)
router.get("/get-user", getAllUser)

module.exports = router;
