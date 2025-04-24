import { RoundImageButton } from '@/components/RoundImageButton'

export default function Contents () {
    return (
    <div className="bg-[url('/Good_night.jpeg')] bg-cover bg-center relative min-h-screen">
        <div className="absolute inset-0 bg-black/40 z-20 pointer-events-none" />
            <div className="px-12 pb-12 pt-0">
                <h2 className="text-center text-2xl font-bold">
                    Contents
                </h2>
                <div className="flex flex-wrap gap-16 justify-center">
                    <RoundImageButton
                        href="/blog"
                        src="/Bull.jpeg"
                        alt="blog"
                    />
                    <RoundImageButton
                        href="/creating"
                        src="/Clone.jpeg"
                        alt="galley"
                    />
                    <RoundImageButton
                        href="/creating"
                        src="/Future.jpeg"
                        alt="movie"
                    />
                    <RoundImageButton
                        href="/creating"
                        src="/Future.jpeg"
                        alt="movie"
                    />
                    <RoundImageButton
                        href="/creating"
                        src="/Good_night.jpeg"
                        alt="under construction"
                    />
                </div>
            </div>
    </div>
    );
}
