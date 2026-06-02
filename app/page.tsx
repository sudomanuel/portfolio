import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Awards from "@/components/Awards";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Experience />
      <Education />
      <Skills />
      <Awards />
      <Contact />
      <footer className="border-t border-white/[0.05] py-8 px-6">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-display font-extrabold text-white text-sm">
            mpj<span className="text-indigo-400">.</span>
          </p>
          <p className="text-zinc-600 text-sm">
            © {new Date().getFullYear()} Manuel Pusma Jurado · Built with Next.js & Tailwind
          </p>
        </div>
      </footer>
    </main>
  );
}
