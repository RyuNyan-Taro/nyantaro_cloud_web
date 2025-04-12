import { RoundImageButton } from '@/components/RoundImageButton'

export default function Contents () {
    return (
    <div className="bg-[url('/Good_night.jpeg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none" />
            <div className="px-12 pb-12 pt-0">
                <h2>
                    Contents
                </h2>
                <div className="flex flex-wrap gap-16 justify-center">
                    <RoundImageButton
                        href="/"
                        src="/Bull.jpeg"
                        alt="blog"
                    />
                    <RoundImageButton
                        href="/"
                        src="/Clone.jpeg"
                        alt="galley"
                    />
                    <RoundImageButton
                        href="/"
                        src="/Future.jpeg"
                        alt="movie"
                    />
                    <RoundImageButton
                        href="/"
                        src="/Future.jpeg"
                        alt="movie"
                    />
                </div>
            </div>
    </div>
    );
}