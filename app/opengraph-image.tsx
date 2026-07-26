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
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #1a3a22 0%, #203524 40%, #137547 100%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 240,
            height: 240,
            borderRadius: "50%",
            background: "white",
            overflow: "hidden",
            boxShadow: "0 12px 48px rgba(0,0,0,0.3)",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoBase64} alt="" width={240} height={240} style={{ objectFit: "cover" }} />
        </div>
      </div>
    ),
    { ...size }
  );
}
