// ====================================ExcelJS======================================
const ExcelJS = require("exceljs");

const createExcel = async (users) => {
    let workbook = new ExcelJS.Workbook();
    let worksheet = workbook.addWorksheet("Users")

    worksheet.columns = [
        { header: "Name", key: "name" },
        { header: "Email", key: "email" },
        { header: "Guest Email", key: "guestEmail" },
        { header: "Location", key: "location" },
        { header: "Phone", key: "phone" },
        { header: "Whats your skype", key: "whatsYourSkype" },
        { header: "Agenda", key: "agenda" },
        { header: "Comments", key: "comments" },
        { header: "Time", key: "time" },
    ];

    worksheet.addRows(users);

    const buffer = await workbook.xlsx.writeBuffer();
    return buffer
}

module.exports = { createExcel }
// ====================================ExcelJS======================================