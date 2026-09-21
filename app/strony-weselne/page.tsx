import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import {
  IconArrow,
  IconBed,
  IconCamera,
  IconCheckCircle,
  IconChevronDown,
  IconClock,
  IconEnvelope,
  IconGift,
  IconGlobe,
  IconInstagram,
  IconMapPin,
  IconPhone,
  IconQr,
  IconSparkle,
  IconUsers,
} from "@/components/icons";
import { DEMO_PATH, DEMO_WEDDING, INSTAGRAM_URL, daysUntil } from "@/lib/site";

export const metadata: Metadata = {
  title: "Strony weselne | Dom Zaproszeń",
  description:
    "Indywidualne strony weselne z RSVP online, harmonogramem, mapą dojazdu i galerią — zaprojektowane w tym samym stylu co Wasze zaproszenia.",
};

const powody = [
  {
    icon: IconPhone,
    title: "Koniec z tłumaczeniem po raz setny",
    text: "Godzina błogosławieństwa, adres sali, parking, nocleg — goście sprawdzają sami, o każdej porze, zamiast pisać do Was o 23:00.",
  },
  {
    icon: IconCheckCircle,
    title: "RSVP, które zbiera się samo",
    text: "Potwierdzenia, wybór menu, diety, nocleg i transport spływają do jednej tabeli. Widzicie na bieżąco, kto się odezwał.",
  },
  {
    icon: IconSparkle,
    title: "Spójność z papeterią",
    text: "Te same kolory, ta sama typografia, te same detale co na zaproszeniu. Strona jest przedłużeniem projektu, nie osobnym bytem.",
  },
];

const funkcje = [
  {
    icon: IconClock,
    title: "Odliczanie i harmonogram",
    text: "Licznik do dnia ślubu oraz oś czasu: ceremonia, obiad, pierwszy taniec, oczepiny, poprawiny.",
  },
  {
    icon: IconCheckCircle,
    title: "Formularz RSVP",
    text: "Imiona, liczba osób, dzieci, menu, dieta, nocleg, transport — pytamy dokładnie o to, co potrzebne.",
  },
  {
    icon: IconUsers,
    title: "Lista gości dla Was",
    text: "Odpowiedzi w arkuszu gotowym do sortowania, plus powiadomienie mailem przy każdym nowym potwierdzeniu.",
  },
  {
    icon: IconMapPin,
    title: "Dojazd i mapa",
    text: "Kościół, sala, parking — z linkiem do nawigacji jednym tapnięciem i wskazówkami dla gości spoza miasta.",
  },
  {
    icon: IconBed,
    title: "Noclegi w okolicy",
    text: "Lista hoteli i pensjonatów z kontaktem oraz hasłem do rezerwacji przy Waszej rezerwacji grupowej.",
  },
  {
    icon: IconGift,
    title: "Prezenty i dress code",
    text: "Delikatnie sformułowane informacje o prezentach, kolorystyce i stylu ubioru — bez niezręczności.",
  },
  {
    icon: IconCamera,
    title: "Galeria i album gości",
    text: "Sesja narzeczeńska przed ślubem, a w dniu wesela wspólny album: goście skanują kod QR ze stołu i wrzucają swoje kadry prosto z telefonu.",
  },
  {
    icon: IconGlobe,
    title: "Własny adres",
    text: "aleksandra-i-piotr.domzaproszen.pl albo Wasza własna domena. Hosting i certyfikat na rok w cenie.",
  },
  {
    icon: IconQr,
    title: "Kod QR na zaproszenie",
    text: "Drukujemy go na wkładce lub zaproszeniu — gość skanuje telefonem i od razu jest na stronie.",
  },
];

const album = [
  {
    n: "01",
    icon: IconQr,
    title: "Kod QR staje na stołach",
    text: "Drukujemy go na tabliczce, winietce albo menu — w tej samej oprawie co reszta papeterii, więc nie psuje dekoracji stołu.",
  },
  {
    n: "02",
    icon: IconPhone,
    title: "Gość skanuje i wrzuca",
    text: "Bez aplikacji i bez zakładania konta. Telefon otwiera stronę, gość wybiera zdjęcia z galerii i po chwili są u Was.",
  },
  {
    n: "03",
    icon: IconCamera,
    title: "Album rośnie na żywo",
    text: "Kadry lądują w galerii na Waszej stronie — jeszcze w trakcie wesela możecie puścić je na ekranie na sali.",
  },
];

