import React from "react";
import LoginForm from "./LoginForm";

export const metadata = {
  title: "تسجيل الدخول - لوحة التحكم",
};

export default function AdminLoginPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#FBFAF7",
        padding: "20px",
      }}
      dir="rtl"
    >
      <div
        style={{
          width: "100%",
          maxWidth: "400px",
          background: "#fff",
          borderRadius: "24px",
          padding: "40px 32px",
          boxShadow: "0 4px 16px rgba(20,19,16,0.12)",
        }}
      >
        <h1
          style={{
            fontFamily: "Cairo, sans-serif",
            fontWeight: 800,
            fontSize: "1.5rem",
            color: "#141310",
            textAlign: "center",
            marginBottom: "8px",
          }}
        >
          لوحة تحكم لمعة العربية
        </h1>
        <p
          style={{
            fontFamily: "Tajawal, sans-serif",
            color: "#5a5a55",
            textAlign: "center",
            marginBottom: "28px",
          }}
        >
          سجل الدخول لإدارة محتوى الموقع
        </p>
        <LoginForm />
      </div>
    </main>
  );
}
