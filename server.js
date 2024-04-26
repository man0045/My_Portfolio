// const express = require("express");
// const router = express.Router();
// const cors = require("cors");
// const nodemailer = require("nodemailer");

// // server used to send emails
// const app = express();
// app.use(cors());
// app.use(express.json());
// app.use("/", router);
// app.listen(5000, () => console.log("Server Running"));
// console.log(process.env.EMAIL_USER);
// console.log(process.env.EMAIL_PASS);

// const transporter = nodemailer.createTransport({
//   host: 'smtp.ethereal.email',
//   port: 587,
//   auth: {
//       user: 'aliya.bogisich@ethereal.email',
//       pass: 'aj98dTwjtw3SYxmvXm'
//   }
// });

// transporter.verify((error) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("Ready to Send");
//   }
// });

// router.post("/contact", (req, res) => {
//   const name = req.body.firstName + req.body.lastName;
//   const email = req.body.email;
//   const message = req.body.message;
//   const phone = req.body.phone;
//   const mail = {
//     from: '"mannu" <aliya.bogisich@ethereal.email>',
//     to: "mannuchaurasiya36@gmail.com",
//     subject: "Contact Form Submission - Portfolio",
//     html: `<p>Name: ${name}</p>
//            <p>Email: ${email}</p>
//            <p>Phone: ${phone}</p>
//            <p>Message: ${message}</p>`,
//   };
//   router.post("/Newsletter",(req, res) =>{
//     const email = req.body.email;
//     const func = {
//       from: '"mannu" <blance89@ethereal.email>',
//       to: "mannuchaaurasiya36@gmail.com", 
//       subject: "contact form for the Newsletter",
//       html: `<p>Email Address: ${email}<p>`,
//     };
//   })
//   transporter.sendMail(mail, (error) => {
//     if (error) {
//       res.json(error);
//     } else {
//       res.json({ code: 200, status: "Message Sent Successfully i will respond soon" });
//     }
//   });
// });

const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

// Securely store email credentials using environment variables
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST, // Replace with your email provider's SMTP server
  port: process.env.EMAIL_PORT, // Replace with your email provider's port
  auth: {
    user: process.env.EMAIL_USER, // Replace with your email address
    pass: process.env.EMAIL_PASS // Replace with your email password
  }
});

transporter.verify((error) => {
  if (error) {
    console.error("Error verifying email credentials:", error);
  } else {
    console.log("Ready to Send Emails using", process.env.EMAIL_USER);
  }
});

router.post("/contact", (req, res) => {
  const name = req.body.firstName + " " + req.body.lastName;
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;

  const mail = {
    from: process.env.EMAIL_FROM, // Replace with a sender email address
    to: process.env.EMAIL_TO, // Replace with the recipient email address
    subject: "Contact Form Submission - Portfolio",
    html: `
      <p>Name: ${name}</p>
      <p>Email: ${email}</p>
      <p>Phone: ${phone}</p>
      <p>Message: ${message}</p>
    `,
  };

  transporter.sendMail(mail, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      res.json({ success: false, message: "Error sending email. Please try again later." });
    } else {
      console.log("Email sent:", info.response);
      res.json({ success: true, message: "Message Sent Successfully! I will respond soon." });
    }
  });
});

app.listen(5000, () => console.log("Server Running on Port 5000"));
