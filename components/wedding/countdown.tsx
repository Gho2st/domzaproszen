"use client";

import { useCallback, useSyncExternalStore } from "react";

const UNITS = ["dni", "godzin", "minut", "sekund"];

/** "126:04:38:12" — jedna, stabilna migawka na sekundę. */
function snapshot(target: number) {
  const diff = Math.max(0, target - Date.now());
  return [
    Math.floor(diff / 86_400_000),
    Math.floor(diff / 3_600_000) % 24,
    Math.floor(diff / 60_000) % 60,
    Math.floor(diff / 1000) % 60,
  ]
    .map((n) => String(n).padStart(2, "0"))
    .join(":");
}

function subscribe(onChange: () => void) {
  const id = setInterval(onChange, 1000);
  return () => clearInterval(id);
}

export function Countdown({ dateISO }: { dateISO: string }) {
  const target = new Date(dateISO).getTime();

  // Na serwerze nie znamy „teraz” gościa, więc renderujemy placeholder
  // i dolewamy prawdziwe wartości dopiero po stronie klienta.
  const getSnapshot = useCallback(() => snapshot(target), [target]);
  const value = useSyncExternalStore(subscribe, getSnapshot, () => null);
  const parts = value ? value.split(":") : null;

  return (
    <div className="grid grid-cols-4 gap-2 sm:gap-4" role="timer">
      {UNITS.map((label, i) => (
        <div
          key={label}
          className="rounded-2xl border border-ivory/25 bg-ink/25 px-1.5 py-3.5 text-center backdrop-blur-sm sm:px-4 sm:py-5"
        >
          <p className="font-display text-[1.75rem] font-semibold tabular-nums text-ivory sm:text-4xl">
            {parts ? parts[i] : "--"}
          </p>
          <p className="mt-1 text-[0.55rem] uppercase tracking-[0.1em] text-ivory/70 sm:text-xs sm:tracking-[0.16em]">
            {label}
          </p>
        </div>
      ))}
    </div>
  );
}
