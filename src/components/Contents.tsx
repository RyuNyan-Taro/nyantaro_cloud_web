import Image from 'next/image'
import { RoundImageButton } from '@/components/RoundImageButton'

export interface ButtonData {
    href: string;
    src: string;
    alt: string;
}

const buttonsList: ButtonData[] = [
    {
        href: "/blog",
        src: "/Bull.jpeg",
        alt: "blog"
    },
    {
        href: "/gallery",
        src: "/Clone.jpeg",
        alt: "gallery"
    },
    {
        href: "/tutorial",
        src: "/Future.jpeg",
        alt: "tutorial"
    },
    {
        href: "/creating",
        src: "/Future.jpeg",
        alt: "movie"
    },
    {
        href: "/creating",
        src: "/Good_night.jpeg",
        alt: "under construction"
    }
]

export default function Contents() {
    return (
        <section className="relative grid grid-cols-1 md:grid-cols-12 gap-wild-md mb-wild-xl">

            {/* Left image block */}
            <div className="md:col-span-7 relative z-10 transform -rotate-2 hover:rotate-0 transition-transform duration-700">
                <div className="torn-edge p-2 bg-[var(--surface-variant)] shadow-[10px_10px_30px_rgba(0,0,0,0.6)] overflow-hidden">
                    <Image
                        src="/Bull.jpeg"
                        alt="blog"
                        width={800}
                        height={600}
                        unoptimized
                        className="w-full h-[600px] object-cover mix-blend-luminosity hover:mix-blend-normal transition-all duration-1000 grayscale hover:grayscale-0"
                    />
                </div>
                {/* Splat icon */}
                <div className="absolute -bottom-6 -right-6 bg-[var(--primary-container)] text-[var(--primary-fixed)] p-4 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] shadow-lg rotate-[15deg] z-10">
                    <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                        psychiatry
                    </span>
                </div>
            </div>

            {/* Right text + nav block */}
            <div className="md:col-span-5 relative flex flex-col justify-center pt-wild-md md:pt-0 z-20">
                <div className="bg-[var(--surface-container)]/90 p-wild-sm border-t border-r border-[var(--outline-variant)]/30 backdrop-blur-sm md:translate-x-[-20%] translate-y-[10%] rotate-1 shadow-[inset_0_0_20px_rgba(0,0,0,0.8)]">
                    <h2 className="font-[var(--font-newsreader)] text-headline-md text-[var(--tertiary)] mb-wild-sm">
                        Cultivating Chaos
                    </h2>
                    <ul className="space-y-6 mb-wild-sm">
                        <li className="flex items-start gap-3">
                            <span className="material-symbols-outlined text-[var(--secondary)] mt-1 -rotate-[10deg]">eco</span>
                            <span className="font-[var(--font-work-sans)] text-body-md text-[var(--on-surface)]">
                                Data behaves like mycelium — it spreads where there is nourishment.
                            </span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="material-symbols-outlined text-[var(--secondary)] mt-1 rotate-[5deg]">landscape</span>
                            <span className="font-[var(--font-work-sans)] text-body-md text-[var(--on-surface)]">
                                Algorithms do not sort; they erode, like water shaping a canyon.
                            </span>
                        </li>
                    </ul>
                    <div className="flex flex-wrap gap-wild-sm">
                        {buttonsList.map((button, index) => (
                            <RoundImageButton
                                key={index}
                                href={button.href}
                                src={button.src}
                                alt={button.alt}
                                size={120}
                                grayscale
                                organicBlend
                            />
                        ))}
                    </div>
                </div>
            </div>

        </section>
    );
}
