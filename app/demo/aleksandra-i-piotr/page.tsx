import type { Metadata } from "next";
import { Great_Vibes } from "next/font/google";
import Image from "next/image";
import heroFoto from "@/public/demo/aleksandra-i-piotr/hero.jpg";
import Link from "next/link";
import { Countdown } from "@/components/wedding/countdown";
import { DemoNav } from "@/components/wedding/demo-nav";
import { RsvpForm } from "@/components/wedding/rsvp-form";
import { AlbumGosci } from "@/components/wedding/album-gosci";
import {
  IconArrow,
  IconBed,
  IconCamera,
  IconChevronDown,
  IconGift,
  IconHeart,
  IconMapPin,
  IconSparkle,
} from "@/components/icons";
import QRCode from "qrcode";
import { ALBUM_URL, DEMO_WEDDING, INSTAGRAM_URL } from "@/lib/site";

/** Kaligrafia do imion — ładowana tylko na tej stronie. */
const vibes = Great_Vibes({
  subsets: ["latin", "latin-ext"],
  weight: "400",
});

/** Skrót: kaligrafia + typowe ustawienia optyczne. */
const kaligrafia = `${vibes.className} font-normal`;

const OPIS_DEMO =
  "Przykładowa strona weselna przygotowana przez Dom Zaproszeń: odliczanie, harmonogram, dojazd, noclegi, album gości i formularz RSVP.";

export const metadata: Metadata = {
  title: "Aleksandra & Piotr — 11 lipca 2027 | przykładowa strona weselna",
  description: OPIS_DEMO,
  robots: { index: false, follow: true },
  // Strona nie jest indeksowana, ale link krąży po Instagramie i Messengerze —
  // podgląd ma pokazywać parę, nie nazwę pracowni.
  openGraph: {
    title: "Aleksandra & Piotr — 11 lipca 2027",
    description: OPIS_DEMO,
  },
};

const historia = [
  {
    year: "2019",
    title: "Kolejka po kawę",
    text: "Poznaliśmy się w kolejce po kawę na Kazimierzu. Piotr zamówił dokładnie to samo co Aleksandra i uznał to za znak.",
  },
  {
    year: "2021",
    title: "Pierwsza wspólna podróż",
    text: "Trzy tygodnie i jeden plecak wzdłuż portugalskiego wybrzeża. Wróciliśmy z postanowieniem, że kiedyś tam wrócimy.",
  },
  {
    year: "2024",
    title: "Oświadczyny nad Morskim Okiem",
    text: "O wschodzie słońca, w mgle i z termosem herbaty. Aleksandra powiedziała „tak” zanim Piotr zdążył dokończyć zdanie.",
  },
  {
    year: "2027",
    title: "Nasz dzień",
    text: "Chcemy spędzić go z ludźmi, którzy byli przy nas przez całą tę drogę. Czyli z Wami.",
  },
];

const harmonogram = [
  {
    time: "15:30",
    title: "Zbiórka gości",
    text: "Kościół Św. Piotra i Pawła, ul. Benedyktyńska 37",
  },
  {
    time: "16:00",
    title: "Ceremonia zaślubin",
    text: "Msza z udziałem chóru kameralnego",
  },
  {
    time: "17:30",
    title: "Życzenia i zdjęcia",
    text: "Przed kościołem, a potem przejazd na salę",
  },
  {
    time: "18:30",
    title: "Powitanie i obiad",
    text: "Dworek Pod Lipami, Jerzmanowice",
  },
  {
    time: "20:00",
    title: "Pierwszy taniec",
    text: "I oficjalne otwarcie parkietu",
  },
  {
    time: "23:00",
    title: "Tort i oczepiny",
    text: "Z fajerwerkami w ogrodzie",
  },
  {
    time: "03:00",
    title: "Ostatni taniec",
    text: "Dla tych, którzy wytrwają do końca",
  },
  {
    time: "13:00",
    title: "Poprawiny",
    text: "Nazajutrz, ogród Dworku — grill i leniwe popołudnie",
  },
];

