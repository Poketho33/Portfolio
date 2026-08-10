import 'server-only'

import { Resend } from 'resend';
import { NextRequest } from 'next/server';
import { EmailTemplate } from '@/components/email-html';

export async function POST(req: NextRequest) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.error('RESEND_API_KEY is not set in environment variables.');
    return Response.json(
      { error: 'Server configuration error: Missing API Key' },
      { status: 500 }
    );
  }

  const resend = new Resend(apiKey);

  try {
    // 1. Parse the incoming JSON body from your Contact component
    const body = await req.json();
    const { name, email, message } = body;

    // 2. Simple validation
    if (!name || !email || !message) {
      return Response.json(
        { error: 'Missing required fields (name, email, message)' },
        { status: 400 }
      );
    }

    // 3. Send email via Resend
    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      // NOTE: During onboarding/testing, replace this with YOUR registered Resend account email
      to: ['poketho33extra@gmail.com'],
      subject: `New message from ${name}`,
      replyTo: email, // Allows you to hit 'Reply' in your inbox to email the sender back directly
      react: EmailTemplate({ name, email, message }),
    });

    if (error) {
      console.error('Resend API Error:', error);
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({ success: true, data });
  } catch (error) {
    console.error('Other Error:', error);
    return Response.json(
      { error: error instanceof Error ? error.message : 'Internal Server Error' },
      { status: 500 }
    );
  }
}