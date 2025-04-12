'use client'

import { useEffect } from 'react'

export default function SnsList() {
    useEffect(() => {
        const script = document.createElement('script')
        script.src = 'https://platform.twitter.com/widgets.js'
        script.async = true
        document.body.appendChild(script)
    }, [])

    return (
        <div className="h-full overflow-y-auto p-4 space-y-4">
            <h2 className="text-2xl font-bold">SNS</h2>

            {/* Twitterタイムライン */}
            <div className="h-[500px]">
                <a
                    className="twitter-timeline"
                    data-height="500"
                    href="https://twitter.com/Nyantar83781816"
                >
                    Tweets by Nyantar83781816
                </a>
            </div>

            {/* Instagramリンク */}
            <a
                href="https://www.instagram.com/nyantarotaro/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline block"
            >
                Instagram
            </a>
        </div>
    )
}
