"use client";

import { useState } from "react";
import { Input, Select, Textarea, Checkbox } from "./Field";
import { services } from "@/lib/data";

const timeSlots = [
  "09:00 – 10:00",
  "10:00 – 11:00",
  "11:00 – 12:00",
  "12:00 – 13:00",
  "13:00 – 14:00",
  "14:00 – 15:00",
  "15:00 – 16:00",
  "16:00 – 17:00",
];

interface CallbackFormState {
  fullName: string;
  email: string;
  telephone: string;
  company: string;
  service: string;
  preferredDate: string;
  preferredTime: string;
  message: string;
  privacy: boolean;
  honeypot: string;
}

export default function CallbackForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Partial<Record<keyof CallbackFormState, string>>>({});
  const [form, setForm] = useState<CallbackFormState>({
    fullName: "",
    email: "",
    telephone: "",
    company: "",
    service: "",
    preferredDate: "",
    preferredTime: "",
    message: "",
    privacy: false,
    honeypot: "",
  });

  const today = new Date().toISOString().split("T")[0];

  const validate = () => {
    const nextErrors: Partial<Record<keyof CallbackFormState, string>> = {};
    if (!form.fullName.trim()) nextErrors.fullName = "Please enter your full name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) nextErrors.email = "Please enter a valid email address.";
    if (!form.telephone.trim()) nextErrors.telephone = "Please enter a telephone number.";
    if (!form.service) nextErrors.service = "Please select a service.";
    if (!form.preferredDate) nextErrors.preferredDate = "Please select a preferred call date.";
    if (!form.preferredTime) nextErrors.preferredTime = "Please select a preferred call time.";
    if (!form.privacy) nextErrors.privacy = "You must agree to the privacy statement to continue.";
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleChange = (key: keyof CallbackFormState, value: string | boolean) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/callback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ fullName: "", email: "", telephone: "", company: "", service: "", preferredDate: "", preferredTime: "", message: "", privacy: false, honeypot: "" });
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
        <h3 className="text-lg font-semibold text-white mb-2">Request received</h3>
        <p className="text-slate-200">Thank you. We will call you back as close to your requested time as possible.</p>
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
        <Input label="Company name (optional)" name="company" value={form.company} onChange={(e) => handleChange("company", e.target.value)} error={errors.company} autoComplete="organization" />
      </div>
      <Select label="Service of interest" name="service" required value={form.service} onChange={(e) => handleChange("service", e.target.value)} error={errors.service}>
        <option value="">Select a service</option>
        {services.map((s) => (
          <option key={s.slug} value={s.label}>{s.label}</option>
        ))}
        <option value="Not sure">Not sure</option>
      </Select>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Input label="Preferred call date" name="preferredDate" type="date" required min={today} value={form.preferredDate} onChange={(e) => handleChange("preferredDate", e.target.value)} error={errors.preferredDate} />
        <Select label="Preferred call time" name="preferredTime" required value={form.preferredTime} onChange={(e) => handleChange("preferredTime", e.target.value)} error={errors.preferredTime}>
          <option value="">Select a time</option>
          {timeSlots.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </Select>
      </div>
      <Textarea label="Message (optional)" name="message" value={form.message} onChange={(e) => handleChange("message", e.target.value)} error={errors.message} helperText="Let us know anything that will help us prepare for the call." />
      <Checkbox
        id="callback-privacy"
        name="privacy"
        label="I agree that my information will be used to respond to my enquiry and handled in accordance with the Privacy Policy."
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
        {status === "loading" ? "Requesting..." : "Request My Call Back"}
      </button>
    </form>
  );
}
