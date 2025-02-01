import nodemailer from "nodemailer";
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ success: false, message: "Method Not Allowed" });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res
      .status(400)
      .json({ success: false, message: "All fields are required" });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail
        pass: process.env.EMAIL_PASS, // Your Gmail App Password
      },
    });

    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER,
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
