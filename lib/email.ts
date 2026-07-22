/**
 * Email helper stub for form submissions.
 *
 * This module currently logs submissions to the console if no email service is
 * configured. Before launch, wire it up to a provider such as SendGrid, Resend or
 * AWS SES using environment variables. Secrets must never be exposed to the
 * client.
 */

export interface EmailPayload {
  to: string | string[];
  subject: string;
  text: string;
  html?: string;
}

export async function sendEmail(payload: EmailPayload): Promise<void> {
  const envTo = process.env.EMAIL_TO;
  if (!envTo) {
    console.log("No EMAIL_TO configured. Email payload:", payload);
    return;
  }

  // TODO: Implement provider-specific send logic here.
  // Example with SendGrid:
  // const sgMail = require('@sendgrid/mail');
  // sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);
  // await sgMail.send({ ...payload, from: process.env.EMAIL_FROM as string });

  console.log("Email would be sent to", envTo, "with payload:", payload);
}

export function getRecipient(): string {
  return process.env.EMAIL_TO || "support@beaconpaysolutions.co.uk";
}
