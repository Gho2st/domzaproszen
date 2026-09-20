import Link from "next/link";
import { DEMO_PATH, INSTAGRAM_URL, TIKTOK_URL } from "@/lib/site";
import { IconInstagram, IconTiktok } from "./icons";

export function SiteFooter() {
  return (
    <footer className="bg-ink">
      <div className="mx-auto w-full max-w-6xl border-t border-ivory/10 px-6 py-12 sm:px-10">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-sm">
            <p className="font-display text-lg font-semibold text-ivory">
              Dom Zaproszeń
            </p>
            <p className="mt-1 text-sm leading-relaxed text-ivory/60">
              Więcej niż zaproszenia — papeteria, dodatki i strony weselne na
              wyjątkowe okazje.
            </p>
          </div>

          <div className="flex flex-col gap-3 text-sm text-ivory/60">
            <Link className="transition-colors hover:text-ivory" href="/#oferta">
              Oferta
            </Link>
            <Link
              className="transition-colors hover:text-ivory"
              href="/#realizacje"
            >
              Realizacje
            </Link>
            <Link
              className="transition-colors hover:text-ivory"
              href="/strony-weselne"
            >
              Strony weselne
            </Link>
            <Link
              className="transition-colors hover:text-ivory"
              href={DEMO_PATH}
            >
              Demo strony weselnej
            </Link>
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
        </div>

        <p className="mt-10 text-xs text-ivory/40">
          © {new Date().getFullYear()} Dom Zaproszeń
        </p>
      </div>
    </footer>
  );
}