const albumKorzysci = [
  "Zdjęcia z perspektywy gości: stoły, parkiet, kadry, których fotograf nie widział",
  "Wszystko w jednym miejscu, zamiast w kilkunastu wątkach na WhatsAppie",
  "Pobranie całego albumu jednym kliknięciem, w oryginalnej jakości",
  "Podgląd przed publikacją — nietrafione kadry ukrywacie jednym kliknięciem",
  "Album zostaje na stronie jako pamiątka przez rok po weselu",
];

const pakiety = [
  {
    name: "Wizytówka",
    price: "od 499 zł",
    tagline: "Najważniejsze informacje w jednym miejscu.",
    features: [
      "Strona jednoekranowa (one page)",
      "Odliczanie do dnia ślubu",
      "Harmonogram i miejsce z mapą",
      "Dress code i informacje dla gości",
      "Album gości — zdjęcia zbierane przez kod QR",
      "Adres w domenie domzaproszen.pl",
      "Hosting i certyfikat SSL na rok",
    ],
    cta: "Zapytaj o wycenę",
    featured: false,
  },
  {
    name: "Komplet z RSVP",
    price: "od 899 zł",
    tagline: "Najczęściej wybierany — strona plus zbieranie potwierdzeń.",
    features: [
      "Wszystko z pakietu Wizytówka",
      "Formularz RSVP z wyborem menu i diety",
      "Pytania o nocleg i transport",
      "Lista gości w arkuszu + powiadomienia mailem",
      "Galeria zdjęć (do 30 fotografii)",
      "Sekcja FAQ i noclegi w okolicy",
      "Kod QR dopasowany do papeterii",
      "Tabliczki z QR do albumu na każdy stół",
    ],
    cta: "Zapytaj o wycenę",
    featured: true,
  },
  {
    name: "Premium",
    price: "od 1 299 zł",
    tagline: "Dla par, które chcą czegoś zupełnie własnego.",
    features: [
      "Wszystko z pakietu Komplet z RSVP",
      "Własna domena (np. aleksandraipiotr.pl)",
      "Indywidualne ilustracje i animacje",
      "Wersja dwujęzyczna PL / EN",
      "Nasza historia i strefa gości weselnych",
      "Album gości aktywny rok po weselu",
      "Opieka nad stroną do roku po weselu",
    ],
    cta: "Zapytaj o wycenę",
    featured: false,
  },
];

const kroki = [
  {
    n: "01",
    title: "Rozmowa i brief",
    text: "Opowiadacie o ślubie, terminie i tym, co goście muszą wiedzieć. Podpowiadamy, co warto umieścić na stronie.",
  },
  {
    n: "02",
    title: "Projekt i treści",
    text: "Dostajecie prosty formularz do uzupełnienia treści, a my przygotowujemy projekt w stylu Waszej papeterii.",
  },
  {
    n: "03",
    title: "Podgląd i poprawki",
    text: "Oglądacie stronę na żywo pod prywatnym linkiem. Dwie rundy poprawek są w cenie każdego pakietu.",
  },
  {
    n: "04",
    title: "Publikacja i QR",
    text: "Strona rusza pod Waszym adresem, a kod QR trafia na zaproszenia lub wkładki drukowane u nas.",
  },
];

