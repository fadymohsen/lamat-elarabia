import { ImageResponse } from "next/og";

export const alt = "لمعة العربية للمقاولات";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
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
          background: "linear-gradient(135deg, #203524 0%, #137547 100%)",
          color: "white",
          fontFamily: "sans-serif",
          padding: "60px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            background: "white",
            marginBottom: "40px",
            fontSize: "52px",
            fontWeight: 800,
            color: "#137547",
          }}
        >
          ل
        </div>
        <div
          style={{
            fontSize: "64px",
            fontWeight: 800,
            textAlign: "center",
            lineHeight: 1.2,
            marginBottom: "20px",
          }}
        >
          لمعة العربية للمقاولات
        </div>
        <div
          style={{
            fontSize: "28px",
            color: "#b8987f",
            textAlign: "center",
          }}
        >
          نبني اليوم... لنصنع مستقبلًا يليق بوطننا
        </div>
      </div>
    ),
    { ...size }
  );
}
