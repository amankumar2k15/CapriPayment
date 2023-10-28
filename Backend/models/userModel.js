const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: { type: String, require: true, allowNull: true },
    email: { type: String, require: true, allowNull: true },
    guestEmail: { type: String, require: true, allowNull: true },
    location: { type: String, require: true, allowNull: true },
    phone: { type: Number, require: true, allowNull: true },
    whatsYourSkype: { type: String, require: true, allowNull: true },
    agenda: { type: String, require: true, allowNull: true },
    comments: { type: String, require: true, allowNull: true },
    time: { type: String, require: true, allowNull: true },
})

const UserModelCapri = mongoose.model("UserModelCapri", userSchema);

module.exports = UserModelCapri