import { logoutAction } from "../login/actions";

const defaultClassName =
  "rounded-full border border-black/15 px-4 py-2 text-sm font-medium text-zinc-700 transition hover:border-chas-orange hover:text-chas-navy dark:border-white/20 dark:text-zinc-300 dark:hover:text-white";

export default function LogoutButton({
  className,
  formClassName,
}: {
  className?: string;
  formClassName?: string;
}) {
  return (
    <form action={logoutAction} className={formClassName}>
      <button type="submit" className={className ?? defaultClassName}>
        Logga ut
      </button>
    </form>
  );
}
