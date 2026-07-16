import { ImageResponse } from "next/og";

export const alt = "Lamat Elarabia Contracting";
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
          L
        </div>
        <div
          style={{
            fontSize: "56px",
            fontWeight: 800,
            textAlign: "center",
            lineHeight: 1.3,
            marginBottom: "20px",
          }}
        >
          Lamat Elarabia Contracting
        </div>
        <div
          style={{
            fontSize: "24px",
            color: "#b8987f",
            textAlign: "center",
          }}
        >
          We build today... to make a future worthy of our nation
        </div>
      </div>
    ),
    { ...size }
  );
}
