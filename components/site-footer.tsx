import Link from "next/link";
import { DEMO_PATH, INSTAGRAM_URL, TIKTOK_URL } from "@/lib/site";
import { shell } from "./ui";

const kolumny = [
  {
    label: "Pracownia",
    links: [
      { href: "/#oferta", label: "Oferta" },
      { href: "/#realizacje", label: "Realizacje" },
      { href: "/#jak-to-dziala", label: "Jak pracujemy" },
    ],
  },
  {
    label: "Strony weselne",
    links: [
      { href: "/strony-weselne", label: "Co zawiera strona" },
      { href: "/strony-weselne#pakiety", label: "Pakiety i ceny" },
      { href: DEMO_PATH, label: "Przykładowa strona" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="bg-ink text-paper">
      <div className={shell}>
        <div className="grid gap-12 border-t border-paper/15 py-16 md:grid-cols-[1.4fr_1fr_1fr] md:gap-16">
          <div>
            <p className="display text-d3 font-semibold">Dom Zaproszeń</p>
            <p className="mt-4 max-w-[34ch] text-pretty text-paper/65">
              Pracownia papeterii ślubnej. Zaproszenia, winietki, menu, dodatki
              i strony weselne — projektowane od zera dla każdej pary.
            </p>
            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-2">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-paper/80 underline decoration-paper/30 underline-offset-[5px] transition-colors hover:text-paper"
              >
                Instagram
              </a>
              <a
                href={TIKTOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-paper/80 underline decoration-paper/30 underline-offset-[5px] transition-colors hover:text-paper"
              >
                TikTok
              </a>
            </div>
          </div>

          {kolumny.map((kol) => (
            <nav key={kol.label}>
              <p className="kicker text-paper/60">{kol.label}</p>
              <ul className="mt-5 flex flex-col gap-3">
                {kol.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-paper/70 transition-colors hover:text-paper"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="flex flex-col gap-2 border-t border-paper/15 py-8 text-sm text-paper/60 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} Dom Zaproszeń</p>
          <p>Kraków · papeteria i strony weselne</p>
        </div>
      </div>
    </footer>
  );
}
