"use client";

import React, { useActionState, useState, memo, useCallback } from "react";
import { savePageContent } from "@/app/actions/pages";

interface TextItem {
  index: number;
  value: string;
}

interface ImageItem {
  index: number;
  src: string;
  alt: string;
}

interface MediaItem {
  id: number;
  url: string;
  alt_text: string | null;
}

interface PageEditorProps {
  pageId: number;
  texts: TextItem[];
  images: ImageItem[];
  mediaLibrary: MediaItem[];
}

const CARD_STYLE: React.CSSProperties = {
  background: "#fff",
  borderRadius: "24px",
  padding: "24px",
  marginBottom: "24px",
  boxShadow: "0 1px 3px rgba(20,19,16,0.12)",
};

const INPUT_STYLE: React.CSSProperties = {
  width: "100%",
  boxSizing: "border-box",
  padding: "10px 14px",
  borderRadius: "12px",
  border: "1px solid #DDDDDD",
  fontFamily: "Tajawal, sans-serif",
  fontSize: "0.95rem",
};

interface TextEditorProps {
  value: string;
  index: number;
  onChange: (index: number, val: string) => void;
}

const TextEditor = memo(({ value, index, onChange }: TextEditorProps) => {
  return (
    <div style={{ marginBottom: "12px" }}>
      <textarea
        value={value}
        onChange={(e) => onChange(index, e.target.value)}
        rows={Math.min(4, Math.ceil(value.length / 80) || 1)}
        style={{ ...INPUT_STYLE, resize: "vertical" }}
      />
    </div>
  );
});
TextEditor.displayName = "TextEditor";

interface ImageEditorProps {
  img: { src: string; alt: string };
  index: number;
  isPicking: boolean;
  mediaLibrary: MediaItem[];
  onAltChange: (index: number, alt: string) => void;
  onSelectImage: (index: number, src: string, alt: string) => void;
  onTogglePick: (index: number) => void;
}

const ImageEditor = memo(({
  img,
  index,
  isPicking,
  mediaLibrary,
  onAltChange,
  onSelectImage,
  onTogglePick,
}: ImageEditorProps) => {
  return (
    <div style={{ border: "1px solid #DDDDDD", borderRadius: "16px", overflow: "hidden" }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={img.src}
        alt={img.alt}
        style={{ width: "100%", height: "120px", objectFit: "contain", background: "#f4f2ee", display: "block" }}
      />
      <div style={{ padding: "10px" }}>
        <input
          value={img.alt}
          onChange={(e) => onAltChange(index, e.target.value)}
          placeholder="النص البديل"
          style={{ ...INPUT_STYLE, fontSize: "0.85rem", marginBottom: "8px" }}
        />
        <button
          type="button"
          onClick={() => onTogglePick(index)}
          style={{
            background: "transparent",
            border: "1px solid #137547",
            color: "#137547",
            borderRadius: "16px",
            padding: "6px 14px",
            fontSize: "0.85rem",
            cursor: "pointer",
            fontFamily: "Tajawal, sans-serif",
          }}
        >
          {isPicking ? "إغلاق" : "استبدال الصورة"}
        </button>
        {isPicking && (
          <div
            style={{
              marginTop: "10px",
              maxHeight: "220px",
              overflowY: "auto",
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "6px",
            }}
          >
            {mediaLibrary.length === 0 && (
              <p style={{ gridColumn: "1 / -1", fontSize: "0.8rem", color: "#5a5a55" }}>
                لا توجد صور في المكتبة. ارفع صورًا من صفحة الوسائط أولاً.
              </p>
            )}
            {mediaLibrary.map((m) => (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img
                key={m.id}
                src={m.url}
                alt={m.alt_text || ""}
                onClick={() => onSelectImage(index, m.url, m.alt_text || img.alt)}
                style={{
                  width: "100%",
                  height: "60px",
                  objectFit: "cover",
                  borderRadius: "8px",
                  cursor: "pointer",
                  border: "2px solid transparent",
                }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
});
ImageEditor.displayName = "ImageEditor";

export default function PageEditor({ pageId, texts, images, mediaLibrary }: PageEditorProps) {
  const [textValues, setTextValues] = useState<string[]>(() => texts.map((t) => t.value));
  const [imageValues, setImageValues] = useState<Omit<ImageItem, "index">[]>(() =>
    images.map((im) => ({ src: im.src, alt: im.alt }))
  );
  const [state, formAction, pending] = useActionState(savePageContent, undefined);
  const [pickingFor, setPickingFor] = useState<number | null>(null);

  const handleTextChange = useCallback((index: number, val: string) => {
    setTextValues((prev) => {
      const next = [...prev];
      next[index] = val;
      return next;
    });
  }, []);

  const handleAltChange = useCallback((index: number, alt: string) => {
    setImageValues((prev) => {
      const next = [...prev];
      next[index] = { ...next[index], alt };
      return next;
    });
  }, []);

  const handleSelectImage = useCallback((index: number, src: string, alt: string) => {
    setImageValues((prev) => {
      const next = [...prev];
      next[index] = { src, alt };
      return next;
    });
    setPickingFor(null);
  }, []);

  const handleTogglePick = useCallback((index: number) => {
    setPickingFor((prev) => (prev === index ? null : index));
  }, []);

  return (
    <form action={formAction}>
      <input type="hidden" name="page_id" value={pageId} />
      <input type="hidden" name="texts" value={JSON.stringify(textValues)} />
      <input type="hidden" name="images" value={JSON.stringify(imageValues)} />

      <div
        style={{
          position: "sticky",
          top: 0,
          zIndex: 10,
          background: "#FBFAF7",
          padding: "12px 0",
          display: "flex",
          alignItems: "center",
          gap: "16px",
        }}
      >
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
          {pending ? "جارٍ الحفظ..." : "حفظ كل التغييرات"}
        </button>
        {state?.success && <span style={{ color: "#137547" }}>تم الحفظ بنجاح.</span>}
        {state?.error && <span style={{ color: "#b3261e" }}>{state.error}</span>}
      </div>

      <section style={CARD_STYLE}>
        <h2 style={{ fontFamily: "Cairo, sans-serif", fontWeight: 800, fontSize: "1.1rem", marginTop: 0 }}>
          النصوص ({texts.length})
        </h2>
        {textValues.map((value, i) => (
          <TextEditor
            key={i}
            value={value}
            index={i}
            onChange={handleTextChange}
          />
        ))}
      </section>

      <section style={CARD_STYLE}>
        <h2 style={{ fontFamily: "Cairo, sans-serif", fontWeight: 800, fontSize: "1.1rem", marginTop: 0 }}>
          الصور ({images.length})
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "16px" }}>
          {imageValues.map((img, i) => (
            <ImageEditor
              key={i}
              img={img}
              index={i}
              isPicking={pickingFor === i}
              mediaLibrary={mediaLibrary}
              onAltChange={handleAltChange}
              onSelectImage={handleSelectImage}
              onTogglePick={handleTogglePick}
            />
          ))}
        </div>
      </section>
    </form>
  );
}
