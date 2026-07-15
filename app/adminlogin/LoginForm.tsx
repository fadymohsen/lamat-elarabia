"use client";

import React, { useActionState } from "react";
import { login } from "@/app/actions/auth";

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
};

const labelStyle: React.CSSProperties = {
  fontFamily: "Almarai, sans-serif",
  fontSize: "0.95rem",
  color: "#141310",
};

export default function LoginForm() {
  const [state, formAction, pending] = useActionState(login, undefined);

  return (
    <form action={formAction}>
      <label style={labelStyle} htmlFor="email">
        البريد الإلكتروني
      </label>
      <input
        style={inputStyle}
        id="email"
        name="email"
        type="email"
        autoComplete="username"
        required
      />

      <label style={labelStyle} htmlFor="password">
        كلمة المرور
      </label>
      <input
        style={inputStyle}
        id="password"
        name="password"
        type="password"
        autoComplete="current-password"
        required
      />

      {state?.error && (
        <p
          style={{
            color: "#b3261e",
            fontFamily: "Tajawal, sans-serif",
            fontSize: "0.9rem",
            marginTop: "-8px",
            marginBottom: "16px",
          }}
        >
          {state.error}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        style={{
          width: "100%",
          background: pending ? "#0e5735" : "#137547",
          color: "#FBFAF7",
          fontFamily: "Tajawal, sans-serif",
          fontWeight: 500,
          fontSize: "1.05rem",
          padding: "14px",
          border: "none",
          borderRadius: "24px",
          cursor: pending ? "default" : "pointer",
        }}
      >
        {pending ? "جارٍ الدخول..." : "تسجيل الدخول"}
      </button>
    </form>
  );
}
