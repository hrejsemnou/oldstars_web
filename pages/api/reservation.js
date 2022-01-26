require('dotenv').config()
const CLIENT_ID = process.env.MAIL_CLIENT_ID;
const CLIENT_SECRET = process.env.MAIL_CLIENT_SECRET;
const REFRESH_TOKEN = process.env.MAIL_REFRESH_TOKEN;
const ACCESS_TOKEN = process.env.MAIL_ACCESS_TOKEN;

export default async function (req, res) {
  let nodemailer = require('nodemailer')
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      type: 'OAuth2',
      clientId: CLIENT_ID.replace(/\\n/g, '\n'),
      clientSecret: CLIENT_SECRET.replace(/\\n/g, '\n'),
      refreshToken: REFRESH_TOKEN.replace(/\\n/g, '\n'),
      accessToken: ACCESS_TOKEN.replace(/\\n/g, '\n'),
      accessUrl: "https://oauth2.googleapis.com/token",
      user: 'demo.odesilatel@gmail.com',
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
