import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { DEMO_WEDDING } from "@/lib/site";

export const alt = `${DEMO_WEDDING.bride} i ${DEMO_WEDDING.groom} — przykładowa strona weselna`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// satori nie czyta WOFF2, które pobiera next/font — stąd osobne pliki TTF
const kaligrafia = await readFile(
  join(process.cwd(), "assets/fonts/GreatVibes-Regular.ttf"),
);
const antykwa = await readFile(
  join(process.cwd(), "assets/fonts/CormorantGaramond-SemiBold.ttf"),
);
const tlo = await readFile(join(process.cwd(), "assets/og/hero-1200x630.jpg"));

export default async function Image() {
  const { bride, groom, dateUpper } = DEMO_WEDDING;
  const tloUrl = `data:image/jpeg;base64,${tlo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          backgroundColor: "#28322c",
        }}
      >
        <img
          src={tloUrl}
          width={size.width}
          height={size.height}
          alt=""
          style={{ position: "absolute", inset: 0 }}
        />
        {/* satori rozumie backgroundImage i jawne wymiary — nie `inset` ani skrót `background` */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: size.width,
            height: size.height,
            backgroundImage:
              "linear-gradient(100deg, rgba(28,36,31,0.94) 0%, rgba(28,36,31,0.86) 38%, rgba(28,36,31,0.45) 68%, rgba(28,36,31,0.25) 100%)",
          }}
        />

        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "0 72px",
            height: "100%",
            width: "760px",
          }}
        >
          <div
            style={{
              fontFamily: "Cormorant",
              fontSize: 26,
              letterSpacing: 10,
              color: "#c8d6c2",
            }}
          >
            POBIERAMY SIĘ
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: 18,
              fontFamily: "Great Vibes",
              color: "#f9f8f4",
              lineHeight: 1.05,
            }}
          >
            <span style={{ fontSize: 104 }}>{bride}</span>
            <span style={{ fontSize: 60, color: "#9fb49a", margin: "2px 0" }}>
              &amp;
            </span>
            <span style={{ fontSize: 104 }}>{groom}</span>
          </div>

          <div
            style={{
              marginTop: 34,
              fontFamily: "Cormorant",
              fontSize: 30,
              letterSpacing: 8,
              color: "#f9f8f4",
            }}
          >
            {`${dateUpper} · TYNIEC`}
          </div>

          <div
            style={{
              marginTop: 14,
              fontFamily: "Cormorant",
              fontSize: 22,
              letterSpacing: 5,
              color: "#c8d6c2",
            }}
          >
            STRONA WESELNA OD DOMU ZAPROSZEŃ
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Great Vibes", data: kaligrafia, style: "normal", weight: 400 },
        { name: "Cormorant", data: antykwa, style: "normal", weight: 600 },
      ],
    },
  );
}
