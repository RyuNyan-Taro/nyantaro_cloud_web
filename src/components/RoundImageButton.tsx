'use client'

import Image from 'next/image'
import Link from 'next/link'

import { cn } from '@/lib/utils'

type Props = {
    href: string
    src: string
    alt: string
    size?: number
    className?: string
    grayscale?: boolean
    organicBlend?: boolean
}

export const RoundImageButton: React.FC<Props> = ({
    href,
    src,
    alt,
    size = 300,
    className,
    grayscale = false,
    organicBlend = false,
}) => {
    return (
        <Link href={href}
            className={cn(
                'group relative inline-block rounded-full overflow-hidden transition-transform duration-200 hover:scale-105 hover:ring-2 hover:ring-primary',
                className
            )}
        style={{ width: size, height: size }}
        >
            <Image
                src={src}
                alt={alt}
                width={size}
                height={size}
                unoptimized
                className={cn(
                    "object-cover w-full h-full transition-all duration-1000",
                    grayscale && "grayscale hover:grayscale-0",
                    organicBlend && "mix-blend-luminosity hover:mix-blend-normal"
                )}
            />
            {alt && (
                <span className="absolute inset-0 flex items-center justify-center
                                text-white text-xl font-semibold bg-black/40
                                opacity-0 group-hover:opacity-100 transition-opacity duration-[1500ms]">
                    {alt}
                </span>
            )}
        </Link>
    )
}
