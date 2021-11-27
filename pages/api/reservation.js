require('dotenv').config()
const PASSWORD = process.env.password;

export default function (req, res) {
  let nodemailer = require('nodemailer')
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: 'oldstarsharold@gmail.com',
      pass: PASSWORD,
    },
    secure: true,
  });
  const mailData = {
    from: 'oldstarsharold@gmail.cz',
    to: 'lukas.sahula@icloud.com',
    subject: `Rezervace`,
    text: `Na jméno ${req.body.name} ${req.body.email} ${req.body.amount}`,
  }
  transporter.sendMail(mailData, function (err, info) {
    if(err)
      console.log(err)
    else
      console.log(info)
  })
  res.status(200);
}
