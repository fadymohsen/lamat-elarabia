"use client";

import React, { useActionState } from "react";
import { submitContact } from "@/app/actions/contact";

interface ContactFormProps {
  labels: {
    name: string;
    email: string;
    message: string;
    submit: string;
  };
  isAr: boolean;
}

export default function ContactForm({ labels, isAr }: ContactFormProps) {
  const [state, formAction, pending] = useActionState(submitContact, undefined);

  if (state?.success) {
    return (
      <div className={`rounded-xl bg-[#137547]/10 p-8 ${isAr ? "text-right" : "text-left"}`}>
        <p className="font-['Cairo',sans-serif] font-extrabold text-[#137547] text-[24px]">
          {isAr ? "تم إرسال رسالتك بنجاح" : "Your message has been sent successfully"}
        </p>
        <p className="font-['Tajawal',sans-serif] text-[#1e1e1e]/70 mt-2">
          {isAr ? "سنتواصل معك في أقرب وقت." : "We'll get back to you soon."}
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="grid gap-6">
      <input
        type="text"
        name="name"
        required
        placeholder={labels.name}
        className="rounded-xl border border-[#1e1e1e]/20 bg-white px-6 py-4 font-['Tajawal',sans-serif] text-[#1e1e1e] placeholder-[#1e1e1e]/40 focus:outline-none focus:border-[#137547]"
      />
      <input
        type="email"
        name="email"
        required
        placeholder={labels.email}
        className="rounded-xl border border-[#1e1e1e]/20 bg-white px-6 py-4 font-['Tajawal',sans-serif] text-[#1e1e1e] placeholder-[#1e1e1e]/40 focus:outline-none focus:border-[#137547]"
      />
      <textarea
        name="message"
        rows={6}
        required
        placeholder={labels.message}
        className="rounded-xl border border-[#1e1e1e]/20 bg-white px-6 py-4 font-['Tajawal',sans-serif] text-[#1e1e1e] placeholder-[#1e1e1e]/40 focus:outline-none focus:border-[#137547] resize-none"
      />
      {state?.error && (
        <p className="text-[#b3261e] font-['Tajawal',sans-serif] text-[0.9rem]">{state.error}</p>
      )}
      <button
        type="submit"
        disabled={pending}
        className="rounded-xl bg-[#137547] px-8 py-4 font-['Cairo',sans-serif] font-bold text-white hover:bg-[#0e5735] transition-colors disabled:opacity-60"
      >
        {pending ? (isAr ? "جارٍ الإرسال..." : "Sending...") : labels.submit}
      </button>
    </form>
  );
}
