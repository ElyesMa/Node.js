var nodemailer = require('nodemailer');
var prompt = require('prompt-sync')();
let mail = prompt('your mail adresse?');
let receiver=prompt('receiver mail adresse?');

var transporter = nodemailer.createTransport({
    aliases: ["Google Mail"],
    domains: ["gmail.com", "googlemail.com"],
    host: "smtp.gmail.com",
    port: 465,
    secure: true,

  auth: {
    user: mail,
    pass: "uorlixefgqtkhlyn"
  }
});

var mailOptions = {
  from: mail,
  to: receiver,
  subject: "Node.js chekpoint : email-sender",
  text: "Hello Node!"
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});