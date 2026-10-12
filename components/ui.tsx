import type { ReactNode } from "react";

/* Przyciski pigułkowe, z wyraźnym polem dotyku i delikatnym podniesieniem */
const btnBase =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-all duration-200 sm:px-6 sm:py-3.5";

export const btnSolid = `${btnBase} bg-ink text-paper hover:bg-accent`;

export const btnOutline = `${btnBase} border border-ink/20 text-ink hover:border-ink/40 hover:bg-ink/[0.04]`;

export const btnSolidInverse = `${btnBase} bg-paper text-ink hover:bg-accent hover:text-paper`;

export const btnOutlineInverse = `${btnBase} border border-paper/30 text-paper hover:border-paper/60 hover:bg-paper/10`;

/** Link tekstowy ze strzałką — trzeci poziom, zamiast trzeciego przycisku */
export const linkArrow =
  "group inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:text-accent-2";

export function ArrowGlyph() {
  return (
    <span
      aria-hidden="true"
      className="transition-transform duration-200 group-hover:translate-x-0.5"
    >
      ›
    </span>
  );
}

/**
 * Dwie wersje napisu na przycisku: krótka na telefonie, pełna od sm.
 * Przy przyciskach ustawionych w rzędzie długie etykiety nie mieszczą się
 * na wąskich ekranach.
 */
export function Etykieta({ krotka, pelna }: { krotka: string; pelna: string }) {
  return (
    <>
      <span className="sm:hidden">{krotka}</span>
      <span className="hidden sm:inline">{pelna}</span>
    </>
  );
}

/** Stała szerokość łamu dla wszystkich sekcji */
export const shell = "mx-auto w-full max-w-[1180px] px-6 sm:px-10";

/** Węższy łam dla treści czytanej w całości */
export const shellNarrow = "mx-auto w-full max-w-[52rem] px-6 sm:px-10";

/**
 * Nagłówek sekcji. Domyślnie wyśrodkowany, z etykietą nad tytułem
 * i dużym światłem — kompozycja spokojna, nie gazetowa.
 */
export function SectionHead({
  label,
  title,
  lede,
  inverse = false,
  align = "center",
  className = "",
}: {
  label?: string;
  title: ReactNode;
  lede?: ReactNode;
  inverse?: boolean;
  align?: "center" | "left";
  className?: string;
}) {
  const srodek = align === "center";

  return (
    <header
      className={`${srodek ? "mx-auto max-w-[46rem] text-center" : ""} ${className}`}
    >
      {label ? (
        <p
          className={`kicker ${inverse ? "text-paper/70" : "text-accent"}`}
        >
          {label}
        </p>
      ) : null}
      <h2
        className={`tytul text-balance text-d2 ${
          label ? "mt-4" : ""
        } ${inverse ? "text-paper" : "text-ink"} ${
          srodek ? "mx-auto max-w-[20ch]" : "max-w-[22ch]"
        }`}
      >
        {title}
      </h2>
      {lede ? (
        <p
          className={`mt-5 text-pretty text-lede ${
            inverse ? "text-paper/70" : "text-ink-2"
          } ${srodek ? "mx-auto max-w-[46ch]" : "max-w-[52ch]"}`}
        >
          {lede}
        </p>
      ) : null}
    </header>
  );
}

/** Rozwijane pytanie — znak „+” obracany w „×” */
export function Question({
  q,
  a,
  inverse = false,
}: {
  q: string;
  a: string;
  inverse?: boolean;
}) {
  return (
    <details className="group">
      <summary
        className={`flex items-start justify-between gap-6 py-5 text-left transition-colors ${
          inverse
            ? "text-paper hover:text-paper/70"
            : "text-ink hover:text-accent"
        }`}
      >
        <span className="tytul max-w-[46ch] text-d4">{q}</span>
        <span
          aria-hidden="true"
          className={`mt-0.5 shrink-0 text-lg leading-none transition-transform duration-300 group-open:rotate-45 ${
            inverse ? "text-paper/60" : "text-ink-3"
          }`}
        >
          +
        </span>
      </summary>
      <p
        className={`max-w-[66ch] pb-6 text-pretty ${
          inverse ? "text-paper/70" : "text-ink-2"
        }`}
      >
        {a}
      </p>
    </details>
  );
}
