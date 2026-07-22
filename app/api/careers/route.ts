import { NextResponse } from "next/server";
import { sendEmail, getRecipient } from "@/lib/email";
import { isRateLimited } from "@/lib/rate-limit";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, telephone, position, message, honeypot } = body;

    if (honeypot) {
      return NextResponse.json({ success: true });
    }

    const forwardedFor = request.headers.get("x-forwarded-for");
    const ip = forwardedFor?.split(",")[0]?.trim() || "unknown";
    const rateLimit = isRateLimited(`careers:${ip}`);
    if (rateLimit.limited) {
      return NextResponse.json({ message: "Too many submissions. Please try again later." }, { status: 429, headers: { "Retry-After": String(rateLimit.retryAfter || 3600) } });
    }

    if (!fullName || !email || !telephone || !position || !message) {
      return NextResponse.json({ message: "All required fields must be provided." }, { status: 400 });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ message: "Please provide a valid email address." }, { status: 400 });
    }

    await sendEmail({
      to: getRecipient(),
      subject: "Website careers enquiry",
      text: `Name: ${fullName}\nEmail: ${email}\nTelephone: ${telephone}\nPosition/area: ${position}\n\nMessage:\n${message}`,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ message: "There was a problem processing your submission." }, { status: 500 });
  }
}
