"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface CertificateGalleryProps {
  certificates: string[];
}

export default function CertificateGallery({ certificates }: CertificateGalleryProps) {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const next = useCallback(() => {
    if (selectedIdx !== null) {
      setSelectedIdx((selectedIdx + 1) % certificates.length);
    }
  }, [selectedIdx, certificates.length]);

  const prev = useCallback(() => {
    if (selectedIdx !== null) {
      setSelectedIdx((selectedIdx - 1 + certificates.length) % certificates.length);
    }
  }, [selectedIdx, certificates.length]);

  const close = useCallback(() => setSelectedIdx(null), []);

  // Keyboard handling
  useEffect(() => {
    if (selectedIdx === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "Escape":
          close();
          break;
        case "ArrowLeft":
          prev();
          break;
        case "ArrowRight":
          next();
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [selectedIdx, close, prev, next]);

  // Focus trap
  useEffect(() => {
    if (selectedIdx === null) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    closeButtonRef.current?.focus();

    // Lock body scroll
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = prev;
      previouslyFocused?.focus();
    };
  }, [selectedIdx]);

  return (
    <>
      {/* Thumbnails */}
      <div className="mx-auto max-w-6xl columns-2 sm:columns-3 md:columns-4 gap-5">
        {certificates.map((src, i) => (
          <button
            key={i}
            onClick={() => setSelectedIdx(i)}
            className="mb-5 block w-full break-inside-avoid overflow-hidden hover:opacity-80 transition-opacity cursor-pointer"
            aria-label={`View certificate ${i + 1}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={src} alt={`Certificate ${i + 1}`} loading="lazy" className="w-full h-auto block" />
          </button>
        ))}
      </div>

      {/* Modal */}
      {selectedIdx !== null && (
        <div
          ref={dialogRef}
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label={`Certificate ${selectedIdx + 1} of ${certificates.length}`}
        >
          <button
            ref={closeButtonRef}
            onClick={close}
            className="absolute top-4 right-4 text-white hover:bg-white/20 rounded-full p-2 transition-colors"
            aria-label="Close"
          >
            <X size={28} />
          </button>

          <div className="relative w-full max-w-4xl max-h-[80vh]" onClick={(e) => e.stopPropagation()}>
            <div className="relative h-[70vh] w-full">
              <Image src={certificates[selectedIdx]} alt={`Certificate ${selectedIdx + 1}`} fill className="object-contain" />
            </div>

            <button
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white rounded-full p-2 transition-colors"
              aria-label="Previous certificate"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white rounded-full p-2 transition-colors"
              aria-label="Next certificate"
            >
              <ChevronRight size={24} />
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm" aria-live="polite">
              {selectedIdx + 1} / {certificates.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
