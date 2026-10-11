import type { ReactNode } from "react";

/* Przyciski: prostokątne, bez cieni i gradientów — bliżej druku niż aplikacji */
export const btnSolid =
  "inline-flex items-center justify-center gap-2.5 rounded-[2px] bg-ink px-6 py-3.5 text-[0.9375rem] font-medium text-paper transition-colors hover:bg-accent";

export const btnOutline =
  "inline-flex items-center justify-center gap-2.5 rounded-[2px] border border-ink/30 px-6 py-3.5 text-[0.9375rem] font-medium text-ink transition-colors hover:border-ink hover:bg-ink/[0.04]";

export const btnSolidInverse =
  "inline-flex items-center justify-center gap-2.5 rounded-[2px] bg-paper px-6 py-3.5 text-[0.9375rem] font-medium text-ink transition-colors hover:bg-accent hover:text-paper";

export const btnOutlineInverse =
  "inline-flex items-center justify-center gap-2.5 rounded-[2px] border border-paper/30 px-6 py-3.5 text-[0.9375rem] font-medium text-paper transition-colors hover:border-paper hover:bg-paper/10";

export const linkQuiet =
  "text-accent underline decoration-accent/35 underline-offset-[5px] transition-colors hover:decoration-accent";

/** Stała szerokość łamu dla wszystkich sekcji */
export const shell = "mx-auto w-full max-w-[1180px] px-6 sm:px-10";

/**
 * Nagłówek sekcji: numer i etykieta na cienkiej linii, tytuł poniżej.
 * Wyrównany do lewej — zamiast wyśrodkowanego nadpisu nad każdą sekcją.
 */
export function SectionHead({
  index,
  label,
  title,
  lede,
  inverse = false,
  className = "",
}: {
  index: string;
  label: string;
  title: ReactNode;
  lede?: ReactNode;
  inverse?: boolean;
  className?: string;
}) {
  return (
    <header
      className={`border-t pt-5 ${
        inverse ? "border-paper/20" : "border-rule"
      } ${className}`}
    >
      <div className="flex items-baseline gap-5">
        <span
          className={`label ${inverse ? "text-paper/60" : "text-ink-3"}`}
          aria-hidden="true"
        >
          {index}
        </span>
        <span className={`label ${inverse ? "text-paper/70" : "text-ink-2"}`}>
          {label}
        </span>
      </div>
      <h2
        className={`display mt-7 max-w-[24ch] text-balance text-d2 font-semibold ${
          inverse ? "text-paper" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {lede ? (
        <p
          className={`mt-5 max-w-[58ch] text-pretty text-lede ${
            inverse ? "text-paper/70" : "text-ink-2"
          }`}
        >
          {lede}
        </p>
      ) : null}
    </header>
  );
}

/** Rozwijane pytanie — znak „+” zamiast obracanej strzałki */
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
        className={`flex items-start justify-between gap-6 py-6 text-left transition-colors ${
          inverse
            ? "text-paper hover:text-paper/70"
            : "text-ink hover:text-accent"
        }`}
      >
        <span className="display max-w-[46ch] text-d4 font-semibold">{q}</span>
        <span
          aria-hidden="true"
          className={`mt-1 shrink-0 text-lg leading-none transition-transform duration-300 group-open:rotate-45 ${
            inverse ? "text-paper/60" : "text-ink-3"
          }`}
        >
          +
        </span>
      </summary>
      <p
        className={`max-w-[66ch] pb-7 text-pretty ${
          inverse ? "text-paper/70" : "text-ink-2"
        }`}
      >
        {a}
      </p>
    </details>
  );
}
