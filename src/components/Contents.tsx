import { RoundImageButton } from '@/components/RoundImageButton'

export default function Contents () {
    return (
    <div>
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
        </div>
    </div>
    );
}