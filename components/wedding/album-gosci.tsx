"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import { IconCamera, IconCheckCircle, IconSparkle } from "@/components/icons";

/** W demo trzymamy zdjęcia w pamięci przeglądarki, więc limitujemy liczbę. */
const LIMIT = 12;
/** Ile pustych ramek pokazać, zanim ktokolwiek coś doda. */
const RAMKI = 6;
/** Co ile milisekund zmienia się slajd w pokazie. */
const SLAJD_MS = 4000;

type Kadr = { id: string; url: string };

const MNIEJ_RUCHU = "(prefers-reduced-motion: reduce)";

function subskrybujRuch(onChange: () => void) {
  const zapytanie = window.matchMedia(MNIEJ_RUCHU);
  zapytanie.addEventListener("change", onChange);
  return () => zapytanie.removeEventListener("change", onChange);
}

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
  const [pokaz, setPokaz] = useState(false);
  const [slajd, setSlajd] = useState(0);
  const [gra, setGra] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null);
  const kadryRef = useRef<Kadr[]>([]);

  // Szanujemy systemowe ograniczenie animacji — wtedy bez autoodtwarzania
  const mniejRuchu = useSyncExternalStore(
    subskrybujRuch,
    () => window.matchMedia(MNIEJ_RUCHU).matches,
    () => false,
  );
  const pokazRef = useRef<HTMLDivElement>(null);
  const zamknijRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    kadryRef.current = kadry;
  }, [kadry]);

  // Po opuszczeniu strony zwalniamy wszystkie obiekty URL
  useEffect(() => {
    return () => {
      for (const k of kadryRef.current) URL.revokeObjectURL(k.url);
    };
  }, []);

  const zamknijPokaz = useCallback(() => {
    setPokaz(false);
    if (document.fullscreenElement) void document.exitFullscreen();
  }, []);

  const przesun = useCallback((o: number) => {
    setSlajd((i) => {
      const ile = kadryRef.current.length;
      return ile === 0 ? 0 : (i + o + ile) % ile;
    });
  }, []);

  function otworzPokaz() {
    if (kadry.length === 0) return;
    setSlajd(0);
    setGra(true);
    setPokaz(true);
  }

  // Pełny ekran dopiero, gdy nakładka jest już w DOM — w momencie kliknięcia
  // referencja jest jeszcze pusta. Zgoda z kliknięcia obowiązuje kilka sekund,
  // więc wywołanie z efektu wciąż jest traktowane jak gest użytkownika.
  useEffect(() => {
    if (!pokaz) return;
    const el = pokazRef.current;
    if (!el?.requestFullscreen || document.fullscreenElement) return;
    // pełny ekran bywa zablokowany (iOS, zasady przeglądarki) — pokaz działa i bez niego
    void el.requestFullscreen().catch(() => {});
  }, [pokaz]);

  // Klawiatura: strzałki przewijają, spacja pauzuje, Escape zamyka
  useEffect(() => {
    if (!pokaz) return;
    zamknijRef.current?.focus();

    const naKlawisz = (e: KeyboardEvent) => {
      if (e.key === "Escape") zamknijPokaz();
      if (e.key === "ArrowRight") przesun(1);
      if (e.key === "ArrowLeft") przesun(-1);
      if (e.key === " ") {
        e.preventDefault();
        setGra((v) => !v);
      }
    };
    window.addEventListener("keydown", naKlawisz);
    return () => window.removeEventListener("keydown", naKlawisz);
  }, [pokaz, przesun, zamknijPokaz]);

  // Wyjście z pełnego ekranu (np. klawiszem przeglądarki) zamyka też pokaz
  useEffect(() => {
    if (!pokaz) return;
    const naZmiane = () => {
      if (!document.fullscreenElement) setPokaz(false);
    };
    document.addEventListener("fullscreenchange", naZmiane);
    return () => document.removeEventListener("fullscreenchange", naZmiane);
  }, [pokaz]);

  // Automatyczna zmiana slajdu
  useEffect(() => {
    if (!pokaz || !gra || mniejRuchu || kadry.length < 2) return;
    const id = setInterval(() => przesun(1), SLAJD_MS);
    return () => clearInterval(id);
  }, [pokaz, gra, mniejRuchu, kadry.length, przesun]);

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
    // usunięcie ostatniego zdjęcia w trakcie pokazu zamyka pokaz
    if (pokaz && kadry.length <= 1) zamknijPokaz();
  }

  const puste = Math.max(RAMKI - kadry.length, 0);
  // stan może wskazywać na zdjęcie, którego już nie ma — liczymy przy renderze
  const indeks = kadry.length > 0 ? Math.min(slajd, kadry.length - 1) : 0;

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

        <div className="mt-1 flex flex-col items-center gap-3 sm:flex-row">
          <button
            type="button"
            onClick={() => inputRef.current?.click()}
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-ivory transition-colors hover:bg-accent-deep"
          >
            Dodaj zdjęcia
          </button>

          <button
            type="button"
            onClick={otworzPokaz}
            disabled={kadry.length === 0}
            className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-line disabled:hover:text-ink"
          >
            <IconSparkle size={17} />
            Pokaz slajdów
          </button>
        </div>

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

      {/* Pokaz slajdów — to samo, co na weselu leci na ekranie na sali */}
      {pokaz && kadry.length > 0 ? (
        <div
          ref={pokazRef}
          role="dialog"
          aria-modal="true"
          aria-label="Pokaz slajdów albumu gości"
          className="fixed inset-0 z-50 flex flex-col bg-ink"
        >
          <div className="flex items-center justify-between px-5 py-4 text-ivory/70 sm:px-8">
            <span className="text-xs uppercase tracking-[0.24em]">
              Album gości · {indeks + 1} / {kadry.length}
            </span>
            <button
              ref={zamknijRef}
              type="button"
              onClick={zamknijPokaz}
              aria-label="Zamknij pokaz slajdów"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-ivory/25 transition-colors hover:border-ivory hover:text-ivory"
            >
              <svg
                viewBox="0 0 24 24"
                width="17"
                height="17"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
              >
                <path d="m6 6 12 12M18 6 6 18" />
              </svg>
            </button>
          </div>

          {/* min-h-0: bez tego zdjęcie rozpycha kontener i pasek sterowania
              wypada poza ekran */}
          <div className="relative flex min-h-0 flex-1 items-center justify-center px-4 pb-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={kadry[indeks]?.url}
              alt={`Zdjęcie ${indeks + 1} z ${kadry.length}`}
              className="max-h-full max-w-full object-contain"
            />
          </div>

          <div className="flex items-center justify-center gap-4 pb-8 text-ivory">
            <button
              type="button"
              onClick={() => przesun(-1)}
              aria-label="Poprzednie zdjęcie"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-ivory/25 transition-colors hover:border-ivory"
            >
              <svg
                viewBox="0 0 24 24"
                width="18"
                height="18"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m14 6-6 6 6 6" />
              </svg>
            </button>

            {mniejRuchu ? (
              <span className="min-w-40 text-center text-xs uppercase tracking-[0.2em] text-ivory/60">
                Przewijaj strzałkami
              </span>
            ) : (
              <button
                type="button"
                onClick={() => setGra((v) => !v)}
                className="min-w-40 rounded-full border border-ivory/25 px-5 py-3 text-xs uppercase tracking-[0.2em] text-ivory/80 transition-colors hover:border-ivory hover:text-ivory"
              >
                {gra ? "Zatrzymaj" : "Wznów"}
              </button>
            )}

            <button
              type="button"
              onClick={() => przesun(1)}
              aria-label="Następne zdjęcie"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-ivory/25 transition-colors hover:border-ivory"
            >
              <svg
                viewBox="0 0 24 24"
                width="18"
                height="18"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m10 6 6 6-6 6" />
              </svg>
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
