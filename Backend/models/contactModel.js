const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
    name: { type: String, required: true, allowNull: true },
    email: { type: String, required: true, allowNull: true },
    phone: { type: Number, required: true, allowNull: true },
    message: { type: String, required: true, allowNull: true },
})

const ContactModelCapri = mongoose.model("ContactModelCapri", contactSchema)

module.exports = ContactModelCapri