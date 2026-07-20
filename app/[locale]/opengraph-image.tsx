import { ImageResponse } from "next/og";

export const alt = "Lamaat Al-Arabiya Contracting - لمعة العربية للمقاولات";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

interface Props {
  params: Promise<{ locale: string }>;
}

export default async function OgImage({ params }: Props) {
  const { locale } = await params;
  const isAr = locale === "ar";

  const [logoRes, fontRes] = await Promise.all([
    fetch(new URL("/images/figma/logo-inner.png", "https://lamat-elarabia.org")),
    fetch("https://fonts.gstatic.com/s/cairo/v31/SLXgc1nY6HkvangtZmpQdkhzfH5lkSs2SgRjCAGMQ1z0hAc5W1Q.ttf"),
  ]);
  const logoData = Buffer.from(await logoRes.arrayBuffer());
  const logoBase64 = `data:image/png;base64,${logoData.toString("base64")}`;
  const fontData = await fontRes.arrayBuffer();

  const title = isAr ? "لمعة العربية للمقاولات" : "Lamaat Al-Arabiya Contracting";
  const tagline = isAr
    ? "شركة مقاولات رائدة في المملكة العربية السعودية"
    : "General Contractor in Saudi Arabia";
  const services = isAr
    ? ["إنشاءات", "تشطيبات", "كهروميكانيك", "صيانة"]
    : ["Construction", "Finishing", "MEP", "Maintenance"];
  const cities = isAr ? "الرياض – جدة – القصيم" : "Riyadh - Jeddah - Qassim";
  const experience = isAr ? "خبرة +20 عامًا" : "20+ Years Experience";
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
          fontFamily: "Cairo",
          padding: "60px",
          position: "relative",
        }}
      >
        {/* Decorative circles */}
        <div style={{ position: "absolute", top: -100, right: -100, width: 400, height: 400, borderRadius: "50%", background: "rgba(255,255,255,0.03)", display: "flex" }} />
        <div style={{ position: "absolute", bottom: -80, left: -80, width: 300, height: 300, borderRadius: "50%", background: "rgba(255,255,255,0.02)", display: "flex" }} />

        {/* Experience badge */}
        <div
          style={{
            position: "absolute",
            top: 32,
            right: isAr ? "auto" : 40,
            left: isAr ? 40 : "auto",
            fontSize: 14,
            color: "#b8987f",
            background: "rgba(184,152,127,0.15)",
            padding: "8px 20px",
            borderRadius: 20,
            display: "flex",
          }}
        >
          {experience}
        </div>

        {/* Logo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 110,
            height: 110,
            borderRadius: "50%",
            background: "white",
            marginBottom: 28,
            overflow: "hidden",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoBase64} alt="" width={110} height={110} style={{ objectFit: "cover" }} />
        </div>

        {/* Company name */}
        <div style={{ fontSize: 48, fontWeight: 700, textAlign: "center", lineHeight: 1.2, marginBottom: 12 }}>
          {title}
        </div>

        {/* Tagline */}
        <div style={{ fontSize: 20, color: "#b8987f", textAlign: "center", marginBottom: 28 }}>
          {tagline}
        </div>

        {/* Services bar */}
        <div style={{ display: "flex", gap: 20, fontSize: 15, color: "rgba(255,255,255,0.7)" }}>
          {services.map((s, i) => (
            <div key={i} style={{ display: "flex", gap: 20 }}>
              {i > 0 && <span style={{ color: "#b8987f" }}>|</span>}
              <span>{s}</span>
            </div>
          ))}
        </div>

        {/* Cities */}
        <div style={{ position: "absolute", bottom: 32, fontSize: 15, color: "rgba(255,255,255,0.45)" }}>
          {cities}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Cairo",
          data: fontData,
          weight: 700 as const,
          style: "normal" as const,
        },
      ],
    }
  );
}
