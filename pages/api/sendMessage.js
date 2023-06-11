const nodemailer = require('nodemailer')
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: 'Embrione Test Mail.', // Your email address
      pass: '2 factor Authentication' // Your email password
    }
  });
export default async function handler(req,res){
    if (req.method != 'POST') {
        res.status(405).json({ body: 'Method Not Allowed' });
        return
    }
    const { fullName, email, subject, message } = req.body
    const mailOptions = {
        // from: 'pes1202100591@pesu.pes.edu',
        to: 'karthiknamboori42@gmail.com',
        subject: 'Alert!',
        text: `Embrione Website test mail ${test_count}`
      };

    const newMessage = {
        ...message,
        created_at: new Date(Date.now()).toLocaleDateString()
        //so far i got the data from the client maybe, then now we push it to redis
    }
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error);
      
        } else {
          console.log('Email sent: ' + info.response + Date.now());
        }
        // res.json({name: 'This is the backendddd'})
      });
    console.log(newMessage)
    res.status(200).json({ message: newMessage });
}