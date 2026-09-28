import { logoutAction } from "../login/actions";

export default function LogoutButton() {
  return (
    <form action={logoutAction}>
      <button
        type="submit"
        className="rounded-full border border-black/15 px-4 py-2 text-sm font-medium text-zinc-700 transition hover:border-chas-orange hover:text-chas-navy dark:border-white/20 dark:text-zinc-300 dark:hover:text-white"
      >
        Logga ut
      </button>
    </form>
  );
}
