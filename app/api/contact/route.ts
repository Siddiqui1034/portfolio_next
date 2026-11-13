import dns from "dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]);

import { NextRequest, NextResponse } from "next/server";
import ContactModel from "@/app/models/contact.model";
import nodemailer from "nodemailer";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose
  .connect(
    `mongodb+srv://nausheen:14Nausheen$@finalproject.z9dhgcu.mongodb.net/portfolio`,
  )
  .then(() => console.log("DB connected"))
  .catch((error) => console.log("Failed to connect from DB", error.message));

interface ContactInterface {
  fullname: string;
  email: string;
  phone: string;
  designation: string;
  company: string;
  message: string;
}

// Nodemailer Transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS, // 16-character Google App Password
  },
});

export const POST = async (req: NextRequest) => {
  try {
    const body: ContactInterface = await req.json();
    const { fullname, email, phone, designation, company, message } = body;

    if (!fullname || !email || !phone || !designation || !company || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 },
      );
    }

    // 1. Send Email Notification
    const mailOptions = {
      from: `${email}`,
      to: process.env.SMTP_USER || "siddiqui.techsunset@gmail.com",
      replyTo: `${email}`,
      subject: `New Portfolio Lead from ${fullname}`,
      html: `
        <div style="font-family: Arial, sans-serif; background: #0c081e; color: #ffffff; padding: 25px; border-radius: 12px; border: 1px solid #7c3aed;">
          <h2 style="color: #c084fc; margin-bottom: 20px;">New Inquiry via Portfolio</h2>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr>
              <td style="padding: 8px 0; color: #94a3b8; width: 140px;"><strong>Sender Name:</strong></td>
              <td style="padding: 8px 0; color: #ffffff;">${fullname}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #94a3b8;"><strong>Email:</strong></td>
              <td style="padding: 8px 0; color: #ffffff;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #94a3b8;"><strong>Phone:</strong></td>
              <td style="padding: 8px 0; color: #34d399;">${phone}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #94a3b8;"><strong>Designation:</strong></td>
              <td style="padding: 8px 0; color: #ffffff;">${designation}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #94a3b8;"><strong>Company:</strong></td>
              <td style="padding: 8px 0; color: #ffffff;">${company}</td>
            </tr>
          </table>
          <div style="background: #140d2e; padding: 16px; border-radius: 8px; border-left: 4px solid #a855f7;">
            <p style="margin: 0; color: #e2e8f0; white-space: pre-wrap;">${message}</p>
          </div>
          <p style="margin-top: 20px; font-size: 11px; color: #64748b;">Received at ${new Date().toLocaleString()}</p>
        </div>
      `,
    };

    const newContact = await ContactModel.create({
      fullname,
      email,
      phone,
      designation,
      company,
      message,
    });

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      {
        success: true,
        message: "Message sent successfully!",
        data: newContact,
      },
      { status: 200 },
    );
  } catch (error: any) {
    // Print real error to terminal so you know exact cause if it fails
    console.error("Detailed SMTP/Server error:", error);
    return NextResponse.json(
      {
        error:
          error?.message ||
          "Failed to send email. Please verify SMTP credentials.",
      },
      { status: 500 },
    );
  }
};
