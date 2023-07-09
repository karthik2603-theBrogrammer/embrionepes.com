const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "theembrionetech@gmail.com", // Your email address
    pass: process.env.APP_PASSWORD, // Your email password
  },
});
export default async function handler(req, res) {
  if (req.method != "POST") {
    res.status(405).json({ body: "Method Not Allowed!" });
    return;
  }

  const { fullName, emailID, subject, message } = req.body;
  const mailOptions = {
    to: "namkarthik2003@gmail.com", //The Embrione Mail comes here.
    subject: `${subject}`,
    text: `Message from ${fullName}. Embrione can reach back to him/her at ${emailID}\n\n${message}`,
  };
  const mailOptionsToDev = {
    to: "namkarthik2003@gmail.com",
    subject: `${subject}`,
    text: `Message from ${fullName}. Embrione can reach back to him/her at ${emailID}\n\n${message}`,
  };

  transporter.sendMail(mailOptionsToDev, (error, info) => {
    // this is to bypass all the mails via the embrione tech mail as well
    if (error) {
      console.log(error);
    } else {
      // console.log("Email sent: " + info.response + Date.now());
      console.log("Mail Sent Successfully!");
    }
    // res.json({name: 'This is the backendddd'})
  });
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      // console.log("Email sent: " + info.response + Date.now());
      console.log("Mail Sent Successfully!");
      res.status(200).json({
        message: "Success! Message Sent! We will get back to you shortly!",
      });
    }

  });
}
