"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

interface MobileNavProps {
  links: { href: string; label: string }[];
  switchHref: string;
  switchLabel: string;
  homeHref: string;
  isAr: boolean;
}

export default function MobileNav({ links, switchHref, switchLabel, homeHref, isAr }: MobileNavProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        onClick={() => setOpen((v) => !v)}
        className="md:hidden absolute top-[44px] left-[24px] size-[48px] rounded-full bg-[#141e16]/60 backdrop-blur-sm flex items-center justify-center text-white pointer-events-auto"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      <div
        className={`md:hidden fixed inset-0 z-[60] bg-[#141e16] flex flex-col transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <div className="pointer-events-none absolute left-1/2 top-[-120px] -translate-x-1/2 size-[420px] opacity-20">
          <Image src="/images/figma/ellipse-glow.svg" alt="" fill className="object-contain" />
        </div>

        <div className="relative z-10 flex items-center justify-between px-6 pt-[44px]">
          <Link
            href={homeHref}
            onClick={() => setOpen(false)}
            className="relative size-[48px] rounded-full bg-white overflow-hidden block"
          >
            <Image src="/images/figma/logo-inner.png" alt="" fill className="object-cover" />
          </Link>
          <button
            onClick={() => setOpen(false)}
            className="size-[48px] rounded-full bg-white/10 flex items-center justify-center text-white"
            aria-label="Close"
          >
            <X size={22} />
          </button>
        </div>

        <nav className="relative z-10 flex-1 flex flex-col items-center justify-center gap-2">
          {links.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="group flex flex-col items-center gap-1 px-6 py-3"
              style={{ transitionDelay: open ? `${i * 40}ms` : "0ms" }}
            >
              <span className="font-['Cairo',sans-serif] font-extrabold text-white text-[28px] group-hover:text-[#b8987f] transition-colors">
                {link.label}
              </span>
              <span className="h-[2px] w-0 bg-[#b8987f] group-hover:w-8 transition-all duration-300" />
            </Link>
          ))}
        </nav>

        <div className="relative z-10 pb-14 flex justify-center">
          <Link
            href={switchHref}
            onClick={() => setOpen(false)}
            className="rounded-full border border-[#b8987f] px-8 py-3 font-['Tajawal',sans-serif] text-[#b8987f] text-[15px]"
          >
            {switchLabel}
          </Link>
        </div>
      </div>
    </>
  );
}
