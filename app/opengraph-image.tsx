import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Dom Zaproszeń — pracownia papeterii ślubnej";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// satori nie czyta WOFF2, które pobiera next/font — stąd statyczne instancje
// tych samych krojów, w tych samych ustawieniach osi co na stronie
const fraunces = await readFile(
  join(process.cwd(), "assets/fonts/Fraunces-Display-SemiBold.ttf"),
);
const grotesk = await readFile(
  join(process.cwd(), "assets/fonts/InstrumentSans-Medium.ttf"),
);
const tlo = await readFile(
  join(process.cwd(), "assets/og/papeteria-1200x630.jpg"),
);

const PAPER = "#f7f4ed";
const INK = "#16150f";
const ACCENT = "#b9573f";

export default async function Image() {
  const tloUrl = `data:image/jpeg;base64,${tlo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          backgroundColor: INK,
        }}
      >
        <img
          src={tloUrl}
          width={size.width}
          height={size.height}
          alt=""
          style={{ position: "absolute", top: 0, left: 0 }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: size.width,
            height: size.height,
            backgroundImage:
              "linear-gradient(100deg, rgba(22,21,15,0.96) 0%, rgba(22,21,15,0.9) 44%, rgba(22,21,15,0.45) 74%, rgba(22,21,15,0.25) 100%)",
          }}
        />

        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "72px 78px",
            height: "100%",
            width: "820px",
          }}
        >
          <div style={{ display: "flex", alignItems: "baseline", gap: 18 }}>
            <span
              style={{
                fontFamily: "Fraunces",
                fontSize: 30,
                color: PAPER,
                letterSpacing: -0.5,
              }}
            >
              Dom Zaproszeń
            </span>
            <span
              style={{
                fontFamily: "Instrument",
                fontSize: 15,
                letterSpacing: 2.4,
                color: "rgba(247,244,237,0.55)",
              }}
            >
              PRACOWNIA PAPETERII
            </span>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                fontFamily: "Fraunces",
                fontSize: 86,
                color: PAPER,
                lineHeight: 1.04,
                letterSpacing: -2.4,
              }}
            >
              <span>Więcej niż</span>
              <div style={{ display: "flex", alignItems: "baseline" }}>
                <span>zaproszenia</span>
                <span style={{ color: ACCENT }}>.</span>
              </div>
            </div>

            <div
              style={{
                width: "100%",
                height: 1,
                backgroundColor: "rgba(247,244,237,0.25)",
                margin: "38px 0 26px",
              }}
            />

            <div
              style={{
                fontFamily: "Instrument",
                fontSize: 21,
                letterSpacing: 2.8,
                color: "rgba(247,244,237,0.75)",
              }}
            >
              ZAPROSZENIA · WINIETKI · MENU · STRONY WESELNE
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Fraunces", data: fraunces, style: "normal", weight: 600 },
        { name: "Instrument", data: grotesk, style: "normal", weight: 500 },
      ],
    },
  );
}