const miejsca = [
  {
    icon: IconHeart,
    eyebrow: "Ceremonia · 16:00",
    title: "Kościół Św. Piotra i Pawła",
    address: "ul. Benedyktyńska 37, Kraków-Tyniec",
    text: "Parking przy opactwie mieści około 40 aut, dodatkowe miejsca znajdziecie przy szkole 200 m dalej.",
    map: "https://maps.google.com/?q=Ko%C5%9Bci%C3%B3%C5%82+%C5%9Aw.+Piotra+i+Paw%C5%82a+Tyniec",
  },
  {
    icon: IconSparkle,
    eyebrow: "Przyjęcie · od 18:30",
    title: "Dworek Pod Lipami",
    address: "Jerzmanowice, 25 km od kościoła",
    text: "Autokar odjeżdża sprzed kościoła o 17:45 i wraca do Krakowa o 1:00 oraz 3:00 w nocy.",
    map: "https://maps.google.com/?q=Dworek+Pod+Lipami+Jerzmanowice",
  },
];

const noclegi = [
  {
    name: "Dworek Pod Lipami",
    detail: "Na miejscu przyjęcia · 18 pokoi",
    note: "Hasło rezerwacji: ALEKSANDRA I PIOTR",
    phone: "+48 600 000 001",
  },
  {
    name: "Hotel Lipowy Zdrój",
    detail: "3 km od sali · śniadanie w cenie",
    note: "Pokoje zablokowane do 30 kwietnia",
    phone: "+48 600 000 002",
  },
  {
    name: "Agroturystyka Pod Dębem",
    detail: "5 km od sali · domki 4-osobowe",
    note: "Dobre dla rodzin z dziećmi",
    phone: "+48 600 000 003",
  },
];

/** Ramki na zdjęcia pary — w demo puste, na gotowej stronie wypełnione sesją. */
const galeria = [
  "Sesja narzeczeńska",
  "Sesja narzeczeńska",
  "Sesja narzeczeńska",
];

const pytania = [
  {
    q: "Do kiedy trzeba potwierdzić obecność?",
    a: "Prosimy o wypełnienie formularza do 30 kwietnia 2027. Później trudno nam będzie dopisać dodatkowe miejsca przy stole.",
  },
  {
    q: "Czy możemy przyjechać z dziećmi?",
    a: "Oczywiście. Zaznaczcie to w formularzu — przygotujemy mniejsze porcje, kąciki do zabawy i osobny pokój do spania na piętrze dworku.",
  },
  {
    q: "Jaki jest dress code?",
    a: "Strój formalny w zieleni, szałwii i naturalnych beżach — tych samych, które znajdziecie na naszych zaproszeniach. Bardzo prosimy o unikanie bieli i odcieni écru. Panie: na trawniku w ogrodzie lepiej sprawdzą się szersze obcasy.",
  },
  {
    q: "Czy będzie autokar?",
    a: "Tak, spod kościoła o 17:45, a nocą powroty do Krakowa o 1:00 i 3:00. Zaznaczcie w RSVP, czy planujecie skorzystać.",
  },
  {
    q: "Gdzie zaparkować?",
    a: "Przy kościele i przy dworku są bezpłatne parkingi. Auto można bezpiecznie zostawić na terenie dworku do popołudnia następnego dnia.",
  },
];

/** Ciemnozielone tło „koperty” z papeterii. */
const koperta =
  "radial-gradient(80% 60% at 50% -5%, rgba(159,180,154,0.26) 0%, rgba(159,180,154,0) 70%), radial-gradient(65% 55% at 88% 105%, rgba(159,180,154,0.2) 0%, rgba(159,180,154,0) 72%), linear-gradient(168deg, #36443c 0%, #2b352e 48%, #222b25 100%)";

