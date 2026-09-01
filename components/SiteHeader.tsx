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
    { href: "/ar/blogs", label: "المدونة", page: "blogs" },
    { href: "/ar/training", label: "تدريب وتوظيف", page: "training" },
    { href: "/ar/contact", label: "تواصل معنا", page: "contact" },
  ],
  en: [
    { href: "/en", label: "Home", page: "" },
    { href: "/en/blogs", label: "Blogs", page: "blogs" },
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
    <div dir={isAr ? "rtl" : "ltr"} className="fixed top-0 left-0 right-0 z-50 h-0">
      {/* Nav pill - desktop */}
      <div className="absolute top-[44px] left-1/2 -translate-x-1/2 w-[880px] max-w-[92vw] h-[88px] drop-shadow-[0px_4px_2px_rgba(0,0,0,0.1)] hidden md:block">
        <Image src="/images/figma/nav-pill-bg.svg" alt="" fill className="object-fill" />
        <nav className={`relative z-10 h-full flex items-center justify-center gap-[48px] px-6 ${isAr ? "flex-row-reverse" : ""}`}>
          {/* Logo inside nav */}
          <Link
            href={homeHref}
            className="relative size-[72px] rounded-full bg-white shrink-0 shadow-[0_8px_24px_rgba(0,0,0,0.15)] border-2 border-white/80 transition-transform duration-300 hover:scale-105 flex items-center justify-center"
          >
            <div className="relative size-[50px] logo-3d">
              <Image src="/images/figma/logo-inner.png" alt="لمعة العربية للمقاولات" fill className="object-contain" />
            </div>
          </Link>
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
