import { NextResponse } from "next/server";
import { sendEmail, getRecipient } from "@/lib/email";
import { isRateLimited } from "@/lib/rate-limit";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, telephone, company, service, preferredDate, preferredTime, message, honeypot } = body;

    if (honeypot) {
      return NextResponse.json({ success: true });
    }

    const forwardedFor = request.headers.get("x-forwarded-for");
    const ip = forwardedFor?.split(",")[0]?.trim() || "unknown";
    const rateLimit = isRateLimited(`callback:${ip}`);
    if (rateLimit.limited) {
      return NextResponse.json({ message: "Too many submissions. Please try again later." }, { status: 429, headers: { "Retry-After": String(rateLimit.retryAfter || 3600) } });
    }

    if (!fullName || !email || !telephone || !service || !preferredDate || !preferredTime) {
      return NextResponse.json({ message: "All required fields must be provided." }, { status: 400 });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ message: "Please provide a valid email address." }, { status: 400 });
    }

    const date = new Date(preferredDate);
    if (isNaN(date.getTime())) {
      return NextResponse.json({ message: "Please provide a valid preferred call date." }, { status: 400 });
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (date < today) {
      return NextResponse.json({ message: "Preferred call date must be today or in the future." }, { status: 400 });
    }

    await sendEmail({
      to: getRecipient(),
      subject: "Website call-back request",
      text: `Name: ${fullName}\nEmail: ${email}\nTelephone: ${telephone}\nCompany: ${company || "Not provided"}\nService: ${service}\nPreferred date: ${preferredDate}\nPreferred time: ${preferredTime}\n\nMessage:\n${message || "Not provided"}`,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ message: "There was a problem processing your submission." }, { status: 500 });
  }
}
