"use client";

import { useActionState } from "react";
import { loginAction, type LoginState } from "../login/actions";

const initialState: LoginState = { status: "idle", message: "" };

const inputClass =
  "mt-2 block w-full rounded-xl border border-black/15 bg-transparent px-4 py-3 outline-none transition focus:border-chas-blue focus:ring-2 focus:ring-chas-blue/30 dark:border-white/20 dark:focus:border-chas-cyan dark:focus:ring-chas-cyan/30";

export default function LoginForm({ from }: { from: string }) {
  const [state, formAction, pending] = useActionState(
    loginAction,
    initialState,
  );

  return (
    <form action={formAction} className="space-y-6">
      <input type="hidden" name="from" value={from} />

      <div>
        <label
          htmlFor="password"
          className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
        >
          Lösenord
        </label>
        <input
          id="password"
          name="password"
          type="password"
          autoComplete="current-password"
          required
          aria-invalid={state.status === "error"}
          aria-describedby={
            state.status === "error" ? "password-error" : undefined
          }
          className={inputClass}
        />
      </div>

      {state.status === "error" && (
        <p
          id="password-error"
          role="alert"
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
        {pending ? "Loggar in…" : "Logga in"}
      </button>
    </form>
  );
}
