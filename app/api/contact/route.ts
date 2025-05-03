import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, message } = body;

    // Validate the data
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Here you would typically:
    // 1. Send an email notification
    // 2. Store the contact in your CRM
    // 3. Add to your mailing list

    // Example: Send email using a service like SendGrid or Nodemailer
    // const emailSent = await sendEmail({
    //   to: "your-email@example.com",
    //   subject: `New contact from ${name}`,
    //   text: `Name: ${name}\nEmail: ${email}\nCompany: ${company}\nMessage: ${message}`,
    // })

    // For now, we'll just simulate success
    console.log('Contact form submission:', { name, email, company, message });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
