"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

interface SiteHeaderProps {
  locale?: string;
}

const NAV = {
  ar: [
    { href: "/", label: "الرئيسية" },
    { href: "/الأخبار-و-المقالات", label: "الأخبار و مقالات" },
    { href: "/التوظيف-و-التدريب", label: "تدريب وتوظيف" },
    { href: "/تواصل-معنا", label: "تواصل معنا" },
  ],
  en: [
    { href: "/en", label: "Home" },
    { href: "/en/news", label: "News & Articles" },
    { href: "/en/training", label: "Training & Jobs" },
    { href: "/en/contact", label: "Contact Us" },
  ],
};

export default function SiteHeader({ locale = "ar" }: SiteHeaderProps) {
  const isAr = locale !== "en";
  const links = isAr ? NAV.ar : NAV.en;
  const switchHref = isAr ? "/en" : "/";
  const switchLabel = isAr ? "English" : "عربي";
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div dir={isAr ? "rtl" : "ltr"} className="absolute top-0 left-0 right-0 z-50 h-0">
      {/* Logo - top-right, white circle badge. Mobile: size bumped +20% (48px -> 58px), re-centered against the burger's inset */}
      <Link
        href={isAr ? "/" : "/en"}
        className="absolute top-[39px] right-[24px] size-[58px] md:top-[48px] md:right-[76px] md:size-[56px] rounded-full bg-white overflow-hidden block pointer-events-auto"
      >
        <Image src="/images/figma/logo-inner.png" alt="لمعة العربية للمقاولات" fill className="object-cover" />
      </Link>

      {/* Nav pill - centered, desktop only */}
      <div className="absolute top-[44px] left-1/2 -translate-x-1/2 w-[800px] max-w-[92vw] h-[64px] drop-shadow-[0px_4px_2px_rgba(0,0,0,0.1)] hidden md:block">
        <Image src="/images/figma/nav-pill-bg.svg" alt="" fill className="object-fill" />
        <nav className="relative z-10 h-full flex items-center justify-center gap-[64px]">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-['Tajawal',sans-serif] text-[18px] text-white whitespace-nowrap hover:opacity-80 transition-opacity"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Language switch - top-left, desktop only */}
      <Link
        href={switchHref}
        className="absolute top-[54px] left-[48px] w-[108px] h-[54px] items-center hidden md:flex"
      >
        <Image src="/images/figma/lang-pill-bg.svg" alt="" fill className="object-fill" />
        <span className="relative z-10 mx-auto font-['Tajawal',sans-serif] text-white text-[13px] font-medium">
          {switchLabel}
        </span>
      </Link>

      {/* Mobile toggle - not part of the Figma desktop frame, needed since it has none */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="md:hidden absolute top-[44px] left-[24px] size-[48px] rounded-full bg-[#141e16]/60 backdrop-blur-sm flex items-center justify-center text-white pointer-events-auto"
        aria-label="Menu"
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>
      {/* Full-screen mobile nav overlay */}
      <div
        className={`md:hidden fixed inset-0 z-[60] bg-[#141e16] flex flex-col transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="pointer-events-none absolute left-1/2 top-[-120px] -translate-x-1/2 size-[420px] opacity-20">
          <Image src="/images/figma/ellipse-glow.svg" alt="" fill className="object-contain" />
        </div>

        <div className="relative z-10 flex items-center justify-between px-6 pt-[44px]">
          <Link
            href={isAr ? "/" : "/en"}
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
    </div>
  );
}
