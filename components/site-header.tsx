"use client";

import Link from "next/link";
import { useState } from "react";
import { INSTAGRAM_URL, TIKTOK_URL } from "@/lib/site";
import { MobileMenu } from "./mobile-menu";
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
    <>
      <header className="sticky top-0 z-40 border-b border-rule/60 bg-paper/80 backdrop-blur-xl">
        <div className={shell}>
          <nav className="flex items-center justify-between gap-8 py-3">
            <Link href="/" className="flex items-baseline gap-3">
              <span className="display text-[1.05rem] font-semibold leading-none tracking-[-0.02em]">
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
                  className="text-[0.8125rem] text-ink-2 decoration-ink/30 underline-offset-[6px] transition-colors hover:text-ink hover:underline"
                >
                  {l.label}
                </a>
              ))}
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-ink px-4 py-2 text-[0.8125rem] font-medium text-paper transition-colors hover:bg-accent"
              >
                Napisz do nas
              </a>
            </div>

            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-expanded={open}
              aria-haspopup="dialog"
              className="label flex items-center gap-2.5 py-2 text-ink lg:hidden"
            >
              Menu
              <span aria-hidden="true" className="flex flex-col gap-[3px]">
                <span className="block h-px w-5 bg-ink" />
                <span className="block h-px w-5 bg-ink" />
              </span>
            </button>
          </nav>
        </div>
      </header>

      <MobileMenu
        open={open}
        onClose={() => setOpen(false)}
        brand="Dom Zaproszeń"
        links={navLinks}
      >
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setOpen(false)}
          className="block w-full rounded-full bg-paper px-5 py-3.5 text-center text-sm font-medium text-ink transition-colors hover:bg-accent hover:text-paper"
        >
          Napisz do nas
        </a>
        <div className="mt-6 flex items-center justify-between border-t border-paper/15 pt-5">
          <span className="label text-paper/45">Pracownia papeterii</span>
          <div className="flex gap-5">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-paper/70 transition-colors hover:text-paper"
            >
              Instagram
            </a>
            <a
              href={TIKTOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-paper/70 transition-colors hover:text-paper"
            >
              TikTok
            </a>
          </div>
        </div>
      </MobileMenu>
    </>
  );
}
