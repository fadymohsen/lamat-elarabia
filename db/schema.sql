-- Admin panel schema. Content is modeled loosely (JSONB per section) rather
-- than one column per field, because the source content is a legacy
-- WordPress/Elementor site with dozens of ad-hoc section shapes (hero,
-- certificate grid, partner-logo carousel, icon list, etc.) that don't map
-- cleanly to a rigid relational shape. Media is centralized so uploads are
-- reusable across sections instead of duplicated per reference.

CREATE TABLE IF NOT EXISTS admin_users (
  id SERIAL PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS site_settings (
  key TEXT PRIMARY KEY,
  value TEXT,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS media (
  id SERIAL PRIMARY KEY,
  url TEXT NOT NULL,
  pathname TEXT,
  alt_text TEXT,
  width INTEGER,
  height INTEGER,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS pages (
  id SERIAL PRIMARY KEY,
  slug TEXT NOT NULL,
  locale TEXT NOT NULL DEFAULT 'ar',
  title TEXT,
  meta_description TEXT,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (slug, locale)
);

CREATE TABLE IF NOT EXISTS sections (
  id SERIAL PRIMARY KEY,
  page_id INTEGER NOT NULL REFERENCES pages(id) ON DELETE CASCADE,
  type TEXT NOT NULL,
  sort_order INTEGER NOT NULL DEFAULT 0,
  content JSONB NOT NULL DEFAULT '{}'::jsonb,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS sections_page_id_idx ON sections (page_id, sort_order);
