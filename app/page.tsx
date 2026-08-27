import Image from "next/image";

const INSTAGRAM_URL = "https://www.instagram.com/domzaproszen.pl/";
const TIKTOK_URL = "https://www.tiktok.com/@domzaproszen.pl";

function IconEnvelope() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="5" width="18" height="14" rx="1.5" />
      <path d="M3.5 6.5 12 13l8.5-6.5" />
    </svg>
  );
}

function IconTag() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3H5a2 2 0 0 0-2 2v7l9.5 9.5a2 2 0 0 0 2.8 0l6.2-6.2a2 2 0 0 0 0-2.8L12 3Z" />
      <circle cx="8" cy="8" r="1.3" />
    </svg>
  );
}

function IconCard() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="4.5" width="18" height="15" rx="1.5" />
      <path d="M7 9.5h6M7 13h4" />
      <path d="M14.5 15.5 16.3 17.3 20 13.5" />
    </svg>
  );
}

function IconRibbon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 12c-2-3-6-4-8-2s0 6 3 6 4-2 5-4Z" />
      <path d="M12 12c2-3 6-4 8-2s0 6-3 6-4-2-5-4Z" />
      <circle cx="12" cy="12" r="1.3" fill="currentColor" stroke="none" />
    </svg>
  );
}

function IconArrow() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function IconInstagram() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

function IconTiktok() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 4v10.5a3.5 3.5 0 1 1-3-3.46" />
      <path d="M14 4c.7 2.2 2.4 3.7 4.6 4" />
    </svg>
  );
}

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

const navLinks = [
  { href: "#oferta", label: "Oferta" },
  { href: "#realizacje", label: "Realizacje" },
  { href: "#jak-to-dziala", label: "Jak to działa" },
];

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      {/* NAV */}
      <header className="sticky top-0 z-40 border-b border-line/70 bg-ivory/90 backdrop-blur">
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between gap-6 px-6 py-4 sm:px-10">
          <a
            href="#top"
            className="font-display text-xl font-semibold tracking-wide text-ink"
          >
            Dom Zaproszeń
          </a>
          <div className="hidden items-center gap-8 text-sm text-ink-soft md:flex">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="transition-colors hover:text-accent"
              >
                {l.label}
              </a>
            ))}
          </div>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-medium text-ivory transition-colors hover:bg-accent-deep sm:px-5"
          >
            <IconInstagram />
            <span className="hidden sm:inline">Napisz na Instagramie</span>
            <span className="sm:hidden">DM</span>
          </a>
        </nav>
      </header>

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
              opowiada Waszą historię.
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

        {/* PROCESS */}
        <section
          id="jak-to-dziala"
          className="mx-auto max-w-6xl px-6 py-20 sm:px-10 sm:py-28"
        >
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

      {/* FOOTER */}
      <footer className="bg-ink">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 border-t border-ivory/10 px-6 py-12 sm:flex-row sm:items-center sm:justify-between sm:px-10">
          <div>
            <p className="font-display text-lg font-semibold text-ivory">
              Dom Zaproszeń
            </p>
            <p className="mt-1 text-sm text-ivory/60">
              Więcej niż zaproszenia — papeteria i dodatki na wyjątkowe okazje.
            </p>
          </div>
          <div className="flex items-center gap-5">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Dom Zaproszeń"
              className="text-ivory/70 transition-colors hover:text-ivory"
            >
              <IconInstagram />
            </a>
            <a
              href={TIKTOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok Dom Zaproszeń"
              className="text-ivory/70 transition-colors hover:text-ivory"
            >
              <IconTiktok />
            </a>
          </div>
          <p className="text-xs text-ivory/40">
            © {new Date().getFullYear()} Dom Zaproszeń
          </p>
        </div>
      </footer>
    </div>
  );
}
