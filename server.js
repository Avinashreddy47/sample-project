const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log("Server Running"));

const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "***************@gmail.com",
    pass: "********",
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

router.post("/Home", (req, res) => {
  const name = req.body.name;
  const last = req.body.last;
  const email = req.body.email;
  const query = req.body.query;
  const message = req.body.message; 
  const mail = {
    from: name,
    to: "***************@gmail.com",
    subject: "Contact Form Message",
    html: `<p>Name: ${name}' '${last}</p><p>Email: ${email}</p><p>company: ${query}</p><p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json({ status: "ERROR" });
    } else {
      res.json({ status: "Message Sent" });
    }
  });
});