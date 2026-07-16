"use client";

import React, { useState, useTransition } from "react";
import { updateMediaAlt, deleteMedia } from "@/app/actions/media";

interface MediaItem {
  id: number;
  url: string;
  alt_text: string | null;
  created_at: Date;
}

interface MediaCardProps {
  item: MediaItem;
}

function MediaCard({ item }: MediaCardProps) {
  const [altText, setAltText] = useState(item.alt_text || "");
  const [isPending, startTransition] = useTransition();

  const handleAltBlur = () => {
    const fd = new FormData();
    fd.set("id", String(item.id));
    fd.set("alt_text", altText);
    startTransition(() => { void updateMediaAlt(undefined, fd); });
  };

  const handleDelete = () => {
    const fd = new FormData();
    fd.set("id", String(item.id));
    startTransition(() => { void deleteMedia(undefined, fd); });
  };

  return (
    <div
      style={{
        background: "#fff",
        borderRadius: "16px",
        overflow: "hidden",
        boxShadow: "0 1px 3px rgba(20,19,16,0.12)",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={item.url}
        alt={item.alt_text || ""}
        style={{ width: "100%", height: "140px", objectFit: "cover", display: "block" }}
      />
      <div style={{ padding: "10px" }}>
        <input
          value={altText}
          onChange={(e) => setAltText(e.target.value)}
          onBlur={handleAltBlur}
          placeholder="النص البديل"
          style={{
            width: "100%",
            boxSizing: "border-box",
            padding: "6px 10px",
            borderRadius: "8px",
            border: "1px solid #DDDDDD",
            fontFamily: "Tajawal, sans-serif",
            fontSize: "0.85rem",
            marginBottom: "8px",
          }}
        />
        <button
          onClick={handleDelete}
          disabled={isPending}
          style={{
            background: "transparent",
            border: "1px solid #b3261e",
            color: "#b3261e",
            borderRadius: "16px",
            padding: "4px 14px",
            fontSize: "0.8rem",
            cursor: isPending ? "default" : "pointer",
          }}
        >
          حذف
        </button>
      </div>
    </div>
  );
}

interface MediaGridProps {
  media: MediaItem[];
}

export default function MediaGrid({ media }: MediaGridProps) {
  if (media.length === 0) {
    return <p style={{ color: "#5a5a55", fontFamily: "Tajawal, sans-serif" }}>لا توجد صور مرفوعة بعد.</p>;
  }

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
        gap: "16px",
      }}
    >
      {media.map((item) => (
        <MediaCard key={item.id} item={item} />
      ))}
    </div>
  );
}
