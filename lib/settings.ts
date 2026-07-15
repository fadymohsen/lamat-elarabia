import { query } from "@/lib/db";

export interface SiteSettings {
  whatsapp_number: string;
  phone_display: string;
  email: string;
  address_text: string;
  address_url: string;
}

export const DEFAULT_SETTINGS: SiteSettings = {
  whatsapp_number: "+9660550928077",
  phone_display: "0550928077",
  email: "info@lamat-elarabia.org",
  address_text: "المملكة العربية السعودية-الرياض",
  address_url:
    "https://www.google.com/maps/place/%D8%B4%D8%B1%D9%83%D8%A9+%D9%84%D9%85%D8%B9%D8%A9+%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A%D8%A9%E2%80%AD/@26.3957293,43.9595847,17z/data=!3m1!4b1!4m6!3m5!1s0x157f59b012928293:0xe22b3a6952c5e6cb!8m2!3d26.3957293!4d43.9595847!16s%2Fg%2F11ylpdw61w",
};

export async function getSiteSettings(): Promise<SiteSettings> {
  try {
    const { rows } = await query<{ key: string; value: string }>(
      "SELECT key, value FROM site_settings WHERE key = ANY($1)",
      [Object.keys(DEFAULT_SETTINGS)]
    );
    const overrides = Object.fromEntries(rows.map((r) => [r.key, r.value]));
    return { ...DEFAULT_SETTINGS, ...overrides } as SiteSettings;
  } catch {
    return DEFAULT_SETTINGS;
  }
}
