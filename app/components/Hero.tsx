import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-[70vh] items-center overflow-hidden">
      <Image
        src="/hero-placeholder.svg"
        alt=""
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-24">
        <Image
          src="/logo.png"
          alt="Chas Academy studentkår"
          width={1051}
          height={958}
          className="h-24 w-auto"
        />
        <p className="mt-6 text-sm font-medium uppercase tracking-widest text-cyan-300">
          Chas Academy
        </p>
        <h1 className="mt-4 max-w-2xl text-4xl font-semibold tracking-tight text-white sm:text-6xl">
          Chas Studentkår
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-200">
          Grattis, du har hittat till Chas Academy, Sveriges främsta IT-skola
          och hem för vår enastående studentkår. Som medlem blir du en del av
          det pulserande studentlivet.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/medlemskap"
            className="rounded-full bg-white px-6 py-3 text-center text-sm font-semibold text-black transition-colors hover:bg-zinc-200"
          >
            Bli medlem
          </Link>
          <a
            href="#om-oss"
            className="rounded-full border border-white/40 px-6 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            Läs mer
          </a>
        </div>
      </div>
    </section>
  );
}
