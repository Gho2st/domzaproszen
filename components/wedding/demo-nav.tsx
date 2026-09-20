"use client";

import { useState } from "react";

const links = [
  { href: "#historia", label: "Nasza historia" },
  { href: "#harmonogram", label: "Harmonogram" },
  { href: "#miejsce", label: "Miejsce" },
  { href: "#nocleg", label: "Nocleg" },
  { href: "#galeria", label: "Galeria" },
  { href: "#pytania", label: "Pytania" },
];

export function DemoNav({ monogram }: { monogram: string }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-ivory/90 backdrop-blur">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-5 py-4 sm:gap-6 sm:px-10">
        <a
          href="#gora"
          className="font-display text-lg font-semibold tracking-[0.2em] text-ink"
        >
          {monogram}
        </a>

        <div className="hidden items-center gap-7 text-sm text-ink-soft lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="transition-colors hover:text-accent"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href="#rsvp"
            className="rounded-full bg-accent px-4 py-2 text-sm font-medium text-ivory transition-colors hover:bg-accent-deep sm:px-5"
          >
            <span className="sm:hidden">RSVP</span>
            <span className="hidden sm:inline">Potwierdź obecność</span>
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
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-line/50 py-3.5 text-sm text-ink-soft last:border-0 transition-colors hover:text-accent"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
