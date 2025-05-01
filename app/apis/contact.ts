import nodemailer from "nodemailer";
import { NextApiRequest, NextApiResponse } from "next";

interface ContactRequestBody {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ApiResponse {
  success: boolean;
  message: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse>
) {
  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ success: false, message: "Method Not Allowed" });
  }

  const { name, email, subject, message } = req.body as ContactRequestBody;

  if (!name || !email || !subject || !message) {
    return res
      .status(400)
      .json({ success: false, message: "All fields are required" });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER as string, // Your Gmail
        pass: process.env.EMAIL_PASS as string, // Your Gmail App Password
      },
    });

    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER as string,
      subject: `New Contact Message from ${name}`,
      text: message,
    });

    return res
      .status(200)
      .json({ success: true, message: "Message sent successfully!" });
  } catch (error) {
    console.error("Email sending error:", error);
    return res
      .status(500)
      .json({ success: false, message: "Failed to send message" });
  }
}
