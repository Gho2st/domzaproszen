import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Dom Zaproszeń — pracownia papeterii ślubnej";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const kaligrafia = await readFile(
  join(process.cwd(), "assets/fonts/GreatVibes-Regular.ttf"),
);
const antykwa = await readFile(
  join(process.cwd(), "assets/fonts/CormorantGaramond-SemiBold.ttf"),
);
const tlo = await readFile(
  join(process.cwd(), "assets/og/papeteria-1200x630.jpg"),
);

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
          backgroundColor: "#2a2420",
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
              "linear-gradient(100deg, rgba(34,28,24,0.95) 0%, rgba(34,28,24,0.88) 42%, rgba(34,28,24,0.5) 72%, rgba(34,28,24,0.3) 100%)",
          }}
        />

        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "0 78px",
            height: "100%",
            width: "780px",
          }}
        >
          <div
            style={{
              fontFamily: "Great Vibes",
              fontSize: 82,
              color: "#f8f3ea",
              lineHeight: 1.1,
            }}
          >
            Dom Zaproszeń
          </div>

          <div
            style={{
              width: 96,
              height: 2,
              backgroundColor: "#a9814a",
              margin: "26px 0",
            }}
          />

          <div
            style={{
              fontFamily: "Cormorant",
              fontSize: 42,
              color: "#f8f3ea",
              lineHeight: 1.25,
            }}
          >
            Więcej niż zaproszenia
          </div>

          <div
            style={{
              marginTop: 22,
              fontFamily: "Cormorant",
              fontSize: 22,
              letterSpacing: 4,
              color: "#d8c7a8",
            }}
          >
            PAPETERIA ŚLUBNA · STRONY WESELNE
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
