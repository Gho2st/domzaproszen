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

export function Countdown({
  dateISO,
  tone = "inverse",
}: {
  dateISO: string;
  tone?: "inverse" | "paper";
}) {
  const target = new Date(dateISO).getTime();

  // Na serwerze nie znamy „teraz” gościa, więc renderujemy placeholder
  // i dolewamy prawdziwe wartości dopiero po stronie klienta.
  const getSnapshot = useCallback(() => snapshot(target), [target]);
  const value = useSyncExternalStore(subscribe, getSnapshot, () => null);
  const parts = value ? value.split(":") : null;

  const inverse = tone === "inverse";

  return (
    <div
      role="timer"
      className={`grid grid-cols-4 divide-x border-y ${
        inverse
          ? "divide-paper/25 border-paper/25 text-paper"
          : "divide-rule border-rule text-ink"
      }`}
    >
      {UNITS.map((label, i) => (
        <div key={label} className="px-1 py-4 text-center sm:py-5">
          <p className="display num text-[1.45rem] font-semibold leading-none sm:text-[1.85rem]">
            {parts ? parts[i] : "––"}
          </p>
          <p
            className={`label mt-2.5 text-[0.55rem] sm:text-[0.6875rem] ${
              inverse ? "text-paper/65" : "text-ink-3"
            }`}
          >
            {label}
          </p>
        </div>
      ))}
    </div>
  );
}
