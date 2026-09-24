import Image from "next/image";
import Link from "next/link";
import ColorStripe from "./ColorStripe";

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-[70vh] items-center overflow-hidden">
      <Image
        src="/chasbackgroundnarrow.png"
        alt=""
        fill
        loading="eager"
        fetchPriority="high"
        sizes="100vw"
        className="-z-20 object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-linear-to-r from-background/85 via-background/50 to-transparent lg:bg-[linear-gradient(to_right,color-mix(in_oklab,var(--background)_85%,transparent)_28rem,color-mix(in_oklab,var(--background)_50%,transparent)_40rem,transparent_52rem)]" />

      <div className="w-full px-6 py-24 sm:px-12 lg:px-20">
        <Image
          src="/logo.png"
          alt="Chas Academy studentkår"
          width={1051}
          height={958}
          className="h-24 w-auto"
        />
        <p className="mt-6 text-sm font-semibold uppercase tracking-widest text-chas-blue dark:text-chas-cyan">
          Chas Academy
        </p>
        <h1 className="mt-4 max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl">
          Chas Studentkår
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-700 dark:text-zinc-300">
          Grattis, du har hittat till Chas Academy, Sveriges främsta IT-skola
          och hem för vår enastående studentkår. Som medlem blir du en del av
          det pulserande studentlivet.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/medlemskap"
            className="rounded-full bg-chas-orange px-6 py-3 text-center text-sm font-semibold text-chas-navy transition hover:brightness-95"
          >
            Bli medlem
          </Link>
          <a
            href="/aktiviteter"
            className="rounded-full bg-chas-cyan px-6 py-3 text-center text-sm font-semibold text-chas-navy transition hover:brightness-95"
          >
            Läs mer
          </a>
        </div>
      </div>

      <ColorStripe className="absolute inset-x-0 bottom-0" />
    </section>
  );
}
