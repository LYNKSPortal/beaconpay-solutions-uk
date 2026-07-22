"use client";

import { useState } from "react";
import { Input, Textarea, Checkbox } from "./Field";

interface CareersFormState {
  fullName: string;
  email: string;
  telephone: string;
  position: string;
  message: string;
  privacy: boolean;
  honeypot: string;
}

export default function CareersForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Partial<Record<keyof CareersFormState, string>>>({});
  const [form, setForm] = useState<CareersFormState>({
    fullName: "",
    email: "",
    telephone: "",
    position: "",
    message: "",
    privacy: false,
    honeypot: "",
  });

  const validate = () => {
    const nextErrors: Partial<Record<keyof CareersFormState, string>> = {};
    if (!form.fullName.trim()) nextErrors.fullName = "Please enter your full name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) nextErrors.email = "Please enter a valid email address.";
    if (!form.telephone.trim()) nextErrors.telephone = "Please enter a telephone number.";
    if (!form.position.trim()) nextErrors.position = "Please enter the position or area of interest.";
    if (!form.message.trim()) nextErrors.message = "Please enter a short covering message.";
    if (!form.privacy) nextErrors.privacy = "You must agree to the privacy statement to continue.";
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleChange = (key: keyof CareersFormState, value: string | boolean) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/careers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ fullName: "", email: "", telephone: "", position: "", message: "", privacy: false, honeypot: "" });
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
        <h3 className="text-lg font-semibold text-white mb-2">Application sent</h3>
        <p className="text-slate-200">Thank you for your interest in joining Beaconpay Solutions. We will be in touch if a suitable opportunity arises.</p>
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
        <Input label="Position or area of interest" name="position" required value={form.position} onChange={(e) => handleChange("position", e.target.value)} error={errors.position} />
      </div>
      <Textarea label="Covering message" name="message" required value={form.message} onChange={(e) => handleChange("message", e.target.value)} error={errors.message} helperText="Tell us a little about yourself and why you would like to join Beaconpay Solutions." />
      <Checkbox
        id="careers-privacy"
        name="privacy"
        label="I agree that my information will be used for recruitment purposes in accordance with the Privacy Policy."
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
        {status === "loading" ? "Sending..." : "Send speculative application"}
      </button>
      <p className="text-xs text-slate-300">
        Please send your CV separately to <a href="mailto:support@beaconpaysolutions.co.uk" className="text-white hover:underline">support@beaconpaysolutions.co.uk</a>. File uploads are not currently supported through this form.
      </p>
    </form>
  );
}
