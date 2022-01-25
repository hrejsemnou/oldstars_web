require('dotenv').config()
const PASSWORD = process.env.PASSWORD; //heslo k mailu z env variable

export default async function (req, res) {
  let nodemailer = require('nodemailer')
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: 'demo.odesilatel@gmail.com',
      pass: PASSWORD,
    },
    secure: true,
  });
  const mailData = {
    from: 'demo.odesilatel@gmail.com',
    to: 'klara.vankatova.kv@seznam.cz',
    subject: `Rezervace`,
    text: `Rezervace na představení ${req.body.title} ${req.body.rerun.date} ${req.body.rerun.time} ${req.body.rerun.place}. Jméno: ${req.body.name}, e-mail: ${req.body.email}, počet lístků: ${req.body.amount}`,
  }

  await new Promise((resolve, reject) => {
      // verify connection configuration
      transporter.verify(function (error, success) {
          if (error) {
              console.log(error);
              reject(error);
          } else {
              console.log("Server is ready to take our messages");
              resolve(success);
          }
      });
  });

  await new Promise((resolve, reject) => {
    transporter.sendMail(mailData, function (err, info) {
      if (err) {
        console.error(err);
        reject(err);
      }
      else {
        console.log(info)
        resolve(info);
      }
    });
  });
  res.status(200).json({ status: "OK" });
}
