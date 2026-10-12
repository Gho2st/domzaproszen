import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Reveal } from "@/components/reveal";
import {
  Etykieta,
  Question,
  SectionHead,
  btnOutline,
  btnOutlineInverse,
  btnSolid,
  btnSolidInverse,
  shell,
} from "@/components/ui";
import { DEMO_PATH, DEMO_WEDDING, INSTAGRAM_URL, daysUntil } from "@/lib/site";

export const metadata: Metadata = {
  title: "Strony weselne | Dom Zaproszeń",
  description:
    "Indywidualne strony weselne z RSVP online, harmonogramem, mapą dojazdu i galerią — zaprojektowane w tym samym stylu co Wasze zaproszenia.",
};

const powody = [
  {
    title: "Koniec z tłumaczeniem po raz setny",
    text: "Godzina błogosławieństwa, adres sali, parking, nocleg — goście sprawdzają sami, o każdej porze, zamiast pisać do Was o 23:00.",
  },
  {
    title: "RSVP, które zbiera się samo",
    text: "Potwierdzenia, wybór menu, diety, nocleg i transport spływają do jednej tabeli. Widzicie na bieżąco, kto się odezwał.",
  },
  {
    title: "Spójność z papeterią",
    text: "Te same kolory, ta sama typografia, te same detale co na zaproszeniu. Strona jest przedłużeniem projektu, nie osobnym bytem.",
  },
];

const funkcje = [
  {
    title: "Odliczanie i harmonogram",
    text: "Licznik do dnia ślubu oraz oś czasu: ceremonia, obiad, pierwszy taniec, oczepiny, poprawiny.",
  },
  {
    title: "Formularz RSVP",
    text: "Imiona, liczba osób, dzieci, menu, dieta, nocleg, transport — pytamy dokładnie o to, co potrzebne.",
  },
  {
    title: "Lista gości dla Was",
    text: "Odpowiedzi w arkuszu gotowym do sortowania, plus powiadomienie mailem przy każdym nowym potwierdzeniu.",
  },
  {
    title: "Dojazd i mapa",
    text: "Kościół, sala, parking — z linkiem do nawigacji jednym tapnięciem i wskazówkami dla gości spoza miasta.",
  },
  {
    title: "Noclegi w okolicy",
    text: "Lista hoteli i pensjonatów z kontaktem oraz hasłem do rezerwacji przy Waszej rezerwacji grupowej.",
  },
  {
    title: "Prezenty i dress code",
    text: "Delikatnie sformułowane informacje o prezentach, kolorystyce i stylu ubioru — bez niezręczności.",
  },
  {
    title: "Galeria i album gości",
    text: "Sesja narzeczeńska przed ślubem, a w dniu wesela wspólny album: goście skanują kod QR ze stołu i wrzucają swoje kadry prosto z telefonu.",
  },
  {
    title: "Własny adres",
    text: "aleksandra-i-piotr.domzaproszen.pl albo Wasza własna domena. Hosting i certyfikat na rok w cenie.",
  },
  {
    title: "Kod QR na zaproszenie",
    text: "Drukujemy go na wkładce lub zaproszeniu — gość skanuje telefonem i od razu jest na stronie.",
  },
];

const album = [
  {
    title: "Kod QR staje na stołach",
    text: "Drukujemy go na tabliczce, winietce albo menu — w tej samej oprawie co reszta papeterii, więc nie psuje dekoracji stołu.",
  },
  {
    title: "Gość skanuje i wrzuca",
    text: "Bez aplikacji i bez zakładania konta. Telefon otwiera stronę, gość wybiera zdjęcia z galerii i po chwili są u Was.",
  },
  {
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
    price: "299",
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
    featured: false,
  },
  {
    name: "Komplet z RSVP",
    price: "599",
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
    featured: true,
  },
  {
    name: "Premium",
    price: "999",
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
    featured: false,
  },
];

