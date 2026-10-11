"use client";

import Link from "next/link";
import { useState } from "react";
import { INSTAGRAM_URL } from "@/lib/site";
import { shell } from "./ui";

const navLinks = [
  { href: "/#oferta", label: "Oferta" },
  { href: "/#realizacje", label: "Realizacje" },
  { href: "/strony-weselne", label: "Strony weselne" },
  { href: "/#jak-to-dziala", label: "Jak pracujemy" },
  { href: "/#kontakt", label: "Kontakt" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-rule bg-paper">
      <div className={shell}>
        <nav className="flex items-center justify-between gap-8 py-4">
          <Link href="/" className="group flex items-baseline gap-3">
            <span className="display text-[1.3rem] font-semibold leading-none tracking-[-0.02em]">
              Dom Zaproszeń
            </span>
            <span className="label hidden text-ink-3 sm:block">
              Pracownia papeterii
            </span>
          </Link>

          <div className="hidden items-center gap-7 lg:flex">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[0.9375rem] text-ink-2 decoration-ink/30 underline-offset-[6px] transition-colors hover:text-ink hover:underline"
              >
                {l.label}
              </a>
            ))}
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-[2px] bg-ink px-5 py-2.5 text-[0.9375rem] font-medium text-paper transition-colors hover:bg-accent"
            >
              Napisz do nas
            </a>
          </div>

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
        </nav>
      </div>

      {open ? (
        <div className="border-t border-rule lg:hidden">
          <div className={shell}>
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block border-b border-rule/60 py-4 text-ink-2 transition-colors last:border-0 hover:text-ink"
              >
                {l.label}
              </a>
            ))}
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="my-5 block rounded-[2px] bg-ink px-5 py-3.5 text-center font-medium text-paper"
            >
              Napisz na Instagramie
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
