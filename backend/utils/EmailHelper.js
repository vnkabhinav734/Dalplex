/*Author: Sumit Kumar B00904097*/
const nodemailer = require("nodemailer");
const fs = require("fs");

const sendEmailNotification = (email, subject, templateName, templateData) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  const emailTemplate = fs.readFileSync(`templates/${templateName}.html`, "utf-8");
  let emailBody = emailTemplate;

  for (const [key, value] of Object.entries(templateData)) {
    emailBody = emailBody.replace(`{${key}}`, value);
  }

  const mailOptions = {
    from: process.env.EMAIL,
    to: email,
    subject: subject,
    html: emailBody
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log(err);
    } else {
      console.log(`Email sent: ${info.response}`);
    }
  });
};

module.exports = {
    sendEmailNotification
};