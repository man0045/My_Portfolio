const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

// server used to send send emails
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log("Server Running"));
console.log(process.env.EMAIL_USER);
console.log(process.env.EMAIL_PASS);

const transporter = nodemailer.createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  auth: {
      user: 'blanca89@ethereal.email',
      pass: 'pnuU7e2hAfY9Z2fVBN'
  }
});

transporter.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

router.post("/contact", (req, res) => {
  const name = req.body.firstName + req.body.lastName;
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;
  const mail = {
    from: '"mannu" <delmer.bashirian37@ethereal.email>',
    to: "mannuchaurasiya36@gmail.com",
    subject: "Contact Form Submission - Portfolio",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
  };
  router.post("/Newsletter",(req, res) =>{
    const email = req.body.email;
    const func = {
      from: '"mannu" <blance89@ethereal.email>',
      to: "mannuchaaurasiya36@gmail.com", 
      subject: "contact form for the Newsletter",
      html: `<p>Email Address: ${email}<p>`,
    };
  })
  transporter.sendMail(mail, (error) => {
    if (error) {
      res.json(error);
    } else {
      res.json({ code: 200, status: "Message Sent Successfully i will respond soon" });
    }
  });
});
