"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { initialContactState, sendContactMessage } from "../actions/contact";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition-colors hover:bg-[#383838] disabled:cursor-not-allowed disabled:opacity-60 dark:hover:bg-[#ccc]"
    >
      {pending ? "Skickar..." : "Skicka meddelande"}
    </button>
  );
}

export default function Contact() {
  const [state, formAction] = useActionState(
    sendContactMessage,
    initialContactState
  );

  return (
    <div className="mx-auto max-w-2xl">
      <h2 className="text-2xl font-semibold tracking-tight">Kontakt</h2>
      <p className="mt-4 leading-7 text-zinc-700 dark:text-zinc-300">
        Har du frågor, idéer eller vill engagera dig? Skicka ett meddelande
        så hör vi av oss.
      </p>

      <form action={formAction} className="mt-8 space-y-4" noValidate>
        {/* Honeypot field, hidden from real users */}
        <input
          type="text"
          name="company"
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
          aria-hidden="true"
        />

        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
          >
            Namn
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="mt-2 w-full rounded-lg border border-black/[.08] bg-transparent px-4 py-2.5 text-sm outline-none focus:border-foreground dark:border-white/[.1]"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
          >
            E-post
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-2 w-full rounded-lg border border-black/[.08] bg-transparent px-4 py-2.5 text-sm outline-none focus:border-foreground dark:border-white/[.1]"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
          >
            Meddelande
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="mt-2 w-full rounded-lg border border-black/[.08] bg-transparent px-4 py-2.5 text-sm outline-none focus:border-foreground dark:border-white/[.1]"
          />
        </div>

        <div className="flex items-center gap-4">
          <SubmitButton />
          {state.status !== "idle" && (
            <p
              aria-live="polite"
              className={
                state.status === "success"
                  ? "text-sm text-emerald-600 dark:text-emerald-400"
                  : "text-sm text-red-600 dark:text-red-400"
              }
            >
              {state.message}
            </p>
          )}
        </div>
      </form>
    </div>
  );
}
