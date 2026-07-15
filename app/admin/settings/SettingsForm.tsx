"use client";

import React, { useActionState } from "react";
import { saveSettings } from "@/app/actions/settings";
import { SiteSettings } from "@/lib/settings";

const inputStyle: React.CSSProperties = {
  width: "100%",
  boxSizing: "border-box",
  padding: "12px 16px",
  borderRadius: "12px",
  border: "1px solid #DDDDDD",
  fontFamily: "Tajawal, sans-serif",
  fontSize: "1rem",
  marginTop: "6px",
  marginBottom: "18px",
  direction: "ltr",
  textAlign: "right",
};

const labelStyle: React.CSSProperties = {
  fontFamily: "Almarai, sans-serif",
  fontSize: "0.95rem",
  color: "#141310",
  display: "block",
};

interface FieldDefinition {
  name: keyof SiteSettings;
  label: string;
}

const FIELDS: FieldDefinition[] = [
  { name: "phone_display", label: "رقم الهاتف الظاهر" },
  { name: "whatsapp_number", label: "رقم واتساب (بصيغة دولية، مثال: +9665XXXXXXXX)" },
  { name: "email", label: "البريد الإلكتروني" },
  { name: "address_text", label: "نص العنوان" },
  { name: "address_url", label: "رابط خرائط جوجل" },
];

interface SettingsFormProps {
  settings: SiteSettings;
}

export default function SettingsForm({ settings }: SettingsFormProps) {
  const [state, formAction, pending] = useActionState(saveSettings, undefined);

  return (
    <form action={formAction}>
      {FIELDS.map((field) => (
        <div key={field.name}>
          <label style={labelStyle} htmlFor={field.name}>
            {field.label}
          </label>
          <input
            style={inputStyle}
            id={field.name}
            name={field.name}
            defaultValue={settings[field.name]}
            required
          />
        </div>
      ))}

      {state?.success && (
        <p style={{ color: "#137547", fontFamily: "Tajawal, sans-serif", marginBottom: "16px" }}>
          تم حفظ الإعدادات بنجاح.
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        style={{
          background: pending ? "#0e5735" : "#137547",
          color: "#FBFAF7",
          fontFamily: "Tajawal, sans-serif",
          fontWeight: 500,
          fontSize: "1.05rem",
          padding: "12px 32px",
          border: "none",
          borderRadius: "24px",
          cursor: pending ? "default" : "pointer",
        }}
      >
        {pending ? "جارٍ الحفظ..." : "حفظ التغييرات"}
      </button>
    </form>
  );
}
