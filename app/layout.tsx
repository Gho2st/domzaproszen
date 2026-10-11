import type { Metadata } from "next";
import { Fraunces, Instrument_Sans } from "next/font/google";
import "./globals.css";

/* Fraunces — wariacyjny krój o wyraźnym charakterze (osie SOFT i WONK).
   latin-ext jest konieczny: bez niego ł, ą, ę, ś, ż renderują się zastępczym krojem. */
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin", "latin-ext"],
  axes: ["SOFT", "WONK"],
  style: ["normal", "italic"],
  display: "swap",
});

const instrument = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Dom Zaproszeń — pracownia papeterii ślubnej",
    template: "%s",
  },
  description:
    "Pracownia papeterii ślubnej: zaproszenia, winietki, menu, dodatki i strony weselne projektowane indywidualnie dla każdej pary.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pl"
      className={`${fraunces.variable} ${instrument.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-paper font-body text-ink">
        {children}
      </body>
    </html>
  );
}
