import 'server-only';

import { render } from '@react-email/components';
import { NextRequest } from 'next/server';
import { EmailTemplate } from '@/components/email-html';
import { z } from 'zod';

import { BrevoClient, BrevoError } from '@getbrevo/brevo';

const apiKey = process.env.BREVO_API_KEY;

if (!apiKey) {
  throw new Error('Missing environment variables: BREVO_API_KEY');
}

const brevo = new BrevoClient({ apiKey });

const schema = z.object({
  name: z.string().trim().min(1, 'Name is required'),
  email: z.email('Invalid email address'),
  message: z.string().trim().min(1, 'Message cannot be empty'),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, message } = schema.parse(body);

    const htmlContent = await render(EmailTemplate({ name, email, message }));

    const result = await brevo.transactionalEmails.sendTransacEmail({
      subject: `New message from ${name}`,
      htmlContent,
      sender: { name: 'Portfolio Contact', email: 'mail@thomaseleveld.com' },
      to: [{ email: 'poketho33extra@gmail.com', name: 'Poketho 33' }],
      replyTo: { email, name },
    });

    return Response.json({ success: true, messageId: result.messageId });

  } catch (error) {
    if (error instanceof z.ZodError) {
      return Response.json(
        { 
          error: 'Validation failed', 
          details: z.treeifyError(error)
        },
        { status: 400 }
      );
    }

    if (error instanceof BrevoError) {
      return Response.json(
        { error: `API error ${error.statusCode}: ${error.message}` },
        { status: error.statusCode || 500 }
      );
    }

    return Response.json(
      { error: error instanceof Error ? error.message : 'Internal Server Error' },
      { status: 500 }
    );
  }
}