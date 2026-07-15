"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface CertificateGalleryProps {
  certificates: string[];
}

export default function CertificateGallery({ certificates }: CertificateGalleryProps) {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const next = () => {
    if (selectedIdx !== null) {
      setSelectedIdx((selectedIdx + 1) % certificates.length);
    }
  };

  const prev = () => {
    if (selectedIdx !== null) {
      setSelectedIdx((selectedIdx - 1 + certificates.length) % certificates.length);
    }
  };

  return (
    <>
      {/* Thumbnails - masonry columns so portrait/landscape images keep their natural size, no dead space */}
      <div className="mx-auto max-w-6xl columns-2 sm:columns-3 md:columns-4 gap-5">
        {certificates.map((src, i) => (
          <button
            key={i}
            onClick={() => setSelectedIdx(i)}
            className="mb-5 block w-full break-inside-avoid overflow-hidden hover:opacity-80 transition-opacity cursor-pointer"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={src} alt="" loading="lazy" className="w-full h-auto block" />
          </button>
        ))}
      </div>

      {/* Modal */}
      {selectedIdx !== null && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4" onClick={() => setSelectedIdx(null)}>
          <button
            onClick={() => setSelectedIdx(null)}
            className="absolute top-4 right-4 text-white hover:bg-white/20 rounded-full p-2 transition-colors"
            aria-label="Close"
          >
            <X size={28} />
          </button>

          <div className="relative w-full max-w-4xl max-h-[80vh]" onClick={(e) => e.stopPropagation()}>
            <div className="relative h-[70vh] w-full">
              <Image src={certificates[selectedIdx]} alt="" fill className="object-contain" />
            </div>

            {/* Navigation */}
            <button
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white rounded-full p-2 transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white rounded-full p-2 transition-colors"
              aria-label="Next"
            >
              <ChevronRight size={24} />
            </button>

            {/* Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm">
              {selectedIdx + 1} / {certificates.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
