"use client";

import { useState } from "react";
import { Input, Textarea, Checkbox } from "./Field";

interface ContactFormState {
  fullName: string;
  email: string;
  telephone: string;
  company: string;
  subject: string;
  message: string;
  privacy: boolean;
  honeypot: string;
}

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormState, string>>>({});
  const [form, setForm] = useState<ContactFormState>({
    fullName: "",
    email: "",
    telephone: "",
    company: "",
    subject: "",
    message: "",
    privacy: false,
    honeypot: "",
  });

  const validate = () => {
    const nextErrors: Partial<Record<keyof ContactFormState, string>> = {};
    if (!form.fullName.trim()) nextErrors.fullName = "Please enter your full name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) nextErrors.email = "Please enter a valid email address.";
    if (!form.telephone.trim()) nextErrors.telephone = "Please enter a telephone number.";
    if (!form.subject.trim()) nextErrors.subject = "Please enter a subject.";
    if (!form.message.trim()) nextErrors.message = "Please enter a message.";
    if (!form.privacy) nextErrors.privacy = "You must agree to the privacy statement to continue.";
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleChange = (key: keyof ContactFormState, value: string | boolean) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ fullName: "", email: "", telephone: "", company: "", subject: "", message: "", privacy: false, honeypot: "" });
      } else {
        const data = await res.json().catch(() => ({}));
        setErrors({ message: data.message || "Something went wrong. Please try again or email us." });
        setStatus("error");
      }
    } catch {
      setErrors({ message: "Unable to submit. Please check your connection and try again." });
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-xl border border-teal-200 bg-white/5 p-6 text-center">
        <h3 className="text-lg font-semibold text-white mb-2">Thank you</h3>
        <p className="text-slate-200">We have received your message and will respond as soon as possible.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <input type="text" name="honeypot" value={form.honeypot} onChange={(e) => handleChange("honeypot", e.target.value)} className="hidden" tabIndex={-1} aria-hidden="true" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Input label="Full name" name="fullName" required value={form.fullName} onChange={(e) => handleChange("fullName", e.target.value)} error={errors.fullName} autoComplete="name" />
        <Input label="Email address" name="email" type="email" required value={form.email} onChange={(e) => handleChange("email", e.target.value)} error={errors.email} autoComplete="email" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Input label="Telephone" name="telephone" type="tel" required value={form.telephone} onChange={(e) => handleChange("telephone", e.target.value)} error={errors.telephone} autoComplete="tel" />
        <Input label="Company (optional)" name="company" value={form.company} onChange={(e) => handleChange("company", e.target.value)} error={errors.company} autoComplete="organization" />
      </div>
      <Input label="Subject" name="subject" required value={form.subject} onChange={(e) => handleChange("subject", e.target.value)} error={errors.subject} />
      <Textarea label="Message" name="message" required value={form.message} onChange={(e) => handleChange("message", e.target.value)} error={errors.message} />
      <Checkbox
        id="contact-privacy"
        name="privacy"
        label="I agree that my information will be used to respond to my enquiry in accordance with the Privacy Policy."
        required
        checked={form.privacy}
        onChange={(e) => handleChange("privacy", e.target.checked)}
        error={errors.privacy}
      />
      {errors.message && status === "error" && <p className="text-sm text-red-400">{errors.message}</p>}
      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex items-center justify-center rounded-lg bg-white/5 px-6 py-3 text-base font-semibold text-white hover:bg-white/5 disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
      >
        {status === "loading" ? "Sending..." : "Send enquiry"}
      </button>
    </form>
  );
}
