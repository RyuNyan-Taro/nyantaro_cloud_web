import './page.css'
import Image from 'next/image'
import Header from '@/components/Header'
import Contents from '@/components/Contents'
import SnsList from '@/components/SnsList'

export default function Home() {
  return (
    <div className="bg-[var(--background)] text-[var(--on-background)] min-h-screen relative overflow-x-hidden">

      {/* Global noise overlay */}
      <div className="noise-overlay z-50" />

      <Header />

      <main className="relative z-10 w-full max-w-7xl mx-auto px-wild-md py-wild-xl">

        {/* Hero / Manifesto Section */}
        <section className="relative min-h-[819px] flex flex-col justify-center items-start mb-wild-xl">
          <div className="absolute right-[-10%] top-[10%] w-2/3 h-3/4 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] bg-[var(--surface-container-high)] rotate-3 ambient-glow -z-10 mix-blend-multiply opacity-80 blur-xl" />

          <div className="relative z-20 w-full max-w-4xl">
            <h2 className="font-[var(--font-newsreader)] text-headline-xl text-[var(--primary-fixed)] mb-wild-sm transform -rotate-1 tracking-tighter drop-shadow-2xl">
              THE WILD COMPUTES
            </h2>
            <div className="ml-wild-md pl-wild-sm border-l-[3px] border-[var(--tertiary-fixed-dim)]/40 py-wild-xs max-w-2xl rotate-1">
              <p className="font-[var(--font-work-sans)] text-body-lg text-[var(--on-surface-variant)] mb-6 leading-relaxed">
                A digital garden at the edge of nature and code — blog, gallery, and tutorials cultivated from chaos.
              </p>
              <p className="font-[var(--font-work-sans)] text-body-md text-[var(--on-surface-variant)] opacity-80 italic">
                Nyantaro Cloud is not built; it is cultivated. Rooted in the chaotic efficiency of organic systems.
              </p>
            </div>
          </div>

          <div className="absolute left-[5%] bottom-[-5%] w-32 h-32 rounded-full border border-[var(--outline)]/20 mix-blend-overlay rotate-[17deg]" />
        </section>

        {/* Contents bento grid */}
        <Contents />

        {/* Wide Texture Section */}
        <section
          className="relative w-full overflow-hidden mb-wild-xl rounded-[10px_40px_10px_30px] shadow-[0_20px_50px_rgba(0,0,0,0.7)] transform rotate-[0.5deg]"
          style={{ height: 400 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--surface-container-lowest)] to-[var(--primary-container)] opacity-80 mix-blend-multiply z-10" />
          <Image
            src="/Clone.jpeg"
            alt="Abstract nature texture"
            fill
            unoptimized
            className="object-cover scale-110"
          />
          <div className="absolute inset-0 z-20 flex items-center justify-center p-wild-md">
            <div className="text-center max-w-3xl mix-blend-exclusion">
              <h3 className="font-[var(--font-newsreader)] text-headline-lg text-white mb-4 italic tracking-widest">
                Embrace the Overgrowth
              </h3>
              <div className="h-[2px] w-32 bg-[var(--secondary)] mx-auto transform rotate-[-2deg]" />
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer
        className="w-full border-t-4 border-[var(--surface-container-high)] bg-[#151a12] text-[var(--on-surface-variant)] flex flex-col items-center justify-center px-7 text-center relative z-40"
        style={{
          clipPath: "polygon(0% 5%, 5% 0%, 15% 4%, 25% 1%, 35% 5%, 45% 0%, 55% 4%, 65% 1%, 75% 5%, 85% 0%, 95% 4%, 100% 1%, 100% 100%, 0% 100%)",
          paddingTop: "4rem",
          paddingBottom: "4rem",
        }}
      >
        <div className="font-[var(--font-newsreader)] text-xl font-bold text-[var(--on-surface-variant)] mb-6 transform -rotate-1 tracking-widest">
          NYANTARO CLOUD
        </div>
        <ul className="flex flex-wrap justify-center gap-4 mb-8">
          <li>
            <a href="/blog" className="text-[var(--on-surface-variant)] px-3 hover:text-[var(--primary-fixed)] transition-colors">
              Blog
            </a>
          </li>
          <li>
            <a href="/gallery" className="text-[var(--on-surface-variant)] px-3 hover:text-[var(--primary-fixed)] transition-colors">
              Gallery
            </a>
          </li>
          <li>
            <a href="/tutorial" className="text-[var(--on-surface-variant)] px-3 hover:text-[var(--primary-fixed)] transition-colors">
              Tutorial
            </a>
          </li>
        </ul>
        <SnsList />
        <div className="mt-6 opacity-60 font-[var(--font-work-sans)] text-label-sm tracking-widest uppercase">
          © Nyantaro Cloud — Rooted in Chaos
        </div>
      </footer>

    </div>
  );
}
