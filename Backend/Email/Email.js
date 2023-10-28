const nodemailer = require("nodemailer");
require("dotenv").config()


function scheduledMail(newUser) {

    const mailTransporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.USER_DETAILS,
            pass: process.env.PASS
        }
    })

    const mailingDetails = {
        from: newUser.email,
        to: process.env.USER_DETAILS,
        subject: "Scheduled Event Data",
        text: `The data of the Scheduled User is:-
        Name : ${newUser.name}
        Email: ${newUser.email},
        GuestEmail: ${newUser.guestEmail},
        Location: ${newUser.location},
        Phone: ${newUser.phone},
        What's Your Skype: ${newUser.whatsYourSkype},
        Agenda: ${newUser.agenda},
        Comments: ${newUser.comments},
        Time: ${newUser.time},   
        `
    }

    mailTransporter.sendMail(mailingDetails, function (err, data) {
        if (err) {
            console.log(err.message)
        } else {
            console.log("Mail got successfully")
        }
    })
}



//For contact Form
function sendEmailToContact(newUserContact) {
    const mailTransporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.USER_DETAILS,
            pass: process.env.PASS
        }
    })

    const mailingDetails = {
        from: newUserContact.email,
        to: process.env.USER_DETAILS,
        subject: "User details",
        text: `These are the USER_DETAILS who has filled the Capri Payments Contact Form",
        Name : ${newUserContact.name}
        Email : ${newUserContact.email}
        Phone No: ${newUserContact.phone}
        Message : ${newUserContact.message}`
    }

    mailTransporter.sendMail(mailingDetails, function (err, data) {
        if (err) {
            console.log(err.message)
        } else {
            console.log("Mail send successfully")
        }
    })
}


module.exports = { scheduledMail, sendEmailToContact }