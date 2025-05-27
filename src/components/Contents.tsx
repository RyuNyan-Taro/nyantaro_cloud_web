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
        href: "/creating",
        src: "/Future.jpeg",
        alt: "movie"
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

export default function Contents () {
    return (
    <div className="bg-[url('/Good_night.jpeg')] bg-cover bg-center relative min-h-screen">
        <div className="absolute inset-0 bg-black/40 z-20 pointer-events-none" />
            <h2 className="text-center text-2xl font-bold">
                Contents
            </h2>
            <div className="flex flex-wrap gap-16 justify-center">
                {buttonsList.map((button, index) => (
                    <RoundImageButton
                        key={index}
                        href={button.href}
                        src={button.src}
                        alt={button.alt}
                    />
                ))}
            </div>
    </div>
    );
}