const faq = [
  {
    q: "Ile czasu zajmuje przygotowanie strony?",
    a: "Zwykle 7–14 dni roboczych od momentu, w którym dostaniemy od Was komplet treści i zdjęć. Przy pakiecie Premium warto zarezerwować około trzech tygodni.",
  },
  {
    q: "Czy możemy sami edytować treść po publikacji?",
    a: "Tak. Drobne zmiany — godzina, adres, dopisanie informacji — wprowadzamy dla Was w ramach opieki nad stroną. Jeśli wolicie robić to samodzielnie, przygotujemy prosty panel do edycji tekstów.",
  },
  {
    q: "Co się dzieje z odpowiedziami z RSVP?",
    a: "Trafiają do arkusza, który udostępniamy Wam do podglądu, i na maila po każdym nowym potwierdzeniu. Dane gości są wyłącznie Wasze — nie wykorzystujemy ich do niczego innego i usuwamy je po weselu na Wasze życzenie.",
  },
  {
    q: "Czy strona działa dobrze na telefonie?",
    a: "Projektujemy ją najpierw pod telefon, bo tak otworzy ją zdecydowana większość gości. Na komputerze i tablecie wygląda równie dobrze.",
  },
  {
    q: "Czy musimy zamawiać u Was papeterię?",
    a: "Nie, stronę robimy również bez zaproszeń. Gdy jednak zamawiacie oba, dopasowujemy projekt jeden do jednego i przygotowujemy kod QR wkomponowany w papeterię.",
  },
  {
    q: "Jak długo strona jest dostępna?",
    a: "Rok od publikacji jest w cenie. Później możecie ją przedłużyć albo poprosić o archiwalną wersję z galerią zdjęć na pamiątkę.",
  },
];