/** Listki eukaliptusa: cx, cy, rx, ry, obrót. */
const listki: [number, number, number, number, number][] = [
  [26, 13, 11, 7, -30],
  [45, 31, 10.5, 6.8, 24],
  [66, 11, 11.5, 7.2, -26],
  [87, 29, 10, 6.5, 22],
  [106, 10, 9.5, 6.2, -24],
  [124, 26, 8.5, 5.6, 20],
  [140, 12, 7.5, 5, -22],
];

/** Gałązka eukaliptusa — motyw przeniesiony wprost z zaproszenia. */
function Galazka({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 160 44"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M4 24C42 24 100 20 156 11"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
        opacity="0.6"
      />
      {listki.map(([cx, cy, rx, ry, rot]) => (
        <ellipse
          key={`${cx}-${cy}`}
          cx={cx}
          cy={cy}
          rx={rx}
          ry={ry}
          transform={`rotate(${rot} ${cx} ${cy})`}
          fill="currentColor"
          opacity="0.85"
        />
      ))}
    </svg>
  );
}

/** Listki na pieczęci: cx, cy, obrót. */
const pieczecListki: [number, number, number][] = [
  [11.4, 22, -34],
  [20.6, 19.4, 34],
  [11.8, 16.4, -34],
  [20.2, 13.6, 34],
  [12.4, 11, -30],
  [19.6, 8.6, 30],
];

/** Pieczęć woskowa w kolorze szałwii — jak ta spinająca wstążkę. */
function Pieczec({ size = 74 }: { size?: number }) {
  return (
    <span
      aria-hidden="true"
      className="relative inline-flex shrink-0 items-center justify-center rounded-full"
      style={{
        width: size,
        height: size,
        background:
          "radial-gradient(62% 62% at 34% 28%, #c6d5bf 0%, #a4b89e 46%, #80977a 100%)",
        boxShadow:
          "0 10px 22px -12px rgba(30,40,33,0.75), inset 0 -2px 6px rgba(40,55,44,0.3)",
      }}
    >
      <span className="absolute inset-[7%] rounded-full border border-white/30" />
      <svg
        viewBox="0 0 32 32"
        width={size * 0.56}
        height={size * 0.56}
        fill="none"
        style={{ color: "#eef3ea", opacity: 0.85 }}
      >
        <path
          d="M16 28V7"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
        {pieczecListki.map(([cx, cy, rot]) => (
          <ellipse
            key={`p-${cx}-${cy}`}
            cx={cx}
            cy={cy}
            rx={4.1}
            ry={2.7}
            transform={`rotate(${rot} ${cx} ${cy})`}
            fill="currentColor"
          />
        ))}
        <ellipse cx="16" cy="6.2" rx="2.4" ry="3.1" fill="currentColor" />
      </svg>
    </span>
  );
}

/** Nagłówek sekcji z gałązką — powtarzalny rytm całej strony. */
function Naglowek({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <span className="text-xs font-medium uppercase tracking-[0.24em] text-accent">
        {eyebrow}
      </span>
      <h2 className="mt-4 font-display text-4xl font-semibold text-ink sm:text-5xl">
        {title}
      </h2>
      <Galazka className="mx-auto mt-5 w-28 text-sage" />
      {children}
    </div>
  );
}

