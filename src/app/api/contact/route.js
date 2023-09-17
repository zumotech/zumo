// Notice the funciton definiton:
import { NextResponse } from 'next/server'

export async function GET(req) {
  return NextResponse.json(
    { error: "Method not allowed" },
    {
      status: 405
    }
  );
}

// Notice the funciton definiton:
export async function POST(req) {
  const { email, subject, message } = await req.json()

  try {
    let res = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'api-key': process.env.BREVO_API_KEY,
        'Content-Type': 'application/json',
        'accept': 'application/json'
      },
      body: JSON.stringify({
        to: [{
          email: 'pbeluent@gmail.com'
        }],
        replyTo: {
          email: email
        },
        sender: {
          name: "Zumo Contact Form",
          email: "no-reply@zumo.mk"
        },
        subject: "New submission from website contact form",
        htmlContent: `<html><head></head><body>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Email:</strong> ${email}</p> 
          <p><strong>Message:</strong> <br/><div style="white-space: pre-line;">${message}</div></p>
          </body></html>`
      })
    })

    return NextResponse.json(res.json(), {
      status: 200,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to send contact form" },
      {
        status: 500,
      }
    );
  }
}