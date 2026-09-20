import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import {
  IconArrow,
  IconCard,
  IconCheckCircle,
  IconEnvelope,
  IconInstagram,
  IconRibbon,
  IconTag,
  IconTiktok,
} from "@/components/icons";
import {
  DEMO_PATH,
  DEMO_WEDDING,
  INSTAGRAM_URL,
  TIKTOK_URL,
  daysUntil,
} from "@/lib/site";

const offer = [
  {
    icon: IconEnvelope,
    title: "Zaproszenia ślubne",
    text: "Indywidualny projekt dopasowany do stylu i klimatu Waszego wesela — od klasyki po nowoczesny minimalizm.",
  },
  {
    icon: IconTag,
    title: "Winietki i menu",
    text: "Spójna papeteria weselnego stołu, dopracowana w każdym detalu typografii i koloru.",
  },
  {
    icon: IconCard,
    title: "RSVP i wkładki",
    text: "Karty potwierdzeń i informacje dla gości utrzymane w jednej, eleganckiej linii graficznej.",
  },
  {
    icon: IconRibbon,
    title: "Detale wykończenia",
    text: "Woskowe pieczęcie, muślinowe i satynowe wstążki, koperty w wybranym kolorze.",
  },
];

const realizacje = [
  {
    img: "/images/post0.jpg",
    eyebrow: "Zaproszenie ślubne",
    title: "Sycylijskie lato",
    text: "Cytryny, błękitne pasy i ręczna kaligrafia — projekt inspirowany słońcem południa Włoch.",
  },
  {
    img: "/images/post1.jpg",
    eyebrow: "Zaproszenie ślubne",
    title: "Klasyka, która nie przemija",
    text: "Stonowana paleta i eleganckie liternictwo dla pary, która ceni ponadczasowy styl.",
  },
  {
    img: "/images/post2.jpg",
    eyebrow: "Zaproszenie ślubne",
    title: "Nowoczesna elegancja",
    text: "Głęboka czerń, delikatna wstążka i minimalistyczna typografia.",
  },
  {
    img: "/images/post3.jpg",
    eyebrow: "Zaproszenie ślubne",
    title: "Delikatność i zieleń",
    text: "Miękkie odcienie i botaniczne detale w duecie z elegancką kopertą.",
  },
  {
    img: "/images/post4.jpg",
    eyebrow: "Winietki i menu",
    title: "Minimalizm przy stole",
    text: "Karta menu z przypiętą winietką — piękne połączenie estetyki i funkcjonalności.",
  },
  {
    img: "/images/post5.jpg",
    eyebrow: "Zaproszenie ślubne",
    title: "Eukaliptus i wosk",
    text: "Muślinowa wstążka, woskowa pieczęć i suszone kwiaty — detale, które zapadają w pamięć.",
  },
];

const proces = [
  {
    n: "01",
    title: "Piszecie do nas",
    text: "Wiadomość na Instagramie lub TikToku wystarczy, by zacząć. Opowiedzcie nam o sobie i wymarzonym klimacie ślubu.",
  },
  {
    n: "02",
    title: "Projektujemy razem",
    text: "Dobieramy kolorystykę, papier i dodatki — tak, by zaproszenie mówiło o Was, nie o gotowym szablonie.",
  },
  {
    n: "03",
    title: "Odbieracie gotowy komplet",
    text: "Papeteria trafia w Wasze ręce dopracowana w każdym detalu, gotowa, by trafić do gości.",
  },
];

