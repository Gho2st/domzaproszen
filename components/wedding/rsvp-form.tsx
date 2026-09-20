"use client";

import { useState } from "react";
import { IconArrow, IconCheckCircle, IconHeart } from "@/components/icons";

const MENU = ["Mięsne", "Wegetariańskie", "Wegańskie", "Bezglutenowe"];

const fieldClass =
  "w-full rounded-xl border border-line bg-ivory px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-ink-soft/60 focus:border-accent";
const labelClass =
  "mb-2 block text-xs font-medium uppercase tracking-[0.14em] text-ink-soft";

export function RsvpForm() {
  const [attending, setAttending] = useState<"yes" | "no">("yes");
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="rounded-2xl border border-line bg-ivory p-10 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 text-accent">
          {attending === "yes" ? <IconHeart size={26} /> : <IconCheckCircle size={26} />}
        </div>
        <h3 className="mt-6 font-display text-2xl font-semibold text-ink">
          {attending === "yes"
            ? "Dziękujemy! Nie możemy się doczekać"
            : "Dziękujemy za informację"}
        </h3>
        <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-ink-soft">
          {attending === "yes"
            ? "Potwierdzenie trafiło do nas. Bliżej terminu wyślemy przypomnienie z harmonogramem dnia."
            : "Będzie nam Was brakowało — dziękujemy, że daliście znać."}
        </p>
        <p className="mx-auto mt-6 max-w-sm rounded-xl bg-ivory-deep px-4 py-3 text-xs leading-relaxed text-ink-soft">
          To strona pokazowa — formularz nie wysyła żadnych danych. Na prawdziwej
          stronie odpowiedź trafia do arkusza pary młodej i na ich maila.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-6 text-sm font-medium text-accent underline underline-offset-4 transition-colors hover:text-accent-deep"
        >
          Wypełnij jeszcze raz
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="flex flex-col gap-6 rounded-2xl border border-line bg-ivory p-7 sm:p-10"
    >
      <div>
        <label className={labelClass} htmlFor="rsvp-name">
          Imiona i nazwiska
        </label>
        <input
          id="rsvp-name"
          name="name"
          required
          placeholder="np. Kasia i Marek Nowakowie"
          className={fieldClass}
        />
      </div>

      <div>
        <label className={labelClass} htmlFor="rsvp-contact">
          E-mail lub telefon
        </label>
        <input
          id="rsvp-contact"
          name="contact"
          required
          placeholder="żebyśmy mogli potwierdzić"
          className={fieldClass}
        />
      </div>

      <fieldset>
        <legend className={labelClass}>Czy będziecie z nami?</legend>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {[
            { value: "yes" as const, label: "Tak, będziemy!" },
            { value: "no" as const, label: "Niestety nie damy rady" },
          ].map((o) => (
            <label
              key={o.value}
              className={`flex cursor-pointer items-center gap-3 rounded-xl border px-4 py-3 text-sm transition-colors ${
                attending === o.value
                  ? "border-accent bg-accent/8 text-ink"
                  : "border-line text-ink-soft hover:border-accent/50"
              }`}
            >
              <input
                type="radio"
                name="attending"
                value={o.value}
                checked={attending === o.value}
                onChange={() => setAttending(o.value)}
                className="sr-only"
              />
              <span
                className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full border ${
                  attending === o.value ? "border-accent" : "border-line"
                }`}
              >
                {attending === o.value ? (
                  <span className="h-2 w-2 rounded-full bg-accent" />
                ) : null}
              </span>
              {o.label}
            </label>
          ))}
        </div>
      </fieldset>

      {attending === "yes" ? (
        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label className={labelClass} htmlFor="rsvp-adults">
                Liczba osób dorosłych
              </label>
              <select
                id="rsvp-adults"
                name="adults"
                defaultValue="2"
                className={fieldClass}
              >
                {[1, 2, 3, 4].map((n) => (
                  <option key={n} value={n}>
                    {n}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className={labelClass} htmlFor="rsvp-kids">
                Dzieci
              </label>
              <select
                id="rsvp-kids"
                name="kids"
                defaultValue="0"
                className={fieldClass}
              >
                {[0, 1, 2, 3].map((n) => (
                  <option key={n} value={n}>
                    {n}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className={labelClass} htmlFor="rsvp-menu">
              Preferowane menu
            </label>
            <select
              id="rsvp-menu"
              name="menu"
              defaultValue={MENU[0]}
              className={fieldClass}
            >
              {MENU.map((m) => (
                <option key={m} value={m}>
                  {m}
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label className={labelClass} htmlFor="rsvp-hotel">
                Nocleg w hotelu przy sali
              </label>
              <select
                id="rsvp-hotel"
                name="hotel"
                defaultValue="Tak, prosimy o pokój"
                className={fieldClass}
              >
                <option>Tak, prosimy o pokój</option>
                <option>Nie, mamy własny nocleg</option>
                <option>Jeszcze nie wiemy</option>
              </select>
            </div>
            <div>
              <label className={labelClass} htmlFor="rsvp-transport">
                Autokar z centrum miasta
              </label>
              <select
                id="rsvp-transport"
                name="transport"
                defaultValue="Tak, skorzystamy"
                className={fieldClass}
              >
                <option>Tak, skorzystamy</option>
                <option>Nie, dojedziemy sami</option>
              </select>
            </div>
          </div>

          <div>
            <label className={labelClass} htmlFor="rsvp-song">
              Piosenka, przy której musicie zatańczyć
            </label>
            <input
              id="rsvp-song"
              name="song"
              placeholder="wykonawca — tytuł"
              className={fieldClass}
            />
          </div>
        </div>
      ) : null}

      <div>
        <label className={labelClass} htmlFor="rsvp-message">
          Wiadomość dla nas
        </label>
        <textarea
          id="rsvp-message"
          name="message"
          rows={3}
          placeholder="alergie, uwagi, dobre słowo"
          className={`${fieldClass} resize-none`}
        />
      </div>

      <button
        type="submit"
        className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-medium text-ivory transition-colors hover:bg-accent-deep"
      >
        Wyślij potwierdzenie
        <IconArrow />
      </button>

      <p className="text-center text-xs leading-relaxed text-ink-soft">
        Prosimy o odpowiedź do 30 kwietnia 2027.
      </p>
    </form>
  );
}
