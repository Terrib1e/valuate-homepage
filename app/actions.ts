"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function submitContactForm(prevState: any, formData: FormData) {
  // Handle the case where formData might be null
  if (!formData) {
    console.log("FormData is null")
    return {
      success: false,
      message: "Form data is missing. Please try again.",
    }
  }

  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const company = formData.get("company") as string
  const message = formData.get("message") as string

  console.log("Form submission received:", { name, email, company, message })

  // Validate required fields
  if (!name || !email) {
    console.log("Validation failed: missing required fields")
    return {
      success: false,
      message: "Name and email are required fields.",
    }
  }

  // Check if Resend API key is available
  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY environment variable is not set")
    return {
      success: false,
      message: "Email service is not configured. Please contact support.",
    }
  }

  try {
    console.log("Attempting to send emails...")

    // Send email using Resend
    const result = await resend.emails.send({
      from: "Valuate Contact <onboarding@resend.dev>",
      to: ["delivered@resend.dev"],
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

    console.log("Email sent successfully:", result)

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
