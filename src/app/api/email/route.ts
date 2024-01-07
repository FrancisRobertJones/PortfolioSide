import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { name, email, message } = req.body;
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.emailUser,
            pass: process.env.emailPass,
        },
      });

      const mailOptions = {
        from: process.env.emailUser,
        to: process.env.emailReciever,
        subject: 'New Contact Form Submission',
        html: `<h1>Name: ${name}</h1> <h1>Email: ${email}</h1> <h1>Message: ${message}</h1>`,
      };

      const info = await transporter.sendMail(mailOptions);

      console.log('Email sent: %s', info.messageId);

      res.status(200).json({ success: true });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ success: false, error: 'Method Not Allowed' });
  }
}
