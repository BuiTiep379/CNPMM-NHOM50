const nodemailer = require('nodemailer');

const sendMail = async ({ to, subject, html }) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
      user: 'carmelo.hackett52@ethereal.email',
      pass: 'sGfjdAYuEXBrhbWGra'
    }
  });
  transporter.sendMail({
    from: process.env.EMAIL_USER,
    to,
    subject,
    html,
  });
};

module.exports = sendMail;
