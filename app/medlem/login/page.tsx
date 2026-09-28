import type { Metadata } from "next";
import LoginForm from "../components/LoginForm";

export const metadata: Metadata = {
  title: "Logga in | Medlemsområde | Chas Studentkår",
  description: "Logga in på Chas Studentkårs medlemsområde.",
};

export default async function MedlemLogin(props: PageProps<"/medlem/login">) {
  const searchParams = await props.searchParams;
  const fromParam = Array.isArray(searchParams.from)
    ? searchParams.from[0]
    : searchParams.from;
  const from =
    fromParam && fromParam.startsWith("/medlem") ? fromParam : "/medlem";

  return (
    <main className="flex-1">
      <div className="mx-auto max-w-md px-6 py-16">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Medlemsida 🔒
        </h1>
        <p className="mt-6 leading-7 text-zinc-700 dark:text-zinc-300">
          Som medlem i Chas Academys Studentkår får du tillgång till våra
          medlemsidor med exklusivt material.
        </p>
        <p className="mt-6 leading-7 text-zinc-700 dark:text-zinc-300">
          Ange kårens medlemslösenord för att komma in i värmen.
        </p>

        <div className="mt-10">
          <LoginForm from={from} />
        </div>
      </div>
    </main>
  );
}
