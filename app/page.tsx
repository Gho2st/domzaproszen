import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Reveal } from "@/components/reveal";
import {
  SectionHead,
  btnOutline,
  btnOutlineInverse,
  Etykieta,
  btnSolid,
  btnSolidInverse,
  shell,
} from "@/components/ui";
import QRCode from "qrcode";
import {
  ALBUM_URL,
  DEMO_PATH,
  DEMO_WEDDING,
  INSTAGRAM_URL,
  TIKTOK_URL,
  daysUntil,
} from "@/lib/site";

const offer = [
  {
    title: "Zaproszenia ślubne",
    text: "Indywidualny projekt dopasowany do stylu i klimatu Waszego wesela — od klasyki po nowoczesny minimalizm.",
  },
  {
    title: "Winietki i menu",
    text: "Spójna papeteria weselnego stołu, dopracowana w każdym detalu typografii i koloru.",
  },
  {
    title: "RSVP i wkładki",
    text: "Karty potwierdzeń i informacje dla gości utrzymane w jednej, eleganckiej linii graficznej.",
  },
  {
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
    title: "Piszecie do nas",
    text: "Wiadomość na Instagramie lub TikToku wystarczy, by zacząć. Opowiedzcie nam o sobie i wymarzonym klimacie ślubu.",
  },
  {
    title: "Projektujemy razem",
    text: "Dobieramy kolorystykę, papier i dodatki — tak, by zaproszenie mówiło o Was, nie o gotowym szablonie.",
  },
  {
    title: "Odbieracie gotowy komplet",
    text: "Papeteria trafia w Wasze ręce dopracowana w każdym detalu, gotowa, by trafić do gości.",
  },
];

const albumKroki = [
  {
    title: "Tabliczka z QR na każdym stole",
    text: "Drukujemy ją w tej samej oprawie co winietki i menu — stoi przy dekoracji, nie psuje stołu.",
  },
  {
    title: "Gość skanuje telefonem",
    text: "Bez aplikacji, bez zakładania konta. Wybiera zdjęcia z galerii i wysyła jednym tapnięciem.",
  },
  {
    title: "Album rośnie w trakcie wesela",
    text: "Kadry lądują na Waszej stronie od razu — można je puścić na ekranie na sali.",
  },
];

const wwwHighlights = [
  "Odliczanie do dnia ślubu i harmonogram godzina po godzinie",
  "RSVP online — potwierdzenia, menu i noclegi spływają do jednej tabeli",
  "Dojazd, parking i nocleg w jednym miejscu, zamiast w dziesięciu wiadomościach",
  "Ten sam papier, ta sama typografia — strona wygląda jak Wasze zaproszenie",
];

const dane = [
  { label: "Pracownia", value: "Kraków, projekty w całej Polsce" },
  { label: "Papeteria", value: "Zaproszenia, winietki, menu, dodatki" },
  { label: "Realizacja", value: "Zwykle 7–14 dni od akceptacji projektu" },
];

const nr = (i: number) => String(i + 1).padStart(2, "0");