export default async function DemoWeddingSite() {
  const { bride, groom, dateISO, dateLabel, dateUpper } = DEMO_WEDDING;

  // Kod QR powstaje przy buildzie z adresu w lib/site.ts, więc nie rozjedzie
  // się z realnym linkiem do albumu.
  const kodQr = (
    await QRCode.toString(ALBUM_URL, {
      type: "svg",
      margin: 0,
      errorCorrectionLevel: "M",
      color: { dark: "#28322c", light: "#0000" },
    })
  )
    // biblioteka zwraca SVG bez wymiarów — bez tego kod renderuje się
    // w domyślnym rozmiarze zamiast wypełnić ramkę tabliczki
    .replace("<svg", '<svg width="100%" height="100%"');

  return (
    <div className="motyw-eukaliptus flex flex-1 flex-col overflow-x-clip bg-ivory text-ink">
      {/* PASEK DEMO */}
      <div className="bg-ink px-6 py-3 text-center text-xs text-ivory/75 sm:px-10">
        <span className="font-medium text-ivory">To strona pokazowa.</span> Tak
        może wyglądać Wasza strona weselna od Domu Zaproszeń.{" "}
        <Link
          href="/strony-weselne"
          className="inline-flex items-center gap-1 font-medium text-sage underline underline-offset-4 transition-colors hover:text-ivory"
        >
          Chcemy taką
          <IconArrow size={13} />
        </Link>
      </div>

      <DemoNav monogram="A & P" />

      <main id="gora" className="flex-1">
        {/* HERO — zdjęcie pary na cały ekran.
            Podmiana kadru = zmiana `src` poniżej; reszta (przyciemnienie,
            ramka, typografia) zostaje bez zmian. */}
        <section className="relative isolate flex min-h-[calc(100svh-4rem)] flex-col overflow-hidden bg-ink">
          <Image
            src={heroFoto}
            alt="Aleksandra i Piotr podczas sesji plenerowej"
            fill
            priority
            placeholder="blur"
            sizes="100vw"
            className="-z-30 object-cover object-[60%_center] sm:object-center"
          />
          {/* Przyciemnienie tylko u góry i u dołu — para w środku kadru
              zostaje czysta, a tekst leży na niebie i na łące */}
          <div className="absolute inset-0 -z-20 bg-ink/25" />
          <div className="absolute inset-0 -z-20 bg-gradient-to-b from-ink/75 via-ink/15 to-ink/75" />
          <div className="absolute inset-0 -z-20 hidden bg-gradient-to-r from-ink/55 via-transparent to-transparent sm:block" />

          <span className="pointer-events-none absolute inset-2 -z-10 rounded-[2px] border border-ivory/20 sm:inset-5" />
          <Galazka className="pointer-events-none absolute -left-12 top-24 -z-10 w-52 rotate-[10deg] text-sage/15 sm:w-80" />
          <Galazka className="pointer-events-none absolute -right-12 bottom-28 -z-10 w-52 rotate-[190deg] text-sage/15 sm:w-80" />

          <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col justify-between px-6 pb-14 pt-10 text-center sm:px-12 sm:pb-16 sm:pt-14 sm:text-left">
            <div className="flex flex-col items-center sm:max-w-xl sm:items-start">
              <span className="rise text-[0.6rem] uppercase tracking-[0.3em] text-ivory/75 sm:text-xs sm:tracking-[0.34em]">
                Pobieramy się
              </span>

              <h1
                className={`${kaligrafia} rise mt-4 text-[clamp(2.6rem,13vw,6rem)] leading-[1.05] text-ivory sm:mt-6`}
              >
                {bride}
                <span className="my-1 block font-display text-2xl font-normal text-sage sm:text-4xl">
                  &amp;
                </span>
                {groom}
              </h1>
            </div>

            <div className="flex flex-col items-center gap-6 sm:max-w-lg sm:items-start sm:gap-7">
              <p className="rise text-[0.6rem] uppercase tracking-[0.26em] text-ivory/85 sm:text-xs sm:tracking-[0.32em]">
                {dateUpper} · Tyniec
              </p>

              <div className="rise w-full max-w-lg">
                <Countdown dateISO={dateISO} />
              </div>

              <a
                href="#rsvp"
                className="inline-flex items-center gap-2 rounded-full border border-sage/50 bg-sage/15 px-6 py-3 text-sm font-medium tracking-[0.06em] text-ivory backdrop-blur-sm transition-colors hover:bg-sage/30 sm:px-7 sm:py-3.5"
              >
                Potwierdź obecność
                <IconArrow />
              </a>
            </div>
          </div>

          <a
            href="#zaproszenie"
            aria-label="Przejdź dalej"
            className="absolute inset-x-0 bottom-5 mx-auto flex w-10 justify-center text-ivory/60 transition-colors hover:text-ivory"
          >
            <IconChevronDown size={24} />
          </a>
        </section>

        {/* ZAPROSZENIE */}
        <section
          id="zaproszenie"
          className="border-b border-line bg-ivory-deep"
        >
          <div className="mx-auto max-w-2xl px-6 py-16 text-center sm:px-10 sm:py-24">
            <span className="text-xs font-medium uppercase tracking-[0.24em] text-accent">
              Zaproszenie
            </span>
            <Galazka className="mx-auto mt-5 w-28 text-sage" />
            <p className="mt-7 font-display text-xl leading-relaxed text-ink sm:text-3xl">
              „Miłość nie polega na tym, by patrzeć na siebie nawzajem, lecz by
              patrzeć razem w tym samym kierunku”.
            </p>

            <p className="mt-6 text-sm leading-relaxed text-ink-soft">
              Zaraz po ceremonii zapraszamy Was na przyjęcie w Dworku Pod Lipami
              w Jerzmanowicach — bawimy się do białego rana, a nazajutrz
              spotykamy się jeszcze na poprawinach.
            </p>
            <p
              className={`${kaligrafia} mt-8 text-[clamp(2.25rem,10vw,3rem)] leading-snug text-accent`}
            >
              {bride}
              <span className="mx-4 font-display text-3xl">&amp;</span>
              {groom}
            </p>
          </div>
        </section>

        {/* NASZA HISTORIA */}
        <section id="historia" className="bg-ivory-deep">
          <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10 sm:py-28">
            <Naglowek eyebrow="O nas" title="Jak się tu znaleźliśmy" />

            <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              {/* Karta z monogramem — miejsce na zdjęcie pary, gdy będzie */}
              <div className="papier relative flex aspect-[4/5] flex-col items-center justify-center overflow-hidden rounded-[3px] bg-ivory p-8 text-center shadow-[0_35px_70px_-40px_rgba(30,40,33,0.6)] sm:p-10">
                <span className="pointer-events-none absolute inset-4 rounded-[2px] border border-line" />
                <Galazka className="pointer-events-none absolute -left-4 top-10 w-24 -rotate-[22deg] text-sage sm:w-32" />
                <Galazka className="pointer-events-none absolute -right-4 bottom-10 w-24 rotate-[158deg] text-sage sm:w-32" />

                <p
                  className={`${kaligrafia} text-[clamp(3.5rem,17vw,7rem)] leading-none text-ink`}
                >
                  {bride.charAt(0)}
                  <span className="mx-3 font-display text-4xl text-accent">
                    &amp;
                  </span>
                  {groom.charAt(0)}
                </p>
                <p className="mt-8 text-[0.7rem] uppercase tracking-[0.3em] text-ink-soft">
                  {dateUpper}
                </p>
                <p className="mt-2 text-[0.7rem] uppercase tracking-[0.3em] text-ink-soft">
                  Tyniec
                </p>
                <div className="mt-8">
                  <Pieczec size={58} />
                </div>
              </div>

              <ol className="relative flex flex-col gap-10 border-l border-line pl-8">
                {historia.map((h) => (
                  <li key={h.year} className="relative">
                    <span className="absolute -left-[2.3rem] top-1.5 flex h-3 w-3 items-center justify-center rounded-full border border-accent bg-ivory">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    </span>
                    <span className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
                      {h.year}
                    </span>
                    <h3 className="mt-1 font-display text-xl font-semibold text-ink">
                      {h.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
                      {h.text}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* HARMONOGRAM */}
        <section
          id="harmonogram"
          className="mx-auto max-w-4xl px-6 py-20 sm:px-10 sm:py-28"
        >
          <Naglowek eyebrow="Plan dnia" title="Godzina po godzinie" />

          <div className="mt-12 divide-y divide-line border-y border-line">
            {harmonogram.map((h) => (
              <div
                key={h.time + h.title}
                className="flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:gap-8"
              >
                <span className="font-display text-2xl font-semibold text-accent sm:w-24 sm:shrink-0">
                  {h.time}
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-ink">
                    {h.title}
                  </h3>
                  <p className="mt-0.5 text-sm leading-relaxed text-ink-soft">
                    {h.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* MIEJSCE */}
        <section id="miejsce" className="border-y border-line bg-ivory-deep">
          <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10 sm:py-28">
            <Naglowek eyebrow="Dojazd" title="Gdzie się spotykamy" />

            <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
              {miejsca.map((m) => {
                const Icon = m.icon;
                return (
                  <div
                    key={m.title}
                    className="papier relative flex flex-col gap-4 rounded-[3px] border border-line bg-ivory p-8 sm:p-10"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-accent/10 text-accent">
                      <Icon />
                    </div>
                    <span className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
                      {m.eyebrow}
                    </span>
                    <h3 className="font-display text-2xl font-semibold text-ink">
                      {m.title}
                    </h3>
                    <p className="text-sm text-ink-soft">{m.address}</p>
                    <p className="text-sm leading-relaxed text-ink-soft">
                      {m.text}
                    </p>
                    <a
                      href={m.map}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex w-fit items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
                    >
                      <IconMapPin size={17} />
                      Otwórz nawigację
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* NOCLEG */}
        <section
          id="nocleg"
          className="mx-auto max-w-6xl px-6 py-20 sm:px-10 sm:py-28"
        >
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <span className="text-xs font-medium uppercase tracking-[0.24em] text-accent">
                Nocleg
              </span>
              <h2 className="mt-4 font-display text-4xl font-semibold text-ink sm:text-5xl">
                Zostańcie na dłużej
              </h2>
              <Galazka className="mt-5 w-28 text-sage" />
              <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink-soft">
                Zarezerwowaliśmy pokoje w trzech miejscach w okolicy. Dzwoniąc,
                podajcie nasze hasło rezerwacji — cena będzie niższa, a pokoje
                trzymamy do 30 kwietnia.
              </p>
            </div>

            <div className="flex flex-col divide-y divide-line border-y border-line">
              {noclegi.map((n) => (
                <div
                  key={n.name}
                  className="flex flex-col gap-2 py-6 sm:flex-row sm:items-center sm:justify-between sm:gap-8"
                >
                  <div className="flex gap-4">
                    <span className="mt-0.5 text-accent">
                      <IconBed size={20} />
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-semibold text-ink">
                        {n.name}
                      </h3>
                      <p className="mt-0.5 text-sm text-ink-soft">{n.detail}</p>
                      <p className="mt-0.5 text-xs uppercase tracking-[0.12em] text-accent">
                        {n.note}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DRESS CODE I PREZENTY */}
        <section className="border-y border-line bg-ivory-deep">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-6 py-20 sm:px-10 sm:py-24 md:grid-cols-2">
            <div className="papier rounded-[3px] border border-line bg-ivory p-8 sm:p-10">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-accent/10 text-accent">
                <IconSparkle />
              </div>
              <h3 className="mt-5 font-display text-2xl font-semibold text-ink">
                Dress code
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                Strój formalny w zieleni, szałwii i naturalnych beżach — tych
                samych, które znajdziecie na naszych zaproszeniach. Bardzo
                prosimy o pozostawienie bieli i écru pannie młodej. Część
                wieczoru spędzimy w ogrodzie — warto pomyśleć o wygodnych butach
                i lekkim okryciu.
              </p>
              <div className="mt-6 flex items-center gap-3">
                {["#f4f2ec", "#cdd8c6", "#9fb49a", "#55654f", "#28322c"].map(
                  (c) => (
                    <span
                      key={c}
                      className="h-7 w-7 rounded-full border border-line sm:h-8 sm:w-8"
                      style={{ background: c }}
                      title={c}
                    />
                  ),
                )}
              </div>
            </div>

            <div className="papier rounded-[3px] border border-line bg-ivory p-8 sm:p-10">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-accent/10 text-accent">
                <IconGift />
              </div>
              <h3 className="mt-5 font-display text-2xl font-semibold text-ink">
                Prezenty
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                Największym prezentem jest dla nas Wasza obecność. Jeśli jednak
                chcecie sprawić nam przyjemność — zamiast kwiatów, które zwiędną
                do poniedziałku, ucieszy nas drobny wkład do skarbonki na podróż
                poślubną do Portugalii.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-ink-soft">
                A jeśli macie ogród i nadmiar sadzonek — przyjmiemy z radością.
                Nasz balkon wciąż czeka.
              </p>
            </div>
          </div>
        </section>

        {/* GALERIA */}
        <section
          id="galeria"
          className="mx-auto max-w-6xl px-6 py-20 sm:px-10 sm:py-28"
        >
          <Naglowek eyebrow="Galeria" title="Zanim powiemy „tak”">
            <p className="mt-5 text-sm leading-relaxed text-ink-soft">
              Tutaj pojawi się nasza sesja narzeczeńska, a zdjęcia z samego
              wesela zbieramy niżej — we wspólnym albumie, do którego dorzucicie
              własne kadry.
            </p>
            <a
              href="#album"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent underline underline-offset-4 transition-colors hover:text-accent-deep"
            >
              Przejdź do albumu gości
              <IconArrow size={15} />
            </a>
          </Naglowek>

          {/* Wszystkie kadry w jednej proporcji — inaczej rzędy się rozjeżdżają */}
          <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-3 lg:gap-6">
            {galeria.map((podpis) => (
              <figure
                key={podpis}
                className="papier relative flex aspect-[4/5] flex-col items-center justify-center gap-3 rounded-[3px] border border-line bg-ivory p-4 text-center sm:p-6"
              >
                <span className="pointer-events-none absolute inset-2.5 rounded-[2px] border border-line sm:inset-3" />
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-accent sm:h-11 sm:w-11">
                  <IconCamera size={18} />
                </span>
                <figcaption className="text-[0.62rem] font-medium uppercase leading-relaxed tracking-[0.14em] text-ink-soft sm:text-[0.7rem] sm:tracking-[0.18em]">
                  {podpis}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* ALBUM GOŚCI — działająca makieta: zdjęcia zostają w przeglądarce */}
        <section id="album" className="border-y border-line bg-ivory-deep">
          <div className="mx-auto max-w-4xl px-6 py-20 sm:px-10 sm:py-28">
            <Naglowek eyebrow="Album gości" title="Wesele Waszymi oczami">
              <p className="mt-5 text-sm leading-relaxed text-ink-soft">
                Na każdym stole stoi tabliczka z kodem QR. Skanujecie,
                wybieracie zdjęcia z telefonu i po chwili są tutaj — razem z
                kadrami reszty gości.
              </p>
            </Naglowek>

            {/* Tabliczka, która na weselu stoi na stole — kod prowadzi
                do tej samej sekcji, więc można go zeskanować z ekranu */}
            <figure className="papier relative mx-auto mt-12 flex w-full max-w-sm flex-col items-center gap-5 rounded-[3px] border border-line bg-ivory px-8 py-10 text-center shadow-[0_35px_70px_-45px_rgba(30,40,33,0.6)]">
              <span className="pointer-events-none absolute inset-2.5 rounded-[2px] border border-line" />
              <Galazka className="pointer-events-none absolute -left-3 top-5 w-20 -rotate-[22deg] text-sage" />

              <span className="text-[0.6rem] uppercase tracking-[0.3em] text-ink-soft">
                Album gości
              </span>

              <div
                className="h-44 w-44"
                dangerouslySetInnerHTML={{ __html: kodQr }}
              />

              <figcaption className="font-display text-xl font-semibold text-ink">
                Zeskanuj i dorzuć swoje zdjęcia
              </figcaption>
              <p className="text-xs leading-relaxed text-ink-soft">
                Aparat w telefonie wystarczy — nie trzeba żadnej aplikacji.
              </p>
            </figure>

            <AlbumGosci />
          </div>
        </section>

        {/* RSVP */}
        <section id="rsvp" className="border-y border-line bg-ivory-deep">
          <div className="mx-auto max-w-2xl px-6 py-20 sm:px-10 sm:py-28">
            <Naglowek eyebrow="RSVP" title="Dajcie znać, czy będziecie">
              <p className="mt-5 text-sm leading-relaxed text-ink-soft">
                Jeden formularz zamiast dziesięciu wiadomości. Wypełnijcie go
                osobno dla każdego zaproszenia.
              </p>
            </Naglowek>

            <div className="mt-12">
              <RsvpForm />
            </div>
          </div>
        </section>

        {/* PYTANIA */}
        <section
          id="pytania"
          className="mx-auto max-w-3xl px-6 py-20 sm:px-10 sm:py-28"
        >
          <Naglowek eyebrow="Dobre pytania" title="Zanim zadzwonicie" />

          <div className="mt-12 divide-y divide-line border-y border-line">
            {pytania.map((p) => (
              <details key={p.q} className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-left font-display text-lg font-semibold text-ink transition-colors hover:text-accent [&::-webkit-details-marker]:hidden">
                  {p.q}
                  <span className="shrink-0 text-accent transition-transform duration-300 group-open:rotate-180">
                    <IconChevronDown />
                  </span>
                </summary>
                <p className="pb-6 text-sm leading-relaxed text-ink-soft">
                  {p.a}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* POŻEGNANIE */}
        <section className="relative isolate overflow-hidden bg-ink">
          <div
            className="absolute inset-0 -z-20"
            style={{ backgroundImage: koperta }}
          />
          <Galazka className="pointer-events-none absolute -left-10 bottom-10 -z-10 w-56 rotate-[10deg] text-sage/20 sm:w-72" />
          <Galazka className="pointer-events-none absolute -right-10 top-10 -z-10 w-56 rotate-[190deg] text-sage/20 sm:w-72" />

          <div className="mx-auto flex max-w-2xl flex-col items-center px-6 py-24 text-center sm:px-10 sm:py-32">
            <Pieczec size={64} />
            <p
              className={`${kaligrafia} mt-8 text-[2.75rem] leading-snug text-ivory sm:text-6xl`}
            >
              {bride}
              <span className="mx-4 font-display text-3xl">&amp;</span>
              {groom}
            </p>
            <p className="mt-6 text-xs uppercase tracking-[0.3em] text-ivory/70">
              Do zobaczenia {dateLabel}
            </p>
          </div>
        </section>
      </main>

      {/* STOPKA DEMO */}
      <footer className="bg-ink">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 border-t border-ivory/10 px-6 py-12 sm:flex-row sm:items-center sm:justify-between sm:px-10">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-ivory/50">
              Strona pokazowa
            </p>
            <p className="mt-2 font-display text-xl font-semibold text-ivory">
              Chcecie taką stronę na swój ślub?
            </p>
            <p className="mt-1 max-w-md text-sm leading-relaxed text-ivory/60">
              Projektujemy ją w stylu Waszej papeterii — z RSVP, harmonogramem i
              własnym adresem.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/strony-weselne"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-sage px-6 py-3 text-center text-sm font-medium text-ink transition-colors hover:bg-sage-deep"
            >
              Zobacz ofertę
              <IconArrow />
            </Link>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-ivory/25 px-6 py-3 text-sm font-medium text-ivory transition-colors hover:border-ivory"
            >
              Napisz do nas
            </a>
          </div>
        </div>
        <div className="mx-auto w-full max-w-6xl px-6 pb-10 text-xs text-ivory/40 sm:px-10">
          Projekt i wykonanie: Dom Zaproszeń · dane w demo są fikcyjne
        </div>
      </footer>
    </div>
  );
}
