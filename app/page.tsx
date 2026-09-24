import Contact from "./components/Contact";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <section id="kontakt" className="border-t border-black/[.08] px-6 py-16 dark:border-white/[.1]">
        <Contact />
      </section>
    </main>
  );
}
