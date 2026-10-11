"use client";

import { useState } from "react";
import { IconArrow, IconCheckCircle, IconHeart } from "@/components/icons";

const MENU = ["Mięsne", "Wegetariańskie", "Wegańskie", "Bezglutenowe"];

/* Pola to podkreślone linie (.field w globals.css) — bliżej formularza
   na papierze niż pudełek z aplikacji. */
const fieldClass = "field";
const labelClass = "label mb-2 block text-ink-3";

export function RsvpForm() {
  const [attending, setAttending] = useState<"yes" | "no">("yes");
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="border border-rule bg-paper p-8 text-center sm:p-12">
        <div className="mx-auto flex h-14 w-14 items-center justify-center border border-rule text-accent">
          {attending === "yes" ? <IconHeart size={26} /> : <IconCheckCircle size={26} />}
        </div>
        <h3 className="mt-6 display text-d3 font-semibold text-ink">
          {attending === "yes"
            ? "Dziękujemy! Nie możemy się doczekać"
            : "Dziękujemy za informację"}
        </h3>
        <p className="mx-auto mt-3 max-w-sm text-ink-2">
          {attending === "yes"
            ? "Potwierdzenie trafiło do nas. Bliżej terminu wyślemy przypomnienie z harmonogramem dnia."
            : "Będzie nam Was brakowało — dziękujemy, że daliście znać."}
        </p>
        <p className="mx-auto mt-7 max-w-sm border-l-2 border-accent bg-paper-2 px-5 py-4 text-left text-sm text-ink-2">
          To strona pokazowa — formularz nie wysyła żadnych danych. Na prawdziwej
          stronie odpowiedź trafia do arkusza pary młodej i na ich maila.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-7 font-medium text-accent underline underline-offset-[5px] transition-colors hover:text-accent-2"
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
      className="flex flex-col gap-7 border border-rule bg-paper p-7 sm:p-10"
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
              className={`flex cursor-pointer items-center gap-3 rounded-[2px] border px-4 py-3.5 transition-colors ${
                attending === o.value
                  ? "border-accent bg-accent/8 text-ink"
                  : "border-rule text-ink-2 hover:border-accent/50"
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
                  attending === o.value ? "border-accent" : "border-rule"
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
        className="inline-flex items-center justify-center gap-2.5 rounded-[2px] bg-ink px-6 py-4 text-sm font-medium text-paper transition-colors hover:bg-accent"
      >
        Wyślij potwierdzenie
        <IconArrow />
      </button>

      <p className="text-center text-sm text-ink-2">
        Prosimy o odpowiedź do 30 kwietnia 2027.
      </p>
    </form>
  );
}