export default function StronyWeselne() {
  return (
    <div className="flex flex-1 flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* HERO */}
        <section className="relative overflow-hidden">
          <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-14 px-6 py-16 sm:px-10 sm:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
            <div className="flex flex-col items-start gap-6 rise">
              <span className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-accent">
                <IconSparkle size={14} />
                Nowość w Domu Zaproszeń
              </span>
              <h1 className="font-display text-5xl font-semibold leading-[1.05] text-ink sm:text-6xl">
                Wasze wesele
                <br />
                pod jednym adresem.
              </h1>
              <p className="max-w-lg text-lg leading-relaxed text-ink-soft">
                Strona weselna to miejsce, w którym goście znajdą wszystko:
                godziny, dojazd, nocleg, dress code — i gdzie jednym kliknięciem
                potwierdzą obecność. Projektujemy ją w tym samym stylu, co Wasze
                zaproszenia.
              </p>
              <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center">
                <Link
                  href={DEMO_PATH}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-medium text-ivory transition-colors hover:bg-accent-deep"
                >
                  Zobacz przykładową stronę
                  <IconArrow />
                </Link>
                <a
                  href="#pakiety"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-line px-6 py-3.5 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
                >
                  Pakiety i ceny
                </a>
              </div>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-4 text-xs text-ink-soft">
                {[
                  "Gotowe w 7–14 dni",
                  "Album gości w każdym pakiecie",
                  "Hosting na rok w cenie",
                ].map((t) => (
                  <span key={t} className="inline-flex items-center gap-2">
                    <span className="text-accent">
                      <IconCheckCircle size={15} />
                    </span>
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <PhoneMockup />
          </div>
        </section>

        {/* DLACZEGO */}
        <section className="border-y border-line bg-ivory-deep">
          <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10 sm:py-24">
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
                Po co Wam strona
              </span>
              <h2 className="mt-4 font-display text-4xl font-semibold text-ink sm:text-5xl">
                Trzy rzeczy, które załatwia za Was
              </h2>
            </div>
            <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
              {powody.map((p) => {
                const Icon = p.icon;
                return (
                  <div
                    key={p.title}
                    className="flex flex-col gap-4 rounded-2xl border border-line bg-ivory p-8"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-accent/10 text-accent">
                      <Icon />
                    </div>
                    <h3 className="font-display text-xl font-semibold text-ink">
                      {p.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-ink-soft">
                      {p.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FUNKCJE */}
        <section
          id="co-zawiera"
          className="mx-auto max-w-6xl px-6 py-20 sm:px-10 sm:py-28"
        >
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
              Co znajdzie się na stronie
            </span>
            <h2 className="mt-4 font-display text-4xl font-semibold text-ink sm:text-5xl">
              Wszystko, o co goście i tak zapytają
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-soft">
              Sekcje dobieramy razem z Wami — bierzecie tyle, ile potrzebujecie,
              w kolejności, która ma sens dla Waszego dnia.
            </p>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {funkcje.map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="flex gap-4">
                  <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line text-accent">
                    <Icon size={19} />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-ink">
                      {f.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
                      {f.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ALBUM GOŚCI */}
        <section
          id="album-gosci"
          className="border-y border-line bg-ivory-deep"
        >
          <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10 sm:py-28">
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
                W każdym pakiecie
              </span>
              <h2 className="mt-4 font-display text-4xl font-semibold text-ink sm:text-5xl">
                Wspólny album gości
              </h2>
              <p className="mt-5 text-base leading-relaxed text-ink-soft">
                Wasi goście zrobią tego dnia kilkaset zdjęć, których nigdy nie
                zobaczycie — utkną w ich telefonach. Album zbiera je w jednym
                miejscu, jeszcze zanim skończy się wesele.
              </p>
            </div>

            <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
              {album.map((a) => {
                const Icon = a.icon;
                return (
                  <div
                    key={a.title}
                    className="flex flex-col gap-4 rounded-2xl border border-line bg-ivory p-8"
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent/10 text-accent">
                        <Icon />
                      </span>
                      <span className="font-display text-2xl font-semibold text-accent">
                        {a.n}
                      </span>
                    </div>
                    <h3 className="font-display text-xl font-semibold text-ink">
                      {a.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-ink-soft">
                      {a.text}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="mt-10 grid grid-cols-1 gap-8 rounded-2xl border border-line bg-ivory p-8 sm:p-10 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <h3 className="font-display text-2xl font-semibold text-ink">
                  Co z tego macie
                </h3>
                <ul className="mt-5 flex flex-col gap-3">
                  {albumKorzysci.map((k) => (
                    <li key={k} className="flex gap-3 text-sm leading-relaxed text-ink-soft">
                      <span className="mt-0.5 shrink-0 text-accent">
                        <IconCheckCircle size={18} />
                      </span>
                      {k}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col justify-center gap-4 rounded-xl bg-ivory-deep p-7">
                <span className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
                  W komplecie
                </span>
                <p className="text-sm leading-relaxed text-ink-soft">
                  Do albumu drukujemy tabliczki z kodem QR na stoły — w tej
                  samej oprawie co winietki i menu. Gość nie musi szukać
                  linku: skanuje to, co i tak stoi przed nim.
                </p>
                <Link
                  href={DEMO_PATH}
                  className="inline-flex w-fit items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
                >
                  Zobacz galerię w demo
                  <IconArrow size={15} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* PODGLĄD DEMO */}
        <section className="bg-ink">
          <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-6 py-20 sm:px-10 sm:py-28 lg:grid-cols-2">
            <div className="flex flex-col items-start gap-6">
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
                Przykładowa realizacja
              </span>
              <h2 className="font-display text-4xl font-semibold leading-tight text-ivory sm:text-5xl">
                Zobaczcie, jak to działa na żywo
              </h2>
              <p className="max-w-md text-base leading-relaxed text-ivory/70">
                Przygotowaliśmy pełną, działającą stronę dla fikcyjnej pary —
                Aleksandry i Piotra. Możecie kliknąć wszystko: odliczanie,
                harmonogram, mapę i formularz RSVP. Wasza będzie wyglądać
                inaczej, bo powstanie na bazie Waszej papeterii.
              </p>
              <Link
                href={DEMO_PATH}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-medium text-ivory transition-colors hover:bg-accent-deep"
              >
                Otwórz demo
                <IconArrow />
              </Link>
            </div>

            <Link href={DEMO_PATH} className="group block">
              <div className="overflow-hidden rounded-[1.5rem] border border-ivory/15 bg-ivory shadow-[0_40px_80px_-40px_rgba(0,0,0,0.6)]">
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
                <div className="relative aspect-[16/11]">
                  <Image
                    src="/images/post5.jpg"
                    alt="Podgląd przykładowej strony weselnej Ani i Piotra"
                    fill
                    sizes="(max-width: 1024px) 90vw, 45vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-ink/45" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-ivory">
                    <span className="text-[0.65rem] uppercase tracking-[0.3em] text-ivory/80">
                      Pobieramy się
                    </span>
                    <p className="mt-3 font-display text-4xl font-semibold sm:text-5xl">
                      Aleksandra &amp; Piotr
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* PAKIETY */}
        <section
          id="pakiety"
          className="mx-auto max-w-6xl px-6 py-20 sm:px-10 sm:py-28"
        >
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
              Pakiety
            </span>
            <h2 className="mt-4 font-display text-4xl font-semibold text-ink sm:text-5xl">
              Wybierzcie zakres, my zajmiemy się resztą
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-soft">
              Ceny orientacyjne — ostateczną wycenę przygotowujemy po krótkiej
              rozmowie. Przy zamówieniu razem z papeterią strona jest tańsza o
              15%.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {pakiety.map((p) => (
              <div
                key={p.name}
                className={`relative flex flex-col rounded-2xl border p-8 ${
                  p.featured
                    ? "border-accent bg-ivory-deep shadow-[0_24px_48px_-28px_rgba(42,36,32,0.45)]"
                    : "border-line bg-ivory"
                }`}
              >
                {p.featured ? (
                  <span className="absolute -top-3 left-8 rounded-full bg-accent px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-ivory">
                    Najczęściej wybierany
                  </span>
                ) : null}

                <h3 className="font-display text-2xl font-semibold text-ink">
                  {p.name}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-ink-soft">
                  {p.tagline}
                </p>
                <p className="mt-6 font-display text-3xl font-semibold text-accent">
                  {p.price}
                </p>

                <ul className="mt-6 flex flex-1 flex-col gap-3 border-t border-line pt-6">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <span className="mt-0.5 shrink-0 text-accent">
                        <IconCheckCircle size={17} />
                      </span>
                      <span className="text-sm leading-relaxed text-ink-soft">
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium transition-colors ${
                    p.featured
                      ? "bg-accent text-ivory hover:bg-accent-deep"
                      : "border border-line text-ink hover:border-accent hover:text-accent"
                  }`}
                >
                  {p.cta}
                  <IconArrow />
                </a>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-10 flex max-w-3xl flex-col items-start gap-4 rounded-2xl border border-line bg-ivory-deep p-7 sm:flex-row sm:items-center sm:gap-7">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
              <IconCamera size={22} />
            </span>
            <p className="text-sm leading-relaxed text-ink-soft">
              <span className="font-medium text-ink">
                Album gości jest w każdym pakiecie — także w tym najtańszym.
              </span>{" "}
              Różni się tylko to, co dokładamy dookoła: od Kompletu drukujemy
              tabliczki z kodem QR na każdy stół, w oprawie Waszych winietek,
              a w Premium album zostaje aktywny rok po weselu.{" "}
              <a
                href="#album-gosci"
                className="font-medium text-accent underline underline-offset-4 transition-colors hover:text-accent-deep"
              >
                Zobaczcie, jak działa
              </a>
              .
            </p>
          </div>
        </section>

        {/* PROCES */}
        <section className="border-y border-line bg-ivory-deep">
          <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10 sm:py-28">
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
                Jak pracujemy
              </span>
              <h2 className="mt-4 font-display text-4xl font-semibold text-ink sm:text-5xl">
                Cztery kroki do własnego adresu
              </h2>
            </div>
            <div className="mt-14 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
              {kroki.map((k) => (
                <div key={k.n} className="flex flex-col gap-3">
                  <span className="font-display text-5xl font-semibold text-accent/25">
                    {k.n}
                  </span>
                  <h3 className="font-display text-xl font-semibold text-ink">
                    {k.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-ink-soft">
                    {k.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section
          id="faq"
          className="mx-auto max-w-3xl px-6 py-20 sm:px-10 sm:py-28"
        >
          <div className="text-center">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
              Pytania
            </span>
            <h2 className="mt-4 font-display text-4xl font-semibold text-ink sm:text-5xl">
              Najczęściej pytacie o to
            </h2>
          </div>
          <div className="mt-12 divide-y divide-line border-y border-line">
            {faq.map((item) => (
              <details key={item.q} className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-left font-display text-lg font-semibold text-ink transition-colors hover:text-accent [&::-webkit-details-marker]:hidden">
                  {item.q}
                  <span className="shrink-0 text-accent transition-transform duration-300 group-open:rotate-180">
                    <IconChevronDown />
                  </span>
                </summary>
                <p className="pb-6 text-sm leading-relaxed text-ink-soft">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-ink">
          <div className="mx-auto max-w-3xl px-6 py-20 text-center sm:px-10 sm:py-28">
            <h2 className="font-display text-4xl font-semibold text-ivory sm:text-5xl">
              Zróbmy Wam stronę, którą goście zapiszą w telefonie
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-ivory/70">
              Napiszcie do nas datę ślubu i dwa zdania o tym, jaki ma być Wasz
              dzień. Odpowiemy z propozycją zakresu i wyceną.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-medium text-ivory transition-colors hover:bg-accent-deep"
              >
                <IconInstagram />
                Napisz na Instagramie
              </a>
              <Link
                href={DEMO_PATH}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-ivory/25 px-6 py-3.5 text-sm font-medium text-ivory transition-colors hover:border-ivory"
              >
                <IconEnvelope size={18} />
                Najpierw zobacz demo
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

/* Makieta telefonu z miniaturą strony weselnej */
function PhoneMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[300px] rise sm:max-w-[330px]">
      <div className="relative overflow-hidden rounded-[2.5rem] border-[10px] border-ink bg-ink shadow-[0_40px_70px_-30px_rgba(42,36,32,0.55)]">
        <div className="relative aspect-[9/19] overflow-hidden rounded-[1.8rem] bg-ivory">
          <Image
            src="/images/post3.jpg"
            alt="Przykładowa strona weselna otwarta na telefonie"
            fill
            sizes="330px"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/55 via-ink/25 to-ink/80" />

          <div className="absolute inset-x-0 top-0 flex justify-center pt-3">
            <span className="h-1.5 w-16 rounded-full bg-ivory/40" />
          </div>

          <div className="absolute inset-x-0 top-[16%] px-6 text-center text-ivory">
            <span className="text-[0.6rem] uppercase tracking-[0.3em] text-ivory/80">
              Pobieramy się
            </span>
            <p className="mt-3 font-display text-4xl font-semibold leading-tight">
              Aleksandra
              <br />
              &amp; Piotr
            </p>
          </div>

          <div className="absolute inset-x-5 bottom-24 grid grid-cols-4 gap-2 text-center text-ivory">
            {[
              { v: String(daysUntil(DEMO_WEDDING.dateISO)), l: "dni" },
              { v: "04", l: "godz" },
              { v: "38", l: "min" },
              { v: "12", l: "sek" },
            ].map((c) => (
              <div
                key={c.l}
                className="rounded-xl border border-ivory/20 bg-ink/30 py-2 backdrop-blur-sm"
              >
                <p className="font-display text-base font-semibold">{c.v}</p>
                <p className="text-[0.5rem] uppercase tracking-[0.14em] text-ivory/70">
                  {c.l}
                </p>
              </div>
            ))}
          </div>

          <div className="absolute inset-x-5 bottom-8">
            <div className="rounded-full bg-accent py-3 text-center text-xs font-medium text-ivory">
              Potwierdź obecność
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -right-4 top-14 hidden rounded-2xl border border-line bg-ivory px-4 py-3 shadow-lg sm:block">
        <p className="text-[0.65rem] uppercase tracking-[0.16em] text-accent">
          Nowe RSVP
        </p>
        <p className="mt-0.5 font-display text-lg font-semibold text-ink">
          Kasia + 1
        </p>
      </div>

      <div className="absolute -left-6 bottom-20 hidden rounded-2xl border border-line bg-ivory px-4 py-3 shadow-lg sm:block">
        <p className="text-[0.65rem] uppercase tracking-[0.16em] text-sage">
          Potwierdzeni
        </p>
        <p className="mt-0.5 font-display text-lg font-semibold text-ink">
          86 gości
        </p>
      </div>
    </div>
  );
}
