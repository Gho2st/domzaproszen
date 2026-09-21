import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const OPIS =
  "Dom Zaproszeń to pracownia papeterii ślubnej — zaproszenia, winietki, menu weselne, dodatki i strony weselne projektowane indywidualnie dla każdej pary.";

export const metadata: Metadata = {
  // Bez metadataBase adresy obrazków w podglądzie linku są względne,
  // a scrapery Instagrama czy Messengera ich nie odczytają.
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Dom Zaproszeń — więcej niż zaproszenia",
    template: "%s",
  },
  description: OPIS,
  openGraph: {
    type: "website",
    locale: "pl_PL",
    siteName: "Dom Zaproszeń",
    title: "Dom Zaproszeń — więcej niż zaproszenia",
    description: OPIS,
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pl"
      className={`${cormorant.variable} ${jost.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-body bg-ivory text-ink">
        {children}
      </body>
    </html>
  );
}
