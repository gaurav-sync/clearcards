import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, phone, city, eventType, numberOfCards, message } = body;

    // Validate required fields
    if (!fullName || !phone || !city || !eventType || !numberOfCards) {
      return NextResponse.json(
        { error: "All required fields must be provided" },
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
        subject: `New Couple Request from ${fullName}`,
        html: `
          <h2>New Couple Request - ClearCards</h2>
          <p><strong>Full Name:</strong> ${fullName}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>City:</strong> ${city}</p>
          <p><strong>Event Type:</strong> ${eventType}</p>
          <p><strong>Number of Cards:</strong> ${numberOfCards}</p>
          ${message ? `<p><strong>Message:</strong><br/>${message}</p>` : ""}
          <hr/>
          <p style="color: #666; font-size: 12px;">This request was submitted via ClearCards contact form</p>
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
      { success: true, message: "Request submitted successfully", id: data.id },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing couples form:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}
