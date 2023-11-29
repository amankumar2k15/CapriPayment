const ContactModelCapri = require("../models/contactModel");
const { sendEmailToContact } = require("../Helper/Email")

const createContact = async (req, res) => {
    const userContact = req.body;
    const newUserContact = new ContactModelCapri(userContact)

    try {
        await newUserContact.save()
        return res.status(201).json({
            message: "New User Contact is successfully created",
            result: newUserContact,
            sendEmail: sendEmailToContact(newUserContact)
        })
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
}

module.exports = { createContact }