const wwwHighlights = [
  "Odliczanie do dnia ślubu i harmonogram godzina po godzinie",
  "RSVP online — potwierdzenia, menu i noclegi spływają do jednej tabeli",
  "Dojazd, parking i nocleg w jednym miejscu, zamiast w dziesięciu wiadomościach",
  "Ten sam papier, ta sama typografia — strona wygląda jak Wasze zaproszenie",
];

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <SiteHeader />

      <main id="top" className="flex-1">
        {/* HERO */}
        <section className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-14 px-6 py-16 sm:px-10 sm:py-24 lg:grid-cols-2 lg:py-28">
          <div className="flex flex-col items-start gap-6">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
              Papeteria ślubna · szyta na miarę
            </span>
            <h1 className="font-display text-5xl font-semibold leading-[1.05] text-ink sm:text-6xl lg:text-[4rem]">
              Więcej niż zaproszenia.
            </h1>
            <p className="max-w-md text-lg leading-relaxed text-ink-soft">
              Projektujemy zaproszenia, winietki, menu i dodatki, w których
              każdy detal — kolor wstążki, faktura papieru, odcisk pieczęci —
              opowiada Waszą historię. A od teraz także strony weselne, które
              wyglądają jak ich przedłużenie.
            </p>
            <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-medium text-ivory transition-colors hover:bg-accent-deep"
              >
                Napisz do nas na Instagramie
                <IconArrow />
              </a>
              <a
                href="#realizacje"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-line px-6 py-3.5 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
              >
                Zobacz realizacje
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] shadow-[0_30px_60px_-25px_rgba(42,36,32,0.35)]">
              <Image
                src="/images/post0.jpg"
                alt="Zaproszenie ślubne w stylu włoskiego lata, z cytrynami i błękitnymi pasami"
                fill
                sizes="(max-width: 1024px) 90vw, 40vw"
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden max-w-[220px] rounded-2xl border border-line bg-ivory px-5 py-4 shadow-lg sm:block">
              <p className="font-display text-base leading-snug text-ink">
                Realizacja
              </p>
            </div>
          </div>
        </section>

        {/* ABOUT STRIP */}
        <section className="border-y border-line bg-ivory-deep">
          <div className="mx-auto max-w-3xl px-6 py-16 text-center sm:px-10">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
              Kim jesteśmy
            </span>
            <p className="mt-5 font-display text-2xl leading-relaxed text-ink sm:text-3xl">
              Dom Zaproszeń to mała pracownia papeterii ślubnej. Każdy projekt
              tworzymy indywidualnie — od pierwszej rozmowy o Waszym ślubie,
              przez dobór kolorystyki i papieru, aż po ostatni detal: pieczęć,
              wstążkę, kopertę.
            </p>
          </div>
        </section>

        {/* OFFER */}
        <section
          id="oferta"
          className="mx-auto max-w-6xl px-6 py-20 sm:px-10 sm:py-28"
        >
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
              Co tworzymy
            </span>
            <h2 className="mt-4 font-display text-4xl font-semibold text-ink sm:text-5xl">
              Papeteria na każdy moment Waszego ślubu
            </h2>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {offer.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="flex flex-col gap-4 rounded-2xl border border-line bg-ivory p-7 transition-shadow hover:shadow-lg"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-accent/10 text-accent">
                    <Icon />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-ink">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-ink-soft">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* REALIZACJE / GALLERY */}
        <section id="realizacje" className="border-y border-line bg-ivory-deep">
          <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10 sm:py-28">
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
                Realizacje
              </span>
              <h2 className="mt-4 font-display text-4xl font-semibold text-ink sm:text-5xl">
                Kilka historii, które już opowiedzieliśmy papierem
              </h2>
            </div>
            <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {realizacje.map((item) => (
                <figure key={item.title} className="flex flex-col gap-4">
                  <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <figcaption>
                    <span className="text-xs font-medium uppercase tracking-[0.15em] text-accent">
                      {item.eyebrow}
                    </span>
                    <p className="mt-1 font-display text-xl font-semibold text-ink">
                      {item.title}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-ink-soft">
                      {item.text}
                    </p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* NOWOŚĆ: STRONY WESELNE */}
        <section
          id="strony-weselne"
          className="mx-auto max-w-6xl px-6 py-20 sm:px-10 sm:py-28"
        >
          <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
            <div className="flex flex-col items-start gap-6">
              <span className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-accent">
                Nowość w ofercie
              </span>
              <h2 className="font-display text-4xl font-semibold leading-tight text-ink sm:text-5xl">
                Strona weselna, która wygląda jak Wasze zaproszenie
              </h2>
              <p className="max-w-md text-base leading-relaxed text-ink-soft">
                Papier robi pierwsze wrażenie, strona odpowiada na wszystko, co
                wydarzy się później. Jeden adres, który goście mają pod ręką
                przez cały rok przygotowań — i RSVP, które spływa do Was samo.
              </p>
              <ul className="flex flex-col gap-3 pt-1">
                {wwwHighlights.map((h) => (
                  <li key={h} className="flex items-start gap-3">
                    <span className="mt-0.5 text-accent">
                      <IconCheckCircle size={18} />
                    </span>
                    <span className="text-sm leading-relaxed text-ink-soft">
                      {h}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-4 pt-3 sm:flex-row sm:items-center">
                <Link
                  href="/strony-weselne"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-medium text-ivory transition-colors hover:bg-accent-deep"
                >
                  Poznaj szczegóły
                  <IconArrow />
                </Link>
                <Link
                  href={DEMO_PATH}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-line px-6 py-3.5 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
                >
                  Zobacz demo na żywo
                </Link>
              </div>
            </div>

            <BrowserPreview />
          </div>
        </section>

        {/* PROCESS */}
        <section
          id="jak-to-dziala"
          className="border-y border-line bg-ivory-deep"
        >
          <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10 sm:py-28">
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
                Jak to wygląda
              </span>
              <h2 className="mt-4 font-display text-4xl font-semibold text-ink sm:text-5xl">
                Od wiadomości do gotowej papeterii
              </h2>
            </div>
            <div className="mt-14 grid grid-cols-1 gap-12 sm:grid-cols-3">
              {proces.map((step) => (
                <div key={step.n} className="flex flex-col gap-3">
                  <span className="font-display text-5xl font-semibold text-accent/25">
                    {step.n}
                  </span>
                  <h3 className="font-display text-xl font-semibold text-ink">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-ink-soft">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="kontakt" className="bg-ink">
          <div className="mx-auto max-w-3xl px-6 py-20 text-center sm:px-10 sm:py-28">
            <h2 className="font-display text-4xl font-semibold text-ivory sm:text-5xl">
              Zaprojektujmy razem Wasze zaproszenia
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-ivory/70">
              Napiszcie do nas w wiadomości prywatnej — odpowiemy i wspólnie
              znajdziemy styl idealny na Wasz dzień.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-medium text-ivory transition-colors hover:bg-accent-deep"
              >
                <IconInstagram />
                Instagram: @domzaproszen.pl
              </a>
              <a
                href={TIKTOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-ivory/25 px-6 py-3.5 text-sm font-medium text-ivory transition-colors hover:border-ivory"
              >
                <IconTiktok />
                TikTok: @domzaproszen.pl
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

/* Statyczna makieta okna przeglądarki z miniaturą strony weselnej */
function BrowserPreview() {
  return (
    <div className="relative">
      <div className="overflow-hidden rounded-[1.5rem] border border-line bg-ivory shadow-[0_30px_60px_-25px_rgba(42,36,32,0.35)]">
        <div className="flex items-center gap-3 border-b border-line bg-ivory-deep px-4 py-3">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
          </div>
          <div className="flex-1 truncate rounded-full bg-ivory px-3 py-1.5 text-center text-[0.7rem] text-ink-soft">
            {DEMO_WEDDING.hostname}
          </div>
        </div>

        <div className="relative aspect-[4/3]">
          <Image
            src="/images/post3.jpg"
            alt=""
            fill
            sizes="(max-width: 1024px) 90vw, 45vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-ink/45" />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-ivory">
            <span className="text-[0.65rem] uppercase tracking-[0.28em] text-ivory/80">
              Pobieramy się
            </span>
            <p className="mt-3 font-display text-4xl font-semibold sm:text-5xl">
              {DEMO_WEDDING.bride} &amp; {DEMO_WEDDING.groom}
            </p>
            <p className="mt-2 text-sm tracking-[0.2em] text-ivory/80">
              {DEMO_WEDDING.dateShort}
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { v: String(daysUntil(DEMO_WEDDING.dateISO)), l: "dni" },
                { v: "04", l: "godz." },
                { v: "38", l: "min" },
              ].map((c) => (
                <div
                  key={c.l}
                  className="w-16 rounded-xl border border-ivory/25 bg-ink/25 py-2 backdrop-blur-sm"
                >
                  <p className="font-display text-xl font-semibold">{c.v}</p>
                  <p className="text-[0.6rem] uppercase tracking-[0.16em] text-ivory/70">
                    {c.l}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 divide-x divide-line border-t border-line text-center">
          {["Harmonogram", "RSVP", "Dojazd"].map((t) => (
            <div key={t} className="px-2 py-4 text-[0.7rem] text-ink-soft">
              {t}
            </div>
          ))}
        </div>
      </div>

      <div className="absolute -bottom-6 -left-4 hidden rounded-2xl border border-line bg-ivory px-5 py-4 shadow-lg sm:block">
        <p className="text-xs uppercase tracking-[0.16em] text-accent">
          Potwierdzenia
        </p>
        <p className="mt-1 font-display text-2xl font-semibold text-ink">
          86 / 104
        </p>
      </div>
    </div>
  );
}
