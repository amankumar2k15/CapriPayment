const UserModelCapri = require("../models/userModel");
const { scheduledMail } = require("../Email/Email")

const createUser = async (req, res) => {
    const user = req.body
    const newUser = new UserModelCapri(user);

    try {
        await newUser.save();
        console.log(newUser)
        return res.status(201).json({
            message: "You have successfully scheduled your event",
            result: newUser,
            scheduleEvent: scheduledMail(newUser)
        })

    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
}

const getAllUser = async (req, res) => {
    try {
        const user = await UserModelCapri.find({})
        if (!user) {
            return res.status(404).json({ message: "User does not find" })
        }
        return res.status(200).json({
            message: "Users fetched successfully",
            result: user,
            count: user.length
        })

    } catch (err) {
        return res.status(500).json({ message: err.message })
    }

}

module.exports = { createUser, getAllUser }