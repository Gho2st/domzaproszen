import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Dom Zaproszeń — więcej niż zaproszenia",
  description:
    "Dom Zaproszeń to pracownia papeterii ślubnej — zaproszenia, winietki, menu weselne i dodatki projektowane indywidualnie dla każdej pary.",
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