const kroki = [
  {
    title: "Rozmowa i brief",
    text: "Opowiadacie o ślubie, terminie i tym, co goście muszą wiedzieć. Podpowiadamy, co warto umieścić na stronie.",
  },
  {
    title: "Projekt i treści",
    text: "Dostajecie prosty formularz do uzupełnienia treści, a my przygotowujemy projekt w stylu Waszej papeterii.",
  },
  {
    title: "Podgląd i poprawki",
    text: "Oglądacie stronę na żywo pod prywatnym linkiem. Dwie rundy poprawek są w cenie każdego pakietu.",
  },
  {
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

const fakty = [
  { label: "Gotowe w", value: "7–14 dni" },
  { label: "W cenie", value: "Hosting i SSL na rok" },
  { label: "Na zaproszeniu", value: "Kod QR do strony" },
];

const nr = (i: number) => String(i + 1).padStart(2, "0");

export default function StronyWeselne() {
  return (
    <div className="flex flex-1 flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* MASTHEAD */}
        <section className={`${shell} pb-16 pt-14 text-center sm:pb-20 sm:pt-20`}>
          <p className="rise label text-accent">Nowość w Domu Zaproszeń</p>

          <h1 className="tytul rise mx-auto mt-6 max-w-[15ch] text-balance text-[clamp(2.3rem,6.5vw,4.25rem)] font-semibold leading-[1.02] tracking-[-0.035em]">
            Wasze wesele pod jednym adresem
            <span className="text-accent">.</span>
          </h1>

          <p
            className="rise mx-auto mt-6 max-w-[48ch] text-pretty text-lede text-ink-2"
            style={{ animationDelay: "120ms" }}
          >
            Strona weselna to miejsce, w którym goście znajdą wszystko: godziny,
            dojazd, nocleg, dress code — i gdzie jednym kliknięciem potwierdzą
            obecność. Projektujemy ją w tym samym stylu, co Wasze zaproszenia.
          </p>

          <div
            className="rise mt-8 flex flex-row items-center justify-center gap-3"
            style={{ animationDelay: "200ms" }}
          >
            <Link
              href={DEMO_PATH}
              className={`${btnSolid} flex-1 sm:flex-none`}
            >
              <Etykieta krotka="Demo" pelna="Zobacz demo" />
            </Link>
            <a
              href="#pakiety"
              className={`${btnOutline} flex-1 sm:flex-none`}
            >
              <Etykieta krotka="Pakiety" pelna="Pakiety i ceny" />
            </a>
          </div>

          <div className="rise mt-14" style={{ animationDelay: "90ms" }}>
            <PhoneMockup />
          </div>

          <dl className="mx-auto mt-14 grid max-w-3xl gap-8 rounded-[1.5rem] bg-paper-2 px-8 py-10 sm:grid-cols-3 sm:rounded-[2rem]">
            {fakty.map((f) => (
              <div key={f.label}>
                <dt className="text-sm text-ink-3">{f.label}</dt>
                <dd className="mt-2 text-ink">{f.value}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* PO CO */}
        <section className="bg-paper-2 py-20 sm:py-28">
          <div className={shell}>
            <SectionHead
              label="Po co Wam strona"
              title="Trzy rzeczy, które załatwia za Was"
            />

            <ol className="mt-12 border-t border-rule">
              {powody.map((p, i) => (
                <li key={p.title} className="border-b border-rule">
                  <div className="grid gap-x-10 gap-y-3 py-8 md:grid-cols-[auto_minmax(0,24ch)_1fr] md:items-baseline">
                    <span className="label num text-ink-3">{nr(i)}</span>
                    <h3 className="tytul text-d3 font-semibold">{p.title}</h3>
                    <p className="max-w-[62ch] text-pretty text-ink-2">
                      {p.text}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* FUNKCJE */}
        <section id="co-zawiera" className={`${shell} py-20 sm:py-28`}>
          <SectionHead
            label="Co znajdzie się na stronie"
            title="Wszystko, o co goście i tak zapytają"
            lede="Sekcje dobieramy razem z Wami — bierzecie tyle, ile potrzebujecie, w kolejności, która ma sens dla Waszego dnia."
          />

          <div className="mt-12 grid gap-x-10 border-t border-rule sm:grid-cols-2 lg:grid-cols-3">
            {funkcje.map((f, i) => (
              <div
                key={f.title}
                className="border-b border-rule py-7 lg:border-r lg:pr-8 lg:[&:nth-child(3n)]:border-r-0"
              >
                <span className="label num text-ink-3">{nr(i)}</span>
                <h3 className="tytul mt-4 text-d4 font-semibold">
                  {f.title}
                </h3>
                <p className="mt-2.5 max-w-[42ch] text-pretty text-ink-2">
                  {f.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ALBUM GOŚCI */}
        <section
          id="album-gosci"
          className="bg-paper-2 py-20 sm:py-28"
        >
          <div className={shell}>
            <SectionHead
              label="Album gości · w każdym pakiecie"
              title="Wspólny album gości"
              lede="Wasi goście zrobią tego dnia kilkaset zdjęć, których nigdy nie zobaczycie — utkną w ich telefonach. Album zbiera je w jednym miejscu, jeszcze zanim skończy się wesele."
            />

            <div className="mt-12 grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
              <ol className="border-t border-rule">
                {album.map((a, i) => (
                  <li key={a.title} className="border-b border-rule py-7">
                    <div className="flex gap-6">
                      <span className="label num shrink-0 text-ink-3">
                        {nr(i)}
                      </span>
                      <div>
                        <h3 className="tytul text-d3 font-semibold">
                          {a.title}
                        </h3>
                        <p className="mt-2.5 max-w-[52ch] text-pretty text-ink-2">
                          {a.text}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ol>

              <div>
                <p className="label text-ink-3">Co z tego macie</p>
                <ul className="mt-6 flex flex-col gap-4">
                  {albumKorzysci.map((k) => (
                    <li key={k} className="flex gap-4 text-pretty text-ink-2">
                      <span aria-hidden="true" className="text-accent">
                        —
                      </span>
                      {k}
                    </li>
                  ))}
                </ul>

                <div className="mt-10 border-t border-rule pt-7">
                  <p className="label text-ink-3">W komplecie</p>
                  <p className="mt-4 max-w-[48ch] text-pretty text-ink-2">
                    Do albumu drukujemy tabliczki z kodem QR na stoły — w tej
                    samej oprawie co winietki i menu. Gość nie musi szukać
                    linku: skanuje to, co i tak stoi przed nim.
                  </p>
                  <Link
                    href={`${DEMO_PATH}#album`}
                    className={`${btnOutline} mt-7`}
                  >
                    Zobacz galerię w demo
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PODGLĄD DEMO */}
        <section className={`${shell} py-20 sm:py-28`}>
          <div className="rounded-[1.75rem] bg-ink px-6 py-14 text-paper sm:rounded-[2.5rem] sm:px-12 sm:py-20">
            <div className="grid items-start gap-14 lg:grid-cols-2 lg:gap-20">
              <div>
                <SectionHead
                  label="Przykładowa realizacja"
                  title="Zobaczcie, jak to działa na żywo"
                  lede="Przygotowaliśmy pełną, działającą stronę dla fikcyjnej pary — Aleksandry i Piotra. Możecie kliknąć wszystko: odliczanie, harmonogram, mapę i formularz RSVP. Wasza będzie wyglądać inaczej, bo powstanie na bazie Waszej papeterii."
                  inverse
                  align="left"
                />
                <Link href={DEMO_PATH} className={`${btnSolidInverse} mt-10`}>
                  Otwórz demo
                </Link>
              </div>

              <Link href={DEMO_PATH} className="group block">
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
                  <div className="relative aspect-[16/11] overflow-hidden">
                    <Image
                      src="/images/post5.jpg"
                      alt="Podgląd przykładowej strony weselnej Aleksandry i Piotra"
                      fill
                      sizes="(max-width: 1024px) 90vw, 45vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-ink/50" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-paper">
                      <span className="label text-paper/75">Pobieramy się</span>
                      <p className="tytul mt-4 text-d2 font-semibold">
                        {DEMO_WEDDING.bride}
                        <em className="mx-2 font-normal">&amp;</em>
                        {DEMO_WEDDING.groom}
                      </p>
                      <p className="num mt-3 text-sm tracking-[0.2em] text-paper/80">
                        {DEMO_WEDDING.dateShort}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* PAKIETY */}
        <section id="pakiety" className={`${shell} py-20 sm:py-28`}>
          <SectionHead
            label="Pakiety"
            title="Wybierzcie zakres, my zajmiemy się resztą"
            lede="Ceny orientacyjne — ostateczną wycenę przygotowujemy po krótkiej rozmowie. Przy zamówieniu razem z papeterią strona jest tańsza o 15%."
          />

          {/* subgrid: nazwa, lead, cena, lista i przycisk leżą w jednej linii
              we wszystkich trzech kolumnach, mimo różnej długości treści */}
          <div className="mt-14 grid gap-5 sm:gap-6 lg:grid-cols-3 lg:grid-rows-[auto_auto_auto_1fr_auto]">
            {pakiety.map((p) => (
              <div
                key={p.name}
                className={`grid gap-0 rounded-[1.5rem] p-8 sm:rounded-[2rem] sm:p-9 lg:row-span-5 lg:grid-rows-subgrid ${
                  p.featured ? "bg-ink text-paper" : "bg-paper-2"
                }`}
              >
                <p
                  className={`kicker ${p.featured ? "text-paper/70" : "text-accent"}`}
                >
                  {p.featured ? "Najczęściej wybierany" : "\u00a0"}
                </p>

                <div className="mt-5">
                  <h3 className="tytul text-d3 font-semibold">{p.name}</h3>
                  <p
                    className={`mt-2.5 max-w-[32ch] text-pretty ${
                      p.featured ? "text-paper/70" : "text-ink-2"
                    }`}
                  >
                    {p.tagline}
                  </p>
                </div>

                <p className="mt-7 flex items-baseline gap-2">
                  <span
                    className={`label ${p.featured ? "text-paper/60" : "text-ink-3"}`}
                  >
                    od
                  </span>
                  <span className="tytul num text-[2rem] font-semibold leading-none">
                    {p.price}
                  </span>
                  <span
                    className={`tytul text-d4 font-semibold ${
                      p.featured ? "text-paper/60" : "text-ink-3"
                    }`}
                  >
                    zł
                  </span>
                </p>

                <ul
                  className={`mt-7 flex flex-col gap-3 border-t pt-7 ${
                    p.featured ? "border-paper/20" : "border-rule"
                  }`}
                >
                  {p.features.map((f) => (
                    <li
                      key={f}
                      className={`flex gap-3.5 ${
                        p.featured ? "text-paper/75" : "text-ink-2"
                      }`}
                    >
                      <span aria-hidden="true" className="text-accent">
                        ✦
                      </span>
                      <span className="text-pretty">{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${
                    p.featured ? btnSolidInverse : btnOutline
                  } mt-9 w-full`}
                >
                  Zapytaj o wycenę
                </a>
              </div>
            ))}
          </div>

          <p className="mt-8 border-t border-rule pt-6 text-sm text-ink-3">
            Podane kwoty to ceny wyjściowe brutto. Zakres i termin ustalamy
            indywidualnie — napiszcie, a odeślemy konkretną wycenę.
          </p>
        </section>

        {/* PROCES */}
        <section className="bg-paper-2 py-20 sm:py-28">
          <div className={shell}>
            <SectionHead
              label="Jak pracujemy"
              title="Cztery kroki do własnego adresu"
            />

            <div className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
              {kroki.map((k, i) => (
                <div
                  key={k.title}
                  className="border-t border-rule pt-6 lg:border-t-0 lg:border-l lg:pl-8 lg:pt-0 lg:first:border-l-0 lg:first:pl-0"
                >
                  <span className="tytul num block text-[1.8rem] font-semibold leading-none text-accent">
                    {nr(i)}
                  </span>
                  <h3 className="tytul mt-5 text-d3 font-semibold">
                    {k.title}
                  </h3>
                  <p className="mt-3 max-w-[38ch] text-pretty text-ink-2">
                    {k.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className={`${shell} py-20 sm:py-28`}>
          <Reveal>
            <SectionHead label="Pytania" title="Najczęściej pytacie o to" />
          </Reveal>

          <div className="mx-auto mt-12 max-w-[46rem]">
            <div className="divide-y divide-rule border-y border-rule">
              {faq.map((item) => (
                <Question key={item.q} q={item.q} a={item.a} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className={`${shell} pb-20 sm:pb-28`}>
          <Reveal>
            <div className="rounded-[1.75rem] bg-ink px-6 py-16 text-center text-paper sm:rounded-[2.5rem] sm:px-12 sm:py-24">
              <h2 className="tytul mx-auto max-w-[20ch] text-balance text-d1">
                Zróbmy Wam stronę, którą goście zapiszą w telefonie
              </h2>
              <p className="mx-auto mt-5 max-w-[44ch] text-pretty text-lede text-paper/70">
                Napiszcie do nas datę ślubu i dwa zdania o tym, jaki ma być Wasz
                dzień. Odpowiemy z propozycją zakresu i wyceną.
              </p>
              <div className="mt-9 flex flex-row items-center justify-center gap-3">
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${btnSolidInverse} flex-1 sm:flex-none`}
                >
                  <Etykieta krotka="Instagram" pelna="Napisz na Instagramie" />
                </a>
                <Link
                  href={DEMO_PATH}
                  className={`${btnOutlineInverse} flex-1 sm:flex-none`}
                >
                  <Etykieta krotka="Demo" pelna="Zobacz demo" />
                </Link>
              </div>
            </div>
          </Reveal>
        </section>

      </main>

      <SiteFooter />
    </div>
  );
}

/* Makieta telefonu z miniaturą strony weselnej */
function PhoneMockup() {
  return (
    <div className="mx-auto w-full max-w-[320px] lg:sticky lg:top-28">
      <div className="overflow-hidden rounded-[2.5rem] border-[7px] border-ink bg-ink shadow-[0_30px_60px_-30px_rgba(22,21,15,0.45)]">
        <div className="relative aspect-[9/18] overflow-hidden rounded-[1.9rem] bg-paper">
          <Image
            src="/images/post3.jpg"
            alt="Przykładowa strona weselna otwarta na telefonie"
            fill
            sizes="320px"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/25 to-ink/85" />

          <div className="absolute inset-x-0 top-[14%] px-6 text-center text-paper">
            <span className="label text-paper/75">Pobieramy się</span>
            <p className="tytul mt-4 text-[1.95rem] font-semibold leading-[0.98]">
              {DEMO_WEDDING.bride}
              <br />
              <em className="font-normal">&amp;</em> {DEMO_WEDDING.groom}
            </p>
            <p className="num mt-4 text-xs tracking-[0.22em] text-paper/85">
              {DEMO_WEDDING.dateUpper}
            </p>
          </div>

          <div className="absolute inset-x-5 bottom-20 grid grid-cols-4 divide-x divide-paper/25 border-y border-paper/25 text-center text-paper">
            {[
              { v: String(daysUntil(DEMO_WEDDING.dateISO)), l: "dni" },
              { v: "04", l: "godz" },
              { v: "38", l: "min" },
              { v: "12", l: "sek" },
            ].map((c) => (
              <div key={c.l} className="px-1 py-2.5">
                <p className="tytul num text-base">{c.v}</p>
                <p className="label mt-1 text-[0.5rem] text-paper/70">{c.l}</p>
              </div>
            ))}
          </div>

          <div className="absolute inset-x-5 bottom-6">
            <div className="rounded-full bg-paper py-3 text-center text-sm font-medium text-ink">
              Potwierdź obecność
            </div>
          </div>
        </div>
      </div>

      <p className="label mt-4 text-center text-ink-3">
        {DEMO_WEDDING.hostname}
      </p>
    </div>
  );
}
