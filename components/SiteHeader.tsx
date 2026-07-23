import React from "react";
import Image from "next/image";
import Link from "next/link";
import MobileNav from "./MobileNav";

interface SiteHeaderProps {
  locale?: string;
  page?: string; // e.g. "news", "training", "contact" — empty for home
}

const NAV = {
  ar: [
    { href: "/ar", label: "الرئيسية", page: "" },
    { href: "/ar/news", label: "الأخبار و مقالات", page: "news" },
    { href: "/ar/training", label: "تدريب وتوظيف", page: "training" },
    { href: "/ar/contact", label: "تواصل معنا", page: "contact" },
  ],
  en: [
    { href: "/en", label: "Home", page: "" },
    { href: "/en/news", label: "News & Articles", page: "news" },
    { href: "/en/training", label: "Training & Jobs", page: "training" },
    { href: "/en/contact", label: "Contact Us", page: "contact" },
  ],
};

export default function SiteHeader({ locale = "ar", page = "" }: SiteHeaderProps) {
  const isAr = locale !== "en";
  const links = isAr ? NAV.ar : NAV.en;
  const targetLocale = isAr ? "en" : "ar";
  const switchHref = page ? `/${targetLocale}/${page}` : `/${targetLocale}`;
  const switchLabel = isAr ? "English" : "عربي";
  const homeHref = isAr ? "/ar" : "/en";

  return (
    <div dir={isAr ? "rtl" : "ltr"} className="absolute top-0 left-0 right-0 z-50 h-0">
      {/* Logo */}
      <Link
        href={homeHref}
        className={`absolute top-[39px] size-[58px] md:top-[48px] md:size-[56px] rounded-full bg-white overflow-hidden block pointer-events-auto ${
          isAr ? "right-[24px] md:right-[76px]" : "left-[24px] md:left-[76px]"
        }`}
      >
        <Image src="/images/figma/logo-inner.png" alt="لمعة العربية للمقاولات" fill className="object-cover" />
      </Link>

      {/* Nav pill - desktop */}
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
          <span className="w-[1px] h-[24px] bg-white/30" />
          <Link
            href={switchHref}
            className="font-['Tajawal',sans-serif] text-[14px] text-[#b8987f] whitespace-nowrap hover:text-white transition-colors"
          >
            {switchLabel}
          </Link>
        </nav>
      </div>

      {/* Mobile nav (client component) */}
      <MobileNav
        links={links}
        switchHref={switchHref}
        switchLabel={switchLabel}
        homeHref={homeHref}
        isAr={isAr}
      />
    </div>
  );
}
