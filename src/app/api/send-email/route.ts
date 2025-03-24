import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.json();
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = Number(process.env.SMTP_PORT);
    const recipientEmail = process.env.MAIL_TO;
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort, // Using provided SMTP port
      secure: false, // Port 25 is usually not secure
      tls: {
        rejectUnauthorized: false, // Allow self-signed certificates
      },
    });

    const mailOptions = {
      from: formData.companyEmail,
      to: recipientEmail,
      subject: `Form Submission from ${formData.companyName}`,
      text: `
        Company Name: ${formData.companyName}
        Website: ${formData.companyWebsite}
        Email: ${formData.companyEmail}
        Phone: ${formData.companyPhone}
        Contact Person: ${formData.companyContact}
        Comment: ${formData.companyComment}
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Email sent successfully!" }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Error sending email" }, { status: 500 });
  }
}
