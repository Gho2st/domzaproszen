import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import {
  SectionHead,
  btnOutline,
  btnOutlineInverse,
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

const uslugi = [
  "Zaproszenia ślubne",
  "Winietki i menu",
  "Karty RSVP",
  "Pieczęcie woskowe",
  "Koperty i wstążki",
  "Strony weselne",
  "Album gości",
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
        <section className="border-b border-rule">
          <div className={`${shell} pb-14 pt-10 sm:pb-16 sm:pt-14`}>
            <div className="grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
              <div>
                <p className="rise label text-accent">
                  Pracownia papeterii ślubnej · Kraków
                </p>

                {/* Kursywa w akcencie niesie uwagę — nie sam rozmiar liter */}
                <h1 className="display rise mt-7 text-[clamp(2.3rem,6.5vw,4.25rem)] font-semibold leading-[0.95] tracking-[-0.03em]">
                  Więcej niż
                  <br />
                  <em className="text-accent">zaproszenia</em>
                  <span className="text-accent">.</span>
                </h1>

                <p
                  className="rise mt-8 max-w-[50ch] text-pretty text-lede text-ink-2"
                  style={{ animationDelay: "120ms" }}
                >
                  Projektujemy zaproszenia, winietki, menu i dodatki, w których
                  każdy detal — kolor wstążki, faktura papieru, odcisk pieczęci
                  — opowiada Waszą historię. A od teraz także strony weselne,
                  które wyglądają jak ich przedłużenie.
                </p>

                <div
                  className="rise mt-9 flex flex-col gap-3 sm:flex-row"
                  style={{ animationDelay: "200ms" }}
                >
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={btnSolid}
                  >
                    Napisz do nas
                  </a>
                  <a href="#realizacje" className={btnOutline}>
                    Zobacz realizacje
                  </a>
                </div>
              </div>

              {/* Najmocniejszy kadr z portfolio otwiera stronę */}
              <figure
                className="rise relative"
                style={{ animationDelay: "90ms" }}
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-paper-2 sm:aspect-[5/5] lg:aspect-[4/5]">
                  <Image
                    src="/images/post2.jpg"
                    alt="Zaproszenie ślubne w czerni i kremie, z czarną kopertą i wstążką"
                    fill
                    sizes="(max-width: 1024px) 92vw, 44vw"
                    className="object-cover"
                    priority
                  />
                </div>
                <figcaption className="mt-4 flex items-baseline justify-between gap-4 border-t border-rule pt-3">
                  <span className="label text-accent">Realizacja</span>
                  <span className="text-sm text-ink-2">
                    Nowoczesna elegancja
                  </span>
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* PASEK Z USŁUGAMI */}
        <section
          aria-label="Co robimy"
          className="overflow-hidden border-b border-rule bg-ink py-3.5 text-paper"
        >
          <div className="ticker-track">
            {[0, 1, 2].map((kopia) => (
              <div
                key={kopia}
                aria-hidden={kopia > 0}
                className="flex shrink-0"
              >
                {uslugi.map((u) => (
                  <span
                    key={u}
                    className="label flex items-center gap-10 whitespace-nowrap px-5 text-paper/80"
                  >
                    {u}
                    <span aria-hidden="true" className="text-accent">
                      ✦
                    </span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </section>

        {/* TRYPTYK NA CAŁĄ SZEROKOŚĆ */}
        <section className="border-b border-rule">
          <div className="grid sm:grid-cols-3">
            {realizacje.slice(0, 3).map((r, i) => (
              <figure
                key={r.img}
                className="relative border-b border-rule last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-paper-2 sm:aspect-[3/4]">
                  <Image
                    src={r.img}
                    alt={r.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                  />
                </div>
                <figcaption className="flex items-baseline gap-4 px-5 py-4 sm:px-6">
                  <span className="label num text-ink-3">{nr(i)}</span>
                  <span className="text-sm text-ink-2">{r.title}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* DANE PRACOWNI */}
        <section className={`${shell} py-10`}>
          <dl className="grid gap-x-10 gap-y-6 sm:grid-cols-3">
            {dane.map((d) => (
              <div key={d.label}>
                <dt className="label text-ink-3">{d.label}</dt>
                <dd className="mt-1.5 text-ink">{d.value}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* MANIFEST */}
        <section className="border-y border-rule bg-paper-2">
          <div className={`${shell} py-16 sm:py-20`}>
            <div className="grid gap-10 md:grid-cols-[auto_1fr] md:gap-16">
              <p className="label text-ink-3 md:pt-3">Kim jesteśmy</p>
              <p className="display max-w-[40ch] text-balance text-d2 font-semibold">
                Dom Zaproszeń to mała pracownia papeterii ślubnej. Każdy projekt
                tworzymy <em className="text-accent">indywidualnie</em> — od
                pierwszej rozmowy, przez dobór papieru, aż po ostatni detal.
              </p>
            </div>
          </div>
        </section>

        {/* OFERTA */}
        <section id="oferta" className={`${shell} py-16 sm:py-24`}>
          <SectionHead
            index="01"
            label="Co tworzymy"
            title="Papeteria na każdy moment Waszego ślubu"
          />

          <ol className="mt-12 border-t border-rule">
            {offer.map((item, i) => (
              <li key={item.title} className="border-b border-rule">
                <div className="grid gap-x-10 gap-y-3 py-8 md:grid-cols-[auto_minmax(0,20ch)_1fr] md:items-baseline">
                  <span className="label num text-ink-3">{nr(i)}</span>
                  <h3 className="display text-d3 font-semibold">
                    {item.title}
                  </h3>
                  <p className="max-w-[62ch] text-pretty text-ink-2">
                    {item.text}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* REALIZACJE */}
        <section
          id="realizacje"
          className="border-y border-rule bg-paper-2 py-16 sm:py-24"
        >
          <div className={shell}>
            <SectionHead
              index="02"
              label="Realizacje"
              title="Historie, które opowiedzieliśmy papierem"
            />

            <div className="mt-14 grid gap-x-10 gap-y-16 md:grid-cols-2">
              {realizacje.map((r, i) => (
                <figure key={r.title} className={i % 2 === 1 ? "md:mt-24" : ""}>
                  <div
                    className={`relative overflow-hidden bg-paper ${
                      i % 3 === 0 ? "aspect-[4/5]" : "aspect-[5/6]"
                    }`}
                  >
                    <Image
                      src={r.img}
                      alt={r.title}
                      fill
                      sizes="(max-width: 768px) 90vw, 46vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="mt-5 flex gap-6 border-t border-rule pt-4">
                    <span className="label num shrink-0 text-ink-3">
                      {nr(i)}
                    </span>
                    <div>
                      <p className="label text-accent">{r.eyebrow}</p>
                      <h3 className="display mt-2.5 text-d3 font-semibold">
                        {r.title}
                      </h3>
                      <p className="mt-2 max-w-[48ch] text-pretty text-ink-2">
                        {r.text}
                      </p>
                    </div>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* STRONY WESELNE */}
        <section id="strony-weselne" className="bg-ink py-20 text-paper sm:py-28">
          <div className={shell}>
            <div className="grid items-start gap-14 lg:grid-cols-2 lg:gap-20">
              <div>
                <SectionHead
                  index="03"
                  label="Nowość w ofercie"
                  title="Strona weselna, która wygląda jak Wasze zaproszenie"
                  lede="Papier robi pierwsze wrażenie, strona odpowiada na wszystko, co wydarzy się później. Jeden adres, który goście mają pod ręką przez cały rok przygotowań — i RSVP, które spływa do Was samo."
                  inverse
                />

                <ul className="mt-10 border-t border-paper/15">
                  {wwwHighlights.map((h) => (
                    <li
                      key={h}
                      className="border-b border-paper/15 py-4 text-pretty text-paper/75"
                    >
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                  <Link href="/strony-weselne" className={btnSolidInverse}>
                    Poznaj szczegóły
                  </Link>
                  <Link href={DEMO_PATH} className={btnOutlineInverse}>
                    Zobacz demo na żywo
                  </Link>
                </div>
              </div>

              <BrowserPreview />
            </div>
          </div>
        </section>

        {/* ALBUM GOŚCI */}
        <section id="album-gosci" className={`${shell} py-16 sm:py-24`}>
          <div className="grid items-start gap-14 lg:grid-cols-[1fr_0.95fr] lg:gap-20">
            <div>
              <SectionHead
                index="04"
                label="Album gości · w każdym pakiecie"
                title="Zdjęcia, których nigdy byście nie zobaczyli"
                lede="Wasi goście zrobią tego dnia kilkaset zdjęć — i prawie wszystkie utkną w ich telefonach. Album zbiera je w jednym miejscu, jeszcze zanim skończy się wesele."
              />

              <ol className="mt-10 border-t border-rule">
                {albumKroki.map((k, i) => (
                  <li key={k.title} className="border-b border-rule py-6">
                    <div className="flex gap-6">
                      <span className="label num shrink-0 text-ink-3">
                        {nr(i)}
                      </span>
                      <div>
                        <h3 className="display text-d4 font-semibold">
                          {k.title}
                        </h3>
                        <p className="mt-2 max-w-[52ch] text-pretty text-ink-2">
                          {k.text}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ol>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Link href={`${DEMO_PATH}#album`} className={btnSolid}>
                  Wypróbujcie album w demo
                </Link>
                <Link href="/strony-weselne#album-gosci" className={btnOutline}>
                  Co dostajecie
                </Link>
              </div>
            </div>

            <AlbumPreview kodQr={kodQr} />
          </div>
        </section>

        {/* JAK PRACUJEMY */}
        <section
          id="jak-to-dziala"
          className="border-y border-rule bg-paper-2 py-16 sm:py-24"
        >
          <div className={shell}>
            <SectionHead
              index="05"
              label="Jak pracujemy"
              title="Od wiadomości do gotowej papeterii"
            />

            <div className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-3">
              {proces.map((step, i) => (
                <div
                  key={step.title}
                  className="border-t border-rule pt-6 sm:border-t-0 sm:border-l sm:pl-8 sm:pt-0 sm:first:border-l-0 sm:first:pl-0"
                >
                  <span className="display num block text-[1.8rem] font-semibold leading-none text-accent">
                    {nr(i)}
                  </span>
                  <h3 className="display mt-5 text-d3 font-semibold">
                    {step.title}
                  </h3>
                  <p className="mt-3 max-w-[40ch] text-pretty text-ink-2">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* KONTAKT */}
        <section id="kontakt" className="bg-ink py-20 text-paper sm:py-28">
          <div className={shell}>
            <div className="grid gap-12 md:grid-cols-[1.3fr_1fr] md:gap-20">
              <div>
                <p className="label text-paper/60">Kontakt</p>
                <h2 className="display mt-8 max-w-[22ch] text-balance text-d1 font-semibold">
                  Zaprojektujmy razem Wasze zaproszenia
                </h2>
              </div>
              <div className="self-end">
                <p className="max-w-[46ch] text-pretty text-lede text-paper/70">
                  Napiszcie do nas w wiadomości prywatnej — odpowiemy i wspólnie
                  znajdziemy styl idealny na Wasz dzień.
                </p>
                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={btnSolidInverse}
                  >
                    @domzaproszen.pl
                  </a>
                  <a
                    href={TIKTOK_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={btnOutlineInverse}
                  >
                    TikTok
                  </a>
                </div>
              </div>
            </div>
          </div>
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
    <div className="border border-rule bg-paper-2 p-5 sm:p-7">
      <div className="flex items-baseline justify-between gap-4 border-b border-rule pb-4">
        <p className="label text-ink-3">Album gości · na żywo</p>
        <p className="label num text-ink-3">
          {kadry.length * 47} zdjęć
        </p>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-4">
        {kadry.map((src) => (
          <div key={src} className="relative aspect-[4/5] overflow-hidden">
            <Image
              src={src}
              alt=""
              fill
              sizes="(max-width: 1024px) 45vw, 22vw"
              className="object-cover"
            />
          </div>
        ))}

        <div className="flex aspect-[4/5] flex-col items-center justify-center gap-2 border border-dashed border-rule px-4 text-center">
          <span className="display text-d3 font-semibold text-ink-3">+</span>
          <span className="label text-ink-3">Miejsce na Wasz kadr</span>
        </div>
      </div>

      {/* tabliczka ze stołu */}
      <div className="mt-6 flex items-center gap-5 border-t border-rule pt-5">
        <span
          aria-hidden="true"
          className="h-16 w-16 shrink-0 border border-rule p-1.5"
          dangerouslySetInnerHTML={{ __html: kodQr }}
        />
        <div>
          <p className="label text-accent">Tabliczka na stole</p>
          <p className="display mt-1.5 text-d4 font-semibold">
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
    <div className="border border-paper/20 bg-paper">
      <div className="flex items-center gap-3 border-b border-rule px-4 py-3">
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="h-2 w-2 rounded-full bg-ink/15" />
          <span className="h-2 w-2 rounded-full bg-ink/15" />
          <span className="h-2 w-2 rounded-full bg-ink/15" />
        </span>
        <span className="num flex-1 truncate border border-rule px-3 py-1.5 text-center text-xs text-ink-3">
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
          <p className="display mt-4 text-d2 font-semibold">
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
                <p className="display num text-d4 font-semibold">{c.v}</p>
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
