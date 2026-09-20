"use client";

import Link from "next/link";
import { useState } from "react";
import { INSTAGRAM_URL } from "@/lib/site";
import { IconInstagram } from "./icons";

const navLinks = [
  { href: "/#oferta", label: "Oferta" },
  { href: "/#realizacje", label: "Realizacje" },
  { href: "/strony-weselne", label: "Strony weselne", badge: "Nowość" },
  { href: "/#jak-to-dziala", label: "Jak to działa" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-ivory/90 backdrop-blur">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between gap-6 px-6 py-4 sm:px-10">
        <Link
          href="/"
          className="font-display text-xl font-semibold tracking-wide text-ink"
        >
          Dom Zaproszeń
        </Link>

        <div className="hidden items-center gap-8 text-sm text-ink-soft lg:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="inline-flex items-center gap-2 transition-colors hover:text-accent"
            >
              {l.label}
              {l.badge ? (
                <span className="rounded-full bg-accent/12 px-2 py-0.5 text-[0.625rem] font-semibold uppercase tracking-[0.12em] text-accent">
                  {l.badge}
                </span>
              ) : null}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-medium text-ivory transition-colors hover:bg-accent-deep sm:px-5"
          >
            <IconInstagram />
            <span className="hidden sm:inline">Napisz na Instagramie</span>
            <span className="sm:hidden">DM</span>
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Zamknij menu" : "Otwórz menu"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-accent hover:text-accent lg:hidden"
          >
            <svg
              viewBox="0 0 24 24"
              width="18"
              height="18"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            >
              {open ? (
                <path d="m6 6 12 12M18 6 6 18" />
              ) : (
                <path d="M4 8h16M4 16h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {open ? (
        <div className="border-t border-line/70 lg:hidden">
          <div className="mx-auto flex w-full max-w-6xl flex-col px-6 py-2 sm:px-10">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 border-b border-line/50 py-3.5 text-sm text-ink-soft last:border-0 transition-colors hover:text-accent"
              >
                {l.label}
                {l.badge ? (
                  <span className="rounded-full bg-accent/12 px-2 py-0.5 text-[0.625rem] font-semibold uppercase tracking-[0.12em] text-accent">
                    {l.badge}
                  </span>
                ) : null}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
