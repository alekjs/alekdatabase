require('dotenv').config();
const nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GUSER,
        pass: process.env.GPASS
    }
});

var mailConfig = {
    from: process.env.GUSER,
    to: 'augov277@gmail.com',
    subject: "hello",
    text: "test"
}

transporter.sendMail(mailConfig, function(error, info){
    if(error)
    {
        console.log(error)
    }
    else
    {
        console.log(`${mailConfig.from} sent email "${mailConfig.subject}" to ${mailConfig.to} successfully`)
    }
});