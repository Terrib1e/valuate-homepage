"use server"

import sgMail from "@sendgrid/mail"

sgMail.setApiKey(process.env.SENDGRID_API_KEY!)

export async function submitContactFormSendGrid(formData: FormData) {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const company = formData.get("company") as string
  const message = formData.get("message") as string

  // Validate required fields
  if (!name || !email) {
    return {
      success: false,
      message: "Name and email are required fields.",
    }
  }

  try {
    // Send notification email to your team
    await sgMail.send({
      to: "contact@valuate.ai", // Replace with your actual email
      from: "noreply@yourdomain.com", // Replace with your verified sender email
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || "Not provided"}</p>
        <p><strong>Message:</strong></p>
        <p>${message || "No message provided"}</p>
        <hr>
        <p><em>This email was sent from the Valuate contact form.</em></p>
      `,
    })

    // Send confirmation email to the user
    await sgMail.send({
      to: email,
      from: "noreply@yourdomain.com", // Replace with your verified sender email
      subject: "Thank you for contacting Valuate",
      html: `
        <h2>Thank you for your interest in Valuate!</h2>
        <p>Hi ${name},</p>
        <p>We've received your message and will get back to you within 24 hours.</p>
        <p>Our team is excited to help you revolutionize your hotel valuation process with AI.</p>
        <br>
        <p>Best regards,<br>The Valuate Team</p>
        <hr>
        <p><em>This is an automated confirmation email.</em></p>
      `,
    })

    return {
      success: true,
      message: "Thank you for your interest! We'll get back to you within 24 hours.",
    }
  } catch (error) {
    console.error("Email sending failed:", error)
    return {
      success: false,
      message: "Sorry, there was an error sending your message. Please try again later.",
    }
  }
}
