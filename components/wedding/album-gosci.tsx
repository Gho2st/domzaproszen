"use client";

import { useEffect, useRef, useState } from "react";
import { IconCamera, IconCheckCircle } from "@/components/icons";

/** W demo trzymamy zdjęcia w pamięci przeglądarki, więc limitujemy liczbę. */
const LIMIT = 12;
/** Ile pustych ramek pokazać, zanim ktokolwiek coś doda. */
const RAMKI = 6;

type Kadr = { id: string; url: string };

/** „1 zdjęcie", „2 zdjęcia", „5 zdjęć" — polska odmiana przez liczebnik. */
function zdjec(n: number) {
  if (n === 1) return "zdjęcie";
  const ost = n % 10;
  const dwie = n % 100;
  return ost >= 2 && ost <= 4 && (dwie < 12 || dwie > 14) ? "zdjęcia" : "zdjęć";
}

export function AlbumGosci() {
  const [kadry, setKadry] = useState<Kadr[]>([]);
  const [przeciagane, setPrzeciagane] = useState(false);
  const [info, setInfo] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const kadryRef = useRef<Kadr[]>([]);

  useEffect(() => {
    kadryRef.current = kadry;
  }, [kadry]);

  // Po opuszczeniu strony zwalniamy wszystkie obiekty URL
  useEffect(() => {
    return () => {
      for (const k of kadryRef.current) URL.revokeObjectURL(k.url);
    };
  }, []);

  function dodaj(pliki: FileList | null) {
    if (!pliki || pliki.length === 0) return;

    const zdjecia = Array.from(pliki).filter((p) => p.type.startsWith("image/"));
    if (zdjecia.length === 0) {
      setInfo("To nie wygląda na zdjęcie — wybierzcie plik JPG, PNG albo HEIC.");
      return;
    }

    const wolne = LIMIT - kadry.length;
    if (wolne <= 0) {
      setInfo(
        `W demo mieści się ${LIMIT} zdjęć. Na prawdziwym weselu limitu nie ma.`,
      );
      return;
    }

    const przyjete = zdjecia.slice(0, wolne).map((plik) => ({
      id: `${plik.name}-${plik.lastModified}-${Math.random().toString(36).slice(2, 8)}`,
      url: URL.createObjectURL(plik),
    }));

    setKadry((poprzednie) => [...przyjete, ...poprzednie]);
    setInfo(
      zdjecia.length > wolne
        ? `Dodaliśmy ${wolne} z ${zdjecia.length} ${zdjec(zdjecia.length)} — w demo limit to ${LIMIT}.`
        : `Dodano ${przyjete.length} ${zdjec(przyjete.length)}. Tak wygląda to u pary młodej.`,
    );
  }

  function usun(id: string) {
    const cel = kadry.find((k) => k.id === id);
    if (cel) URL.revokeObjectURL(cel.url);
    setKadry((poprzednie) => poprzednie.filter((k) => k.id !== id));
    setInfo(null);
  }

  const puste = Math.max(RAMKI - kadry.length, 0);

  return (
    <div className="mt-12">
      <div
        onDragOver={(e) => {
          e.preventDefault();
          setPrzeciagane(true);
        }}
        onDragLeave={() => setPrzeciagane(false)}
        onDrop={(e) => {
          e.preventDefault();
          setPrzeciagane(false);
          dodaj(e.dataTransfer.files);
        }}
        className={`flex flex-col items-center gap-4 rounded-[3px] border border-dashed p-8 text-center transition-colors sm:p-10 ${
          przeciagane ? "border-accent bg-accent/5" : "border-line bg-ivory"
        }`}
      >
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent">
          <IconCamera size={22} />
        </span>

        <p className="font-display text-xl font-semibold text-ink sm:text-2xl">
          Dorzućcie swoje kadry
        </p>
        <p className="max-w-sm text-sm leading-relaxed text-ink-soft">
          Wybierzcie zdjęcia z telefonu — pojawią się w albumie od razu, obok
          kadrów innych gości.
        </p>

        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          className="mt-1 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-ivory transition-colors hover:bg-accent-deep"
        >
          Dodaj zdjęcia
        </button>

        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          multiple
          className="sr-only"
          onChange={(e) => {
            dodaj(e.target.files);
            e.target.value = "";
          }}
        />

        <p className="text-xs leading-relaxed text-ink-soft">
          {kadry.length > 0
            ? `W albumie: ${kadry.length} ${zdjec(kadry.length)}`
            : "Na komputerze możecie też przeciągnąć pliki w to miejsce"}
        </p>

        {info ? (
          <p className="flex items-center gap-2 text-xs font-medium text-accent">
            <IconCheckCircle size={15} />
            {info}
          </p>
        ) : null}
      </div>

      <p className="mt-4 text-center text-xs leading-relaxed text-ink-soft">
        To strona pokazowa — zdjęcia zostają w Waszej przeglądarce i nie trafiają
        na żaden serwer. Na gotowej stronie lądują w albumie pary młodej.
      </p>

      <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-3 lg:gap-6">
        {kadry.map((k) => (
          <figure
            key={k.id}
            className="group relative aspect-[4/5] overflow-hidden rounded-[3px] border border-line bg-ivory-deep"
          >
            {/* obiekt URL z pliku gościa — next/image go nie obsłuży */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={k.url}
              alt="Zdjęcie dodane przez gościa"
              className="h-full w-full object-cover"
            />
            <button
              type="button"
              onClick={() => usun(k.id)}
              className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-ink/70 text-ivory opacity-0 transition-opacity hover:bg-ink focus-visible:opacity-100 group-hover:opacity-100"
              aria-label="Usuń zdjęcie z albumu"
            >
              <svg
                viewBox="0 0 24 24"
                width="15"
                height="15"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              >
                <path d="m6 6 12 12M18 6 6 18" />
              </svg>
            </button>
          </figure>
        ))}

        {Array.from({ length: puste }).map((_, i) => (
          <div
            key={`ramka-${i}`}
            className="papier relative flex aspect-[4/5] items-center justify-center rounded-[3px] border border-line bg-ivory"
          >
            <span className="pointer-events-none absolute inset-2.5 rounded-[2px] border border-line sm:inset-3" />
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-accent sm:h-11 sm:w-11">
              <IconCamera size={18} />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
