"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * Odsłanianie treści przy przewijaniu. Element startuje przezroczysty
 * i lekko obniżony, a po wejściu w kadr wraca na miejsce — raz, bez
 * znikania przy przewijaniu w górę.
 */
export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Bez obsługi IntersectionObserver albo przy ograniczonym ruchu
    // treść ma być po prostu widoczna.
    if (
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      el.dataset.widoczny = "tak";
      return;
    }

    const obs = new IntersectionObserver(
      (wpisy) => {
        for (const wpis of wpisy) {
          if (wpis.isIntersecting) {
            el.dataset.widoczny = "tak";
            obs.unobserve(el);
          }
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.08 },
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`odslon ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
