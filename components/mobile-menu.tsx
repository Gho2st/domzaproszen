"use client";

import { useEffect, useRef, type ReactNode } from "react";

export type MenuLink = { href: string; label: string };

/**
 * Pełnoekranowe menu mobilne. Zamyka się na Escape, po kliknięciu pozycji
 * i po przejściu na szeroki ekran, blokuje przewijanie tła, zatrzymuje
 * tabulację w środku i oddaje focus przyciskowi, który je otworzył.
 */
export function MobileMenu({
  open,
  onClose,
  brand,
  links,
  children,
}: {
  open: boolean;
  onClose: () => void;
  brand: ReactNode;
  links: MenuLink[];
  children?: ReactNode;
}) {
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const poprzedniOverflow = useRef("");

  useEffect(() => {
    if (!open) return;

    const wczesniejAktywny = document.activeElement as HTMLElement | null;
    poprzedniOverflow.current = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    return () => {
      document.body.style.overflow = poprzedniOverflow.current;
      wczesniejAktywny?.focus?.();
    };
  }, [open]);

  // Przycisk „Menu” znika na lg, więc otwarte menu musi zniknąć razem z nim —
  // inaczej blokada przewijania zostałaby na niewidocznym już panelu.
  useEffect(() => {
    if (!open) return;
    const szeroki = window.matchMedia("(min-width: 64rem)");
    const reaguj = () => {
      if (szeroki.matches) onClose();
    };
    szeroki.addEventListener("change", reaguj);
    return () => szeroki.removeEventListener("change", reaguj);
  }, [open, onClose]);

  if (!open) return null;

  function odblokujScroll() {
    document.body.style.overflow = poprzedniOverflow.current;
  }

  function zamknij() {
    odblokujScroll();
    onClose();
  }

  // Każde kliknięcie w link zdejmuje blokadę jeszcze przed domyślną akcją —
  // przy body { overflow: hidden } przeglądarka nie doskoczyłaby do kotwicy.
  // Działa też dla odnośników przekazanych w `children`.
  function odblokujPrzedPrzejsciem(e: React.MouseEvent) {
    if ((e.target as HTMLElement).closest("a")) odblokujScroll();
  }

  // Tabulacja krąży wewnątrz panelu — tło jest zasłonięte, więc nie powinno
  // dać się tam wejść klawiaturą.
  function pilnujFocusa(e: React.KeyboardEvent) {
    if (e.key === "Escape") {
      zamknij();
      return;
    }
    if (e.key !== "Tab") return;

    const pola = panelRef.current?.querySelectorAll<HTMLElement>(
      "a[href], button:not([disabled])",
    );
    if (!pola || pola.length === 0) return;

    const pierwszy = pola[0];
    const ostatni = pola[pola.length - 1];

    if (e.shiftKey && document.activeElement === pierwszy) {
      e.preventDefault();
      ostatni.focus();
    } else if (!e.shiftKey && document.activeElement === ostatni) {
      e.preventDefault();
      pierwszy.focus();
    }
  }

  return (
    <div
      ref={panelRef}
      role="dialog"
      aria-modal="true"
      aria-label="Menu"
      onKeyDown={pilnujFocusa}
      onClickCapture={odblokujPrzedPrzejsciem}
      className="fade-in fixed inset-0 z-50 flex flex-col overflow-y-auto overscroll-contain bg-ink text-paper lg:hidden"
    >
      <div className="flex items-center justify-between gap-6 border-b border-paper/15 px-6 py-4 sm:px-10">
        <span className="display text-[1.3rem] font-semibold leading-none">
          {brand}
        </span>
        <button
          ref={closeRef}
          type="button"
          onClick={zamknij}
          className="label flex items-center gap-2.5 py-2 text-paper"
        >
          Zamknij
          <span aria-hidden="true" className="text-lg leading-none">
            ×
          </span>
        </button>
      </div>

      <nav className="flex-1 px-6 sm:px-10">
        <ul>
          {links.map((l, i) => (
            <li key={l.href} className="border-b border-paper/15">
              <a
                href={l.href}
                onClick={onClose}
                className="rise flex items-baseline gap-5 py-5 transition-colors hover:text-accent"
                style={{ animationDelay: `${40 + i * 45}ms` }}
              >
                <span className="label num text-paper/45" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="display text-[clamp(1.75rem,7vw,2.35rem)] font-semibold leading-none">
                  {l.label}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {children ? (
        <div className="px-6 pb-10 pt-8 sm:px-10">{children}</div>
      ) : null}
    </div>
  );
}