export default async function Home() {
  // ten sam kod co na tabliczce w demo — generowany przy buildzie z lib/site.ts
  const kodQr = (
    await QRCode.toString(ALBUM_URL, {
      type: "svg",
      margin: 0,
      errorCorrectionLevel: "M",
      color: { dark: "#16150f", light: "#0000" },
    })
  ).replace("<svg", '<svg width="100%" height="100%"');

  return (
    <div className="flex flex-1 flex-col">
      <SiteHeader />

      <main id="top" className="flex-1">
        {/* MASTHEAD */}
        <section className={`${shell} pb-16 pt-14 text-center sm:pb-20 sm:pt-20`}>
          <p className="rise label text-accent">
            Pracownia papeterii ślubnej · Kraków
          </p>

          {/* Kursywa w akcencie niesie uwagę — nie sam rozmiar liter */}
          <h1 className="tytul rise mx-auto mt-6 max-w-[14ch] text-balance text-[clamp(2.3rem,6.5vw,4.25rem)] font-semibold leading-[1.02] tracking-[-0.035em]">
            Więcej niż <span className="text-accent">zaproszenia</span>
            <span className="text-accent">.</span>
          </h1>

          <p
            className="rise mx-auto mt-6 max-w-[46ch] text-pretty text-lede text-ink-2"
            style={{ animationDelay: "120ms" }}
          >
            Zaproszenia, winietki, menu i dodatki, w których każdy detal —
            kolor wstążki, faktura papieru, odcisk pieczęci — opowiada Waszą
            historię.
          </p>

          <div
            className="rise mt-8 flex flex-row items-center justify-center gap-3"
            style={{ animationDelay: "200ms" }}
          >
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`${btnSolid} flex-1 sm:flex-none`}
            >
              Napisz do nas
            </a>
            <a
              href="#realizacje"
              className={`${btnOutline} flex-1 sm:flex-none`}
            >
              <Etykieta krotka="Realizacje" pelna="Zobacz realizacje" />
            </a>
          </div>

          {/* Najmocniejszy kadr z portfolio otwiera stronę */}
          <figure
            className="rise mt-12 sm:mt-16"
            style={{ animationDelay: "90ms" }}
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] bg-paper-2 sm:aspect-[16/10] sm:rounded-[2.5rem]">
              <Image
                src="/images/post2.jpg"
                alt="Zaproszenie ślubne w czerni i kremie, z czarną kopertą i wstążką"
                fill
                sizes="(max-width: 1180px) 92vw, 1100px"
                className="object-cover"
                priority
              />
            </div>
            <figcaption className="mt-4 text-sm text-ink-3">
              Realizacja — „Nowoczesna elegancja”
            </figcaption>
          </figure>
        </section>

        {/* OFERTA */}
        <section id="oferta" className={`${shell} py-20 sm:py-28`}>
          <Reveal>
            <SectionHead
              label="Co tworzymy"
              title="Papeteria na każdy moment Waszego ślubu"
              lede="Jeden spójny komplet — od zaproszenia, przez stół, po ostatni detal wykończenia."
            />
          </Reveal>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 sm:gap-6">
            {offer.map((item, i) => (
              <Reveal key={item.title} delay={i * 70}>
                <div className="h-full rounded-[1.5rem] bg-paper-2 p-8 sm:rounded-[2rem] sm:p-10">
                  <h3 className="tytul text-d3 font-semibold">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-[44ch] text-pretty text-ink-2">
                    {item.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* REALIZACJE */}
        <section id="realizacje" className="bg-paper-2 py-20 sm:py-28">
          <div className={shell}>
            <Reveal>
              <SectionHead
                label="Realizacje"
                title="Historie, które opowiedzieliśmy papierem"
              />
            </Reveal>

            <div className="mt-14 grid gap-x-8 gap-y-14 md:grid-cols-2">
              {realizacje.map((r, i) => (
                <Reveal key={r.title} delay={(i % 2) * 80}>
                  <figure className={i % 2 === 1 ? "md:mt-16" : ""}>
                    <div
                      className={`relative overflow-hidden rounded-[1.5rem] bg-paper sm:rounded-[2rem] ${
                        i % 3 === 0 ? "aspect-[4/5]" : "aspect-[5/6]"
                      }`}
                    >
                      <Image
                        src={r.img}
                        alt={r.title}
                        fill
                        sizes="(max-width: 768px) 90vw, 46vw"
                        className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                      />
                    </div>
                    <figcaption className="mt-5">
                      <p className="kicker text-accent">{r.eyebrow}</p>
                      <h3 className="tytul mt-2.5 text-d3 font-semibold">
                        {r.title}
                      </h3>
                      <p className="mt-2 max-w-[46ch] text-pretty text-ink-2">
                        {r.text}
                      </p>
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* STRONY WESELNE */}
        <section id="strony-weselne" className={`${shell} py-20 sm:py-28`}>
          <Reveal>
            <div className="rounded-[1.75rem] bg-ink px-6 py-14 text-paper sm:rounded-[2.5rem] sm:px-12 sm:py-20">
              <SectionHead
                label="Nowość w ofercie"
                title="Strona weselna, która wygląda jak Wasze zaproszenie"
                lede="Jeden adres, który goście mają pod ręką przez cały rok przygotowań — z harmonogramem, dojazdem i RSVP, które spływa do Was samo."
                inverse
              />

              <div className="mx-auto mt-10 flex flex-row items-center justify-center gap-3">
                <Link
                  href="/strony-weselne"
                  className={`${btnSolidInverse} flex-1 sm:flex-none`}
                >
                  <Etykieta krotka="Szczegóły" pelna="Poznaj szczegóły" />
                </Link>
                <Link
                  href={DEMO_PATH}
                  className={`${btnOutlineInverse} flex-1 sm:flex-none`}
                >
                  <Etykieta krotka="Demo" pelna="Zobacz demo" />
                </Link>
              </div>

              <div className="mx-auto mt-14 max-w-3xl">
                <BrowserPreview />
              </div>

              <ul className="mx-auto mt-12 grid max-w-3xl gap-x-10 gap-y-4 sm:grid-cols-2">
                {wwwHighlights.map((h) => (
                  <li key={h} className="flex gap-3 text-pretty text-paper/70">
                    <span aria-hidden="true" className="text-accent">
                      ✦
                    </span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </section>

        {/* ALBUM GOŚCI */}
        <section id="album-gosci" className="bg-paper-2 py-20 sm:py-28">
          <div className={shell}>
            <Reveal>
              <SectionHead
                label="Album gości · w każdym pakiecie"
                title="Zdjęcia, których nigdy byście nie zobaczyli"
                lede="Wasi goście zrobią tego dnia kilkaset zdjęć — i prawie wszystkie utkną w ich telefonach. Album zbiera je w jednym miejscu, jeszcze zanim skończy się wesele."
              />
            </Reveal>

            <div className="mt-14 grid items-center gap-12 lg:grid-cols-[1fr_0.95fr] lg:gap-20">
              <Reveal>
                <ol className="grid gap-5">
                  {albumKroki.map((k, i) => (
                    <li
                      key={k.title}
                      className="rounded-[1.25rem] bg-paper p-7 sm:rounded-[1.5rem] sm:p-8"
                    >
                      <span className="kicker num text-accent">{nr(i)}</span>
                      <h3 className="tytul mt-3 text-d4 font-semibold">
                        {k.title}
                      </h3>
                      <p className="mt-2 max-w-[50ch] text-pretty text-ink-2">
                        {k.text}
                      </p>
                    </li>
                  ))}
                </ol>

                <div className="mt-8 flex flex-row gap-3">
                  <Link
                    href={`${DEMO_PATH}#album`}
                    className={`${btnSolid} flex-1 sm:flex-none`}
                  >
                    <Etykieta krotka="Demo" pelna="Wypróbujcie w demo" />
                  </Link>
                  <Link
                    href="/strony-weselne#album-gosci"
                    className={`${btnOutline} flex-1 sm:flex-none`}
                  >
                    <Etykieta krotka="Zakres" pelna="Co dostajecie" />
                  </Link>
                </div>
              </Reveal>

              <Reveal delay={100}>
                <AlbumPreview kodQr={kodQr} />
              </Reveal>
            </div>
          </div>
        </section>

        {/* JAK PRACUJEMY */}
        <section id="jak-to-dziala" className={`${shell} py-20 sm:py-28`}>
          <Reveal>
            <SectionHead
              label="Jak pracujemy"
              title="Od wiadomości do gotowej papeterii"
            />
          </Reveal>

          <div className="mt-14 grid gap-10 sm:grid-cols-3 sm:gap-8">
            {proces.map((step, i) => (
              <Reveal key={step.title} delay={i * 80}>
                <div className="text-center">
                  <span className="tytul num block text-[1.8rem] leading-none text-accent">
                    {nr(i)}
                  </span>
                  <h3 className="tytul mt-4 text-d3 font-semibold">
                    {step.title}
                  </h3>
                  <p className="mx-auto mt-3 max-w-[36ch] text-pretty text-ink-2">
                    {step.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* DANE PRACOWNI */}
        <section className={`${shell} pb-20 sm:pb-28`}>
          <dl className="grid gap-8 rounded-[1.5rem] bg-paper-2 px-8 py-10 text-center sm:grid-cols-3 sm:rounded-[2rem] sm:px-10">
            {dane.map((d) => (
              <div key={d.label}>
                <dt className="text-sm text-ink-3">{d.label}</dt>
                <dd className="mt-2 text-ink">{d.value}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* KONTAKT */}
        <section id="kontakt" className={`${shell} pb-20 sm:pb-28`}>
          <Reveal>
            <div className="rounded-[1.75rem] bg-ink px-6 py-16 text-center text-paper sm:rounded-[2.5rem] sm:px-12 sm:py-24">
              <h2 className="tytul mx-auto max-w-[18ch] text-balance text-d1">
                Zaprojektujmy razem Wasze zaproszenia
              </h2>
              <p className="mx-auto mt-5 max-w-[44ch] text-pretty text-lede text-paper/70">
                Napiszcie do nas w wiadomości prywatnej — odpowiemy i wspólnie
                znajdziemy styl idealny na Wasz dzień.
              </p>
              <div className="mt-9 flex flex-row items-center justify-center gap-3">
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${btnSolidInverse} flex-1 sm:flex-none`}
                >
                  <Etykieta krotka="Instagram" pelna="@domzaproszen.pl" />
                </a>
                <a
                  href={TIKTOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${btnOutlineInverse} flex-1 sm:flex-none`}
                >
                  TikTok
                </a>
              </div>
            </div>
          </Reveal>
        </section>

      </main>

      <SiteFooter />
    </div>
  );
}

/* Makieta albumu: kadry od gości i tabliczka z kodem QR ze stołu */
function AlbumPreview({ kodQr }: { kodQr: string }) {
  const kadry = [
    "/demo/aleksandra-i-piotr/hero.jpg",
    "/images/post4.jpg",
    "/images/post0.jpg",
  ];

  return (
    <div className="rounded-[1.5rem] bg-paper p-6 sm:rounded-[2rem] sm:p-8">
      <div className="flex items-baseline justify-between gap-4 border-b border-rule pb-4">
        <p className="label text-ink-3">Album gości · na żywo</p>
        <p className="label num text-ink-3">
          {kadry.length * 47} zdjęć
        </p>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-4">
        {kadry.map((src) => (
          <div
            key={src}
            className="relative aspect-[4/5] overflow-hidden rounded-[0.9rem]"
          >
            <Image
              src={src}
              alt=""
              fill
              sizes="(max-width: 1024px) 45vw, 22vw"
              className="object-cover"
            />
          </div>
        ))}

        <div className="flex aspect-[4/5] flex-col items-center justify-center gap-2 rounded-[0.9rem] border border-dashed border-rule px-4 text-center">
          <span className="tytul text-d3 font-semibold text-ink-3">+</span>
          <span className="label text-ink-3">Miejsce na Wasz kadr</span>
        </div>
      </div>

      {/* tabliczka ze stołu */}
      <div className="mt-6 flex items-center gap-5 border-t border-rule pt-5">
        <span
          aria-hidden="true"
          className="h-16 w-16 shrink-0 rounded-[0.75rem] border border-rule p-2"
          dangerouslySetInnerHTML={{ __html: kodQr }}
        />
        <div>
          <p className="label text-accent">Tabliczka na stole</p>
          <p className="tytul mt-1.5 text-d4 font-semibold">
            Skanuj i dorzuć swoje zdjęcia
          </p>
        </div>
      </div>
    </div>
  );
}

/* Statyczna makieta okna przeglądarki z miniaturą strony weselnej */
function BrowserPreview() {
  return (
    <div className="overflow-hidden rounded-[1.25rem] bg-paper shadow-[0_30px_60px_-30px_rgba(0,0,0,0.5)] sm:rounded-[1.5rem]">
      <div className="flex items-center gap-3 border-b border-rule px-4 py-3">
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="h-2 w-2 rounded-full bg-ink/15" />
          <span className="h-2 w-2 rounded-full bg-ink/15" />
          <span className="h-2 w-2 rounded-full bg-ink/15" />
        </span>
        <span className="num flex-1 truncate rounded-full bg-paper-2 px-3 py-1.5 text-center text-xs text-ink-3">
          {DEMO_WEDDING.hostname}
        </span>
      </div>

      <div className="relative aspect-[4/3]">
        <Image
          src="/images/post3.jpg"
          alt="Podgląd przykładowej strony weselnej"
          fill
          sizes="(max-width: 1024px) 90vw, 45vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-ink/55" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-paper">
          <span className="label text-paper/75">Pobieramy się</span>
          <p className="tytul mt-4 text-d2 font-semibold">
            {DEMO_WEDDING.bride}
            <em className="mx-2 font-normal">&amp;</em>
            {DEMO_WEDDING.groom}
          </p>
          <p className="num mt-3 text-sm tracking-[0.2em] text-paper/80">
            {DEMO_WEDDING.dateShort}
          </p>

          <div className="mt-8 flex divide-x divide-paper/25 border-y border-paper/25">
            {[
              { v: String(daysUntil(DEMO_WEDDING.dateISO)), l: "dni" },
              { v: "04", l: "godz." },
              { v: "38", l: "min" },
            ].map((c) => (
              <div key={c.l} className="px-5 py-3">
                <p className="tytul num text-d4 font-semibold">{c.v}</p>
                <p className="label mt-1 text-paper/70">{c.l}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 divide-x divide-rule border-t border-rule text-center">
        {["Harmonogram", "RSVP", "Album gości"].map((t) => (
          <div key={t} className="px-2 py-3.5 text-xs text-ink-3">
            {t}
          </div>
        ))}
      </div>
    </div>
  );
}
