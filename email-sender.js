const nodemailer = require('nodemailer');

async function sendEmail(to, subject, text) {
    let transporter = nodemailer.createTransport({
        host: 'smtp.example.com',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'username@example.com',
            pass: 'yourpassword'
        }
    });

    let mailOptions = {
        from: 'username@example.com',
        to: to,
        subject: subject,
        text: text
    };

    let info = await transporter.sendMail(mailOptions);
    console.log(`Email sent to ${to} with subject "${subject}" and text "${text}": `, info.messageId);
}