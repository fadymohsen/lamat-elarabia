"use client";

import React, { useActionState, useRef } from "react";
import { uploadMedia } from "@/app/actions/media";

export default function UploadForm() {
  const [state, formAction, pending] = useActionState(uploadMedia, undefined);
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <form
      ref={formRef}
      action={async (formData) => {
        await formAction(formData);
        formRef.current?.reset();
      }}
      style={{ display: "flex", flexDirection: "column", gap: "12px" }}
    >
      <input
        type="file"
        name="file"
        accept="image/*"
        required
        style={{ fontFamily: "Tajawal, sans-serif" }}
      />
      <input
        type="text"
        name="alt_text"
        placeholder="وصف الصورة (نص بديل)"
        style={{
          padding: "10px 14px",
          borderRadius: "12px",
          border: "1px solid #DDDDDD",
          fontFamily: "Tajawal, sans-serif",
        }}
      />
      {state?.error && <p style={{ color: "#b3261e", margin: 0 }}>{state.error}</p>}
      {state?.success && <p style={{ color: "#137547", margin: 0 }}>تم رفع الصورة بنجاح.</p>}
      <button
        type="submit"
        disabled={pending}
        style={{
          alignSelf: "flex-start",
          background: pending ? "#0e5735" : "#137547",
          color: "#FBFAF7",
          fontFamily: "Tajawal, sans-serif",
          fontWeight: 500,
          padding: "10px 24px",
          border: "none",
          borderRadius: "24px",
          cursor: pending ? "default" : "pointer",
        }}
      >
        {pending ? "جارٍ الرفع..." : "رفع"}
      </button>
    </form>
  );
}
