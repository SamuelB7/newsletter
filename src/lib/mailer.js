const nodemailer = require('nodemailer')

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "bb068ddf8e7f9a",
      pass: "77833fbb207ae6"
    }
});

module.exports = transport