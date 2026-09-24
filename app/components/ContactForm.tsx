"use client";

import { useActionState } from "react";
import { sendContact, type ContactState } from "../kontakt/actions";

const initialState: ContactState = { status: "idle", message: "" };

const inputClass =
  "mt-2 block w-full rounded-xl border border-black/15 bg-transparent px-4 py-3 outline-none transition focus:border-chas-blue focus:ring-2 focus:ring-chas-blue/30 dark:border-white/20 dark:focus:border-chas-cyan dark:focus:ring-chas-cyan/30";

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(
    sendContact,
    initialState,
  );

  if (state.status === "success") {
    return (
      <p
        role="status"
        className="rounded-2xl bg-chas-green px-6 py-5 font-medium text-chas-navy"
      >
        {state.message}
      </p>
    );
  }

  return (
    <form action={formAction} noValidate className="space-y-6">
      <div>
        <label htmlFor="name" className="font-medium">
          Namn
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          required
          defaultValue={state.fields?.name}
          aria-invalid={Boolean(state.errors?.name)}
          aria-describedby={state.errors?.name ? "name-error" : undefined}
          className={inputClass}
        />
        {state.errors?.name && (
          <p
            id="name-error"
            className="mt-2 text-sm text-red-600 dark:text-red-400"
          >
            {state.errors.name}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="font-medium">
          E-post
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          defaultValue={state.fields?.email}
          aria-invalid={Boolean(state.errors?.email)}
          aria-describedby={state.errors?.email ? "email-error" : undefined}
          className={inputClass}
        />
        {state.errors?.email && (
          <p
            id="email-error"
            className="mt-2 text-sm text-red-600 dark:text-red-400"
          >
            {state.errors.email}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="font-medium">
          Meddelande
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          defaultValue={state.fields?.message}
          aria-invalid={Boolean(state.errors?.message)}
          aria-describedby={state.errors?.message ? "message-error" : undefined}
          className={`${inputClass} resize-y`}
        />
        {state.errors?.message && (
          <p
            id="message-error"
            className="mt-2 text-sm text-red-600 dark:text-red-400"
          >
            {state.errors.message}
          </p>
        )}
      </div>

      {state.status === "error" && (
        <p
          aria-live="polite"
          className="text-sm font-medium text-red-600 dark:text-red-400"
        >
          {state.message}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="rounded-full bg-chas-orange px-6 py-3 text-sm font-semibold text-chas-navy transition hover:brightness-95 disabled:opacity-60"
      >
        {pending ? "Skickar…" : "Skicka"}
      </button>
    </form>
  );
}
