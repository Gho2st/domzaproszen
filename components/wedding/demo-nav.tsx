"use client";

import { useState } from "react";

const links = [
  { href: "#historia", label: "Nasza historia" },
  { href: "#harmonogram", label: "Harmonogram" },
  { href: "#miejsce", label: "Miejsce" },
  { href: "#nocleg", label: "Nocleg" },
  { href: "#galeria", label: "Galeria" },
  { href: "#album", label: "Album gości" },
  { href: "#pytania", label: "Pytania" },
];

export function DemoNav({ monogram }: { monogram: string }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-rule bg-paper">
      <nav className="mx-auto flex w-full max-w-[1180px] items-center justify-between gap-4 px-6 py-4 sm:px-10">
        <a
          href="#gora"
          className="display text-[1.15rem] font-semibold tracking-[0.12em] text-ink"
        >
          {monogram}
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[0.9375rem] text-ink-2 decoration-ink/30 underline-offset-[6px] transition-colors hover:text-ink hover:underline"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a
            href="#rsvp"
            className="rounded-[2px] bg-ink px-5 py-2.5 text-[0.9375rem] font-medium text-paper transition-colors hover:bg-accent"
          >
            <span className="sm:hidden">RSVP</span>
            <span className="hidden sm:inline">Potwierdź obecność</span>
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            className="label flex items-center gap-2.5 py-2 text-ink lg:hidden"
          >
            {open ? "Zamknij" : "Menu"}
            <span aria-hidden="true" className="flex flex-col gap-[3px]">
              <span className="block h-px w-5 bg-ink" />
              <span className="block h-px w-5 bg-ink" />
            </span>
          </button>
        </div>
      </nav>

      {open ? (
        <div className="border-t border-rule lg:hidden">
          <div className="mx-auto flex w-full max-w-[1180px] flex-col px-6 sm:px-10">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-rule/60 py-4 text-ink-2 transition-colors last:border-0 hover:text-ink"
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
