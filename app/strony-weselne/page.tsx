import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import {
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
    price: "od 499 zł",
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
    price: "od 899 zł",
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
    price: "od 1 299 zł",
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
        <section className={`${shell} pb-16 pt-12 sm:pb-20 sm:pt-16`}>
          <p className="label text-accent">Nowość w Domu Zaproszeń</p>

          <div className="mt-9 grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
            <div>
              <h1 className="display max-w-[16ch] text-balance text-d1 font-semibold">
                Wasze wesele pod jednym adresem<span className="text-accent">.</span>
              </h1>

              <p className="mt-10 max-w-[56ch] text-pretty text-lede text-ink-2">
                Strona weselna to miejsce, w którym goście znajdą wszystko:
                godziny, dojazd, nocleg, dress code — i gdzie jednym kliknięciem
                potwierdzą obecność. Projektujemy ją w tym samym stylu, co Wasze
                zaproszenia.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link href={DEMO_PATH} className={btnSolid}>
                  Zobacz przykładową stronę
                </Link>
                <a href="#pakiety" className={btnOutline}>
                  Pakiety i ceny
                </a>
              </div>

              <dl className="mt-12 grid gap-x-10 gap-y-5 border-t border-rule pt-7 sm:grid-cols-3">
                {fakty.map((f) => (
                  <div key={f.label}>
                    <dt className="label text-ink-3">{f.label}</dt>
                    <dd className="mt-1.5 text-ink">{f.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <PhoneMockup />
          </div>
        </section>

        {/* PO CO */}
        <section className="border-y border-rule bg-paper-2 py-16 sm:py-24">
          <div className={shell}>
            <SectionHead
              index="01"
              label="Po co Wam strona"
              title="Trzy rzeczy, które załatwia za Was"
            />

            <ol className="mt-12 border-t border-rule">
              {powody.map((p, i) => (
                <li key={p.title} className="border-b border-rule">
                  <div className="grid gap-x-10 gap-y-3 py-8 md:grid-cols-[auto_minmax(0,24ch)_1fr] md:items-baseline">
                    <span className="label num text-ink-3">{nr(i)}</span>
                    <h3 className="display text-d3 font-semibold">{p.title}</h3>
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
        <section id="co-zawiera" className={`${shell} py-16 sm:py-24`}>
          <SectionHead
            index="02"
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
                <h3 className="display mt-4 text-d4 font-semibold">
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
          className="border-y border-rule bg-paper-2 py-16 sm:py-24"
        >
          <div className={shell}>
            <SectionHead
              index="03"
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
                        <h3 className="display text-d3 font-semibold">
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
        <section className="bg-ink py-20 text-paper sm:py-28">
          <div className={shell}>
            <div className="grid items-start gap-14 lg:grid-cols-2 lg:gap-20">
              <div>
                <SectionHead
                  index="04"
                  label="Przykładowa realizacja"
                  title="Zobaczcie, jak to działa na żywo"
                  lede="Przygotowaliśmy pełną, działającą stronę dla fikcyjnej pary — Aleksandry i Piotra. Możecie kliknąć wszystko: odliczanie, harmonogram, mapę i formularz RSVP. Wasza będzie wyglądać inaczej, bo powstanie na bazie Waszej papeterii."
                  inverse
                />
                <Link href={DEMO_PATH} className={`${btnSolidInverse} mt-10`}>
                  Otwórz demo
                </Link>
              </div>

              <Link href={DEMO_PATH} className="group block">
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
                      <p className="display mt-4 text-d2 font-semibold">
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
        <section id="pakiety" className={`${shell} py-16 sm:py-24`}>
          <SectionHead
            index="05"
            label="Pakiety"
            title="Wybierzcie zakres, my zajmiemy się resztą"
            lede="Ceny orientacyjne — ostateczną wycenę przygotowujemy po krótkiej rozmowie. Przy zamówieniu razem z papeterią strona jest tańsza o 15%."
          />

          <div className="mt-12 grid border-t border-rule lg:grid-cols-3">
            {pakiety.map((p) => (
              <div
                key={p.name}
                className={`flex flex-col border-b border-rule py-9 lg:border-r lg:px-8 lg:first:pl-0 lg:last:border-r-0 ${
                  p.featured ? "bg-paper-2 px-6 lg:px-8" : "px-0"
                }`}
              >
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="display text-d3 font-semibold">{p.name}</h3>
                  {p.featured ? (
                    <span className="label shrink-0 text-accent">
                      Najczęściej wybierany
                    </span>
                  ) : null}
                </div>

                <p className="mt-3 max-w-[34ch] text-pretty text-ink-2">
                  {p.tagline}
                </p>

                <p className="display num mt-7 text-d2 font-semibold text-accent">
                  {p.price}
                </p>

                <ul className="mt-7 flex flex-1 flex-col gap-3 border-t border-rule pt-7">
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-3.5 text-ink-2">
                      <span aria-hidden="true" className="text-ink-3">
                        —
                      </span>
                      <span className="text-pretty">{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${p.featured ? btnSolid : btnOutline} mt-9`}
                >
                  Zapytaj o wycenę
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* PROCES */}
        <section className="border-y border-rule bg-paper-2 py-16 sm:py-24">
          <div className={shell}>
            <SectionHead
              index="06"
              label="Jak pracujemy"
              title="Cztery kroki do własnego adresu"
            />

            <div className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
              {kroki.map((k, i) => (
                <div
                  key={k.title}
                  className="border-t border-rule pt-6 lg:border-t-0 lg:border-l lg:pl-8 lg:pt-0 lg:first:border-l-0 lg:first:pl-0"
                >
                  <span className="display num block text-[2.1rem] font-semibold leading-none text-accent">
                    {nr(i)}
                  </span>
                  <h3 className="display mt-5 text-d3 font-semibold">
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
        <section id="faq" className={`${shell} py-16 sm:py-24`}>
          <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
            <SectionHead index="07" label="Pytania" title="Najczęściej pytacie o to" />

            <div className="divide-y divide-rule border-y border-rule">
              {faq.map((item) => (
                <Question key={item.q} q={item.q} a={item.a} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-ink py-20 text-paper sm:py-28">
          <div className={shell}>
            <div className="grid gap-12 md:grid-cols-[1.3fr_1fr] md:gap-20">
              <h2 className="display max-w-[24ch] text-balance text-d1 font-semibold">
                Zróbmy Wam stronę, którą goście zapiszą w telefonie
              </h2>
              <div className="self-end">
                <p className="max-w-[46ch] text-pretty text-lede text-paper/70">
                  Napiszcie do nas datę ślubu i dwa zdania o tym, jaki ma być
                  Wasz dzień. Odpowiemy z propozycją zakresu i wyceną.
                </p>
                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={btnSolidInverse}
                  >
                    Napisz na Instagramie
                  </a>
                  <Link href={DEMO_PATH} className={btnOutlineInverse}>
                    Najpierw zobacz demo
                  </Link>
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

/* Makieta telefonu z miniaturą strony weselnej */
function PhoneMockup() {
  return (
    <div className="mx-auto w-full max-w-[320px] lg:sticky lg:top-28">
      <div className="border-[7px] border-ink bg-ink">
        <div className="relative aspect-[9/18] overflow-hidden bg-paper">
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
            <p className="display mt-4 text-[2.25rem] font-semibold leading-[0.98]">
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
                <p className="display num text-base font-semibold">{c.v}</p>
                <p className="label mt-1 text-[0.5rem] text-paper/70">{c.l}</p>
              </div>
            ))}
          </div>

          <div className="absolute inset-x-5 bottom-6">
            <div className="bg-paper py-3 text-center text-sm font-medium text-ink">
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
