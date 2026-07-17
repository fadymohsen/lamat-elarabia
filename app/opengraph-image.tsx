import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Lamaat Al-Arabiya Contracting - General Contractor in Saudi Arabia";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage() {
  const logoData = await readFile(join(process.cwd(), "public/images/figma/logo-inner.png"));
  const logoBase64 = `data:image/png;base64,${logoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #1a3a22 0%, #203524 40%, #137547 100%)",
          color: "white",
          fontFamily: "sans-serif",
          padding: "60px",
          position: "relative",
        }}
      >
        {/* Decorative circles */}
        <div style={{ position: "absolute", top: -100, right: -100, width: 400, height: 400, borderRadius: "50%", background: "rgba(255,255,255,0.03)", display: "flex" }} />
        <div style={{ position: "absolute", bottom: -80, left: -80, width: 300, height: 300, borderRadius: "50%", background: "rgba(255,255,255,0.02)", display: "flex" }} />

        {/* Logo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 120,
            height: 120,
            borderRadius: "50%",
            background: "white",
            marginBottom: 32,
            overflow: "hidden",
            boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoBase64} alt="" width={120} height={120} style={{ objectFit: "cover" }} />
        </div>

        {/* Company name */}
        <div style={{ fontSize: 52, fontWeight: 800, textAlign: "center", lineHeight: 1.2, marginBottom: 16 }}>
          Lamaat Al-Arabiya Contracting
        </div>

        {/* Tagline */}
        <div style={{ fontSize: 22, color: "#b8987f", textAlign: "center", marginBottom: 32 }}>
          General Contractor in Saudi Arabia
        </div>

        {/* Services bar */}
        <div style={{ display: "flex", gap: 24, fontSize: 16, color: "rgba(255,255,255,0.7)" }}>
          <span>Construction</span>
          <span style={{ color: "#b8987f" }}>|</span>
          <span>Finishing</span>
          <span style={{ color: "#b8987f" }}>|</span>
          <span>MEP</span>
          <span style={{ color: "#b8987f" }}>|</span>
          <span>Maintenance</span>
        </div>

        {/* Cities */}
        <div style={{ position: "absolute", bottom: 32, fontSize: 15, color: "rgba(255,255,255,0.45)" }}>
          Riyadh - Jeddah - Qassim
        </div>
      </div>
    ),
    { ...size }
  );
}
