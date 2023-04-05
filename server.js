const express = require('express');
const router = express.Router();
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log("server running on port 5000"))

const contactEmail = nodemailer.createTransport({
    host: "smtp-mail.outlook.com", // hostname
    secureConnection: false, // TLS requires secureConnection to be false
    port: 587, // port for secure SMTP
    service: 'outlook',
    auth: {
        user: "john.green12399@outlook.com",
        pass: "Lynn91979",
    },
    tls: {
        ciphers: 'SSLv3'
    }
});

const noReplyEmail = nodemailer.createTransport({
    service: "outlook",
    auth: {
        user: "john.green12399@outlook.com",
        pass: "Lynn91979"
    }
});

contactEmail.verify((error) =>{
    if (error) {
        console.log(error);
    } else {
        console.log("contactEmail is ready to send")
    }
});

noReplyEmail.verify((error) =>{
    if (error) {
        console.log(error);
    } else {
        console.log("noReplyEmail is ready to send")
    }
});

router.post("/contact", (req, res) => {
    const { name, email, message } = req.body;
  
    const mail = {
      from: "john.green12399@outlook.com",
      to: "john.green12399@outlook.com",
      subject: "New Contact from Portfolio Page",
      html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`
    };
  
    contactEmail.sendMail(mail, (error) => {
        if (error) {
            console.log(error);
            res.json({ status: "ERROR" });
        } else {
            console.log("Mail sent successfully!");
            res.json({ status: "Message Sent "});
        }
    });
});

router.post('/send', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    
    const mail = {
        from: "john.green12399@outlook.com",
        to: email,
        subject: "Thank for Reaching Out, We will be back to you soon!",
        html: 
        `<p>Hi ${name},</p>
        <p>Thanks for Contacting us!</p>
        <p>We will get back to you soon!</p>`
    }

    noReplyEmail.sendMail(mail, (error) => {
        if (error) {
            console.log(error);
            res.json({ status: "ERROR" });
        } else {
            console.log("Mail sent successfully!");
            res.json({ status: "Message Sent "});
        }
    });
});

router.post("/contact", (req, res) => {
    const { name, useremail, message } = req.body;
  
    const mail = {
      from: "john.green12399@outlook.com",
      to: "john.green12399@outlook.com",
      subject: "New Contact from Portfolio Page",
      html: `<p>Name: ${name}</p><p>Email: ${useremail}</p><p>Message: ${message}</p>`
    };
  
    contactEmail.sendMail(mail, (error) => {
        if (error) {
            console.log(error);
            res.json({ status: "ERROR" });
        } else {
            console.log("Mail sent successfully!");
            res.json({ status: "Message Sent "});
        }
    });
});



