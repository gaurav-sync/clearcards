import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { brandName, contactPerson, phone, email, cityRegion, message } = body;

    // Validate required fields
    if (!brandName || !contactPerson || !phone || !email || !cityRegion || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address" },
        { status: 400 }
      );
    }

    // Validate phone format (basic validation)
    if (phone.length < 10) {
      return NextResponse.json(
        { error: "Please provide a valid phone number" },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.error("RESEND_API_KEY is not configured");
      return NextResponse.json(
        { error: "Email service is not configured. Please contact support." },
        { status: 500 }
      );
    }

    // Send email using Resend API
    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: "ClearCards Contact <onboarding@resend.dev>",
        to: process.env.CONTACT_EMAIL || "your-email@example.com",
        reply_to: email,
        subject: `New Brand Partnership Inquiry from ${brandName}`,
        html: `
          <h2>New Brand Partnership Inquiry - ClearCards</h2>
          <p><strong>Brand Name:</strong> ${brandName}</p>
          <p><strong>Contact Person:</strong> ${contactPerson}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>City/Region:</strong> ${cityRegion}</p>
          <p><strong>Message:</strong><br/>${message.replace(/\n/g, "<br/>")}</p>
          <hr/>
          <p style="color: #666; font-size: 12px;">This inquiry was submitted via ClearCards contact form. You can reply directly to this email to reach ${contactPerson}.</p>
        `,
      }),
    });

    if (!emailResponse.ok) {
      const errorData = await emailResponse.json();
      console.error("Resend API error:", errorData);
      return NextResponse.json(
        { error: "Failed to send email. Please try again." },
        { status: 500 }
      );
    }

    const data = await emailResponse.json();
    return NextResponse.json(
      { success: true, message: "Inquiry submitted successfully", id: data.id },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing brands form:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}
