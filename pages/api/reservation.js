require('dotenv').config()
const PASSWORD = process.env.password;

export default function (req, res) {
  let nodemailer = require('nodemailer')
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: 'demo.odesilatel@gmail.com',
      pass: 'demo12345',
    },
    secure: true,
  });
  const mailData = {
    from: 'demo.odesilatel@gmail.com',
    to: 'demo.prijemce@gmail.com',
    subject: `Rezervace`,
    text: `Rezervace na představení ${req.body.title} ${req.body.rerun.date} ${req.body.rerun.time} ${req.body.rerun.place}. Jméno: ${req.body.name}, e-mail: ${req.body.email}, počet lístků: ${req.body.amount}`,
  }
  transporter.sendMail(mailData, function (err, info) {
    if(err)
      console.log(err)
    else
      console.log(info)
  });
  res.status(200).end();
}
