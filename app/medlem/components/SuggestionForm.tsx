"use client";

import { useActionState } from "react";
import {
  sendSuggestion,
  type SuggestionState,
} from "../(members)/forslag/actions";

const initialState: SuggestionState = { status: "idle", message: "" };

const inputClass =
  "mt-2 block w-full rounded-xl border border-black/15 bg-transparent px-4 py-3 outline-none transition focus:border-chas-blue focus:ring-2 focus:ring-chas-blue/30 dark:border-white/20 dark:focus:border-chas-cyan dark:focus:ring-chas-cyan/30";

export default function SuggestionForm() {
  const [state, formAction, pending] = useActionState(
    sendSuggestion,
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
    <form
      action={formAction}
      noValidate
      className="space-y-6"
    >
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
        <textarea
          id="suggestion"
          name="suggestion"
          rows={6}
          required
          maxLength={2000}
          placeholder="Ditt förslag…"
          defaultValue={state.fields?.suggestion}
          aria-invalid={Boolean(state.errors?.suggestion)}
          aria-describedby={
            state.errors?.suggestion ? "suggestion-error" : undefined
          }
          className={`${inputClass} resize-y`}
        />
        {state.errors?.suggestion && (
          <p
            id="suggestion-error"
            className="mt-2 text-sm text-red-600 dark:text-red-400"
          >
            {state.errors.suggestion}
          </p>
        )}
      </div>

      <div>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          placeholder="Namn (valfritt)"
          defaultValue={state.fields?.name}
          className={inputClass}
        />
      </div>

      <div>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="Email (valfritt)"
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
