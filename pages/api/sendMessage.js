const nodemailer = require('nodemailer')

export default async function handler(req,res){
    if (req.method != 'POST') {
        res.status(405).json({ body: 'Method Not Allowed' });
        return
    }
    const { message } = req.body
    const newMessage = {
        ...message,
        created_at: new Date(Date.now()).toLocaleDateString()
        //so far i got the data from the client maybe, then now we push it to redis
    }
    console.log(newMessage)
    res.status(200).json({ message: newMessage });
}