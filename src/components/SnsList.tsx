export default function SnsList() {
    return (
        <nav className="flex flex-wrap gap-wild-md font-[var(--font-work-sans)] text-label-sm uppercase tracking-widest">
            <a
                href="https://twitter.com/Nyantar83781816"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--on-surface-variant)] hover:text-[var(--primary-fixed)] transition-colors px-3"
            >
                X (Twitter)
            </a>
            <a
                href="https://www.instagram.com/nyantarotaro/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--on-surface-variant)] hover:text-[var(--primary-fixed)] transition-colors px-3"
            >
                Instagram
            </a>
        </nav>
    )
}
