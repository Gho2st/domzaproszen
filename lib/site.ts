export const INSTAGRAM_URL = "https://www.instagram.com/domzaproszen.pl/";
export const TIKTOK_URL = "https://www.tiktok.com/@domzaproszen.pl";
export const DEMO_PATH = "/demo/aleksandra-i-piotr";

/** Fikcyjna para z demo strony weselnej. */
export const DEMO_WEDDING = {
  bride: "Aleksandra",
  groom: "Piotr",
  /** Niedziela — data z zaproszenia */
  dateISO: "2027-07-11T16:00:00+02:00",
  dateLabel: "11 lipca 2027",
  dateShort: "11 · 07 · 2027",
  dateUpper: "11 LIPCA 2027",
  hostname: "aleksandra-i-piotr.domzaproszen.pl",
};

/** Pełne dni do podanej daty — do statycznych makiet odliczania. */
export function daysUntil(iso: string) {
  const diff = new Date(iso).getTime() - Date.now();
  return Math.max(0, Math.floor(diff / 86_400_000));
}
