"use client";

import { useState } from "react";
import { MobileMenu } from "@/components/mobile-menu";

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
    <>
      <header className="sticky top-0 z-40 border-b border-rule/60 bg-paper/80 backdrop-blur-xl">
        <nav className="mx-auto flex w-full max-w-[1180px] items-center justify-between gap-4 px-6 py-3 sm:px-10">
          <a
            href="#gora"
            className="display text-[1.05rem] font-semibold tracking-[0.12em] text-ink"
          >
            {monogram}
          </a>

          <div className="hidden items-center gap-7 lg:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[0.8125rem] text-ink-2 decoration-ink/30 underline-offset-[6px] transition-colors hover:text-ink hover:underline"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a
              href="#rsvp"
              className="rounded-full bg-ink px-4 py-2 text-[0.8125rem] font-medium text-paper transition-colors hover:bg-accent"
            >
              <span className="sm:hidden">RSVP</span>
              <span className="hidden sm:inline">Potwierdź obecność</span>
            </a>
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
          </div>
        </nav>
      </header>

      <MobileMenu
        open={open}
        onClose={() => setOpen(false)}
        brand={monogram}
        links={links}
      >
        <a
          href="#rsvp"
          onClick={() => setOpen(false)}
          className="block w-full rounded-full bg-paper px-5 py-3.5 text-center text-sm font-medium text-ink transition-colors hover:bg-accent hover:text-paper"
        >
          Potwierdź obecność
        </a>
      </MobileMenu>
    </>
  );
}
