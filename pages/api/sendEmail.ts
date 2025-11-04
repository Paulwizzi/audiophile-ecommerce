import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") 
    return res.status(405).json({ message: "Method not allowed" });


  const { name, email, total } = req.body;

  if (!email || !name) {
    return res.status(400).json({ message: "Missing required fields" });
  }

try {
  const transporter = nodemailer.createTransport({
    service: "gmail", // or any SMTP service
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

   // Define the email
    const mailOptions = {
      from: "wisdompaul20@gmail.com",
      to: email, // send to user
      subject: "Order Confirmation - Audiophile",
      text: `Hello ${name}, thank you for your order! Your total is $${total}.`,
      html: `
        <h2>Thank you for your order, ${name}!</h2>
        <p>We’ve received your order and will process it shortly.</p>
        <p><strong>Total:</strong> $${total}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Email sending failed:", error);
    return res.status(500).json({ message: "Email sending failed" });
  }
}